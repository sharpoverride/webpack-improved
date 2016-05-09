import * as React from 'react'
import * as Rx from 'rxjs';

import ValidationGroup from '../components/validation-group';

import {
    pages, 
    validation,
    firstName,
    lastName
} from '../context/accessor'
import Context from '../context';

import {
    Grid, Row, Col,
    PageHeader,
    Panel,
    Button,
    ControlLabel,
    Form,
    FormControl,
    FormGroup
} from 'react-bootstrap';
import {Cursor} from "immutable/contrib/cursor";
import * as joi from 'joi';

interface ValidationModel {
    [index:string]:Array<string>;
}

interface ValidationState {
    model?:Cursor;
    validationResult?: ValidationModel
}

const validationSchema = joi.object().keys({
    firstName: joi.string().alphanum().max(30).required().label('First name'),
    lastName: joi.string().alphanum().max(30).required().label('Last name')
});

export default class ValidationPage extends React.Component<any, ValidationState> {
    updateSubscription: Rx.Subscription;
    listenForUpdates:(model:Cursor)=>void;

    change:(propPath:string)=>void;
    validation:(propPath:string)=>Array<string>;

    onSubmit: (ev:React.FormEventHandler)=>boolean;

    constructor() {
        super();

        this.listenForUpdates = this.onUpdate.bind(this);
        this.change = this.changeAtPath.bind(this);
        this.validation = this.validationAtPath.bind(this);
        this.onSubmit = this.submit.bind(this);
    }

    onUpdate(cursor) {
        const validationPage = validation(
            pages(cursor));

        this.setState({model: validationPage});
        const boundValue = validationPage.toJS();
    }

    changeAtPath(propertyPath:string) {
        return (ev) => {
            const {model} = this.state;
            const value = ev.target.value;

            const modelChange = model.update(propertyPath, _ => value).toJS();
            this.validateModel(modelChange);
        }
    }

    validateModel(model) {
        const validationResult = joi.validate<any>(model, validationSchema,
            {
                abortEarly: false
            });

        if (!validationResult.error) {
            this.setState({validationResult: {}});
            return true;
        }

        this.setState({
            validationResult: validationResult.error.details.reduce(
                (state, value) => {
                    const collectedErrors = state[value.path] || [];
                    state[value.path] = collectedErrors.concat([value.message]);
                    return state;
                }, {} as ValidationModel)
        });

        return false;
    }

    validationAtPath(propertyPath:string) {
        const {validationResult} = this.state;
        if(!validationResult) {
            return [];
        }

        return validationResult[propertyPath];
    }

    submit(ev) {
        const {model} = this.state;
        if(!this.validateModel(model.toJS())) {
            ev.preventDefault();
            return;
        }
    }

    componentWillMount() {
        this.updateSubscription = Context.subscribe(this.listenForUpdates)
    }

    componentWillUnmount() {
        this.updateSubscription.unsubscribe();
    }

    render() {
        const {model} = this.state;

        return (<Grid>
            <Row>
                <Col>
                    <PageHeader>Validation</PageHeader>
                </Col>
            </Row>
            <Row>
                <Panel header="Validation for common cases">
                    <Form
                         onSubmit={this.onSubmit}
                    >
                        <ValidationGroup
                            path={firstName.prototype.Prop}
                            validation={this.validation}
                            >
                            <ControlLabel>First name</ControlLabel>
                            <FormControl
                                type="text"
                                value={firstName(model) || ''}
                                placeholder="First name"
                                onChange={this.change(firstName.prototype.Prop)}
                            />
                        </ValidationGroup>

                        <ValidationGroup
                            path={lastName.prototype.Prop}
                            validation={this.validation}
                        >
                            <ControlLabel>Last name</ControlLabel>
                            <FormControl
                                type="text"
                                value={lastName(model) || ''}
                                placeholder="Last name"
                                onChange={this.change(lastName.prototype.Prop)}
                            />
                        </ValidationGroup>

                        <FormGroup>
                            <Button type="submit">
                                Submit
                            </Button>
                        </FormGroup>
                    </Form>
                </Panel>
            </Row>
        </Grid>)
    }
}