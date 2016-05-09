import * as React from 'react';
import {HelpBlock, FormGroup} from 'react-bootstrap';

interface ValidationGroupProps extends React.Props<{}> {
    validation: (path:string)=>Array<string>;
    path:string;
}

const ValidationGroup = (props: ValidationGroupProps) => {
    const {validation, path} = props;
    const validationMessage = validation(path) || [];

    const collectedMessages = validationMessage.map((message, index) =>
        <HelpBlock key={`validation-id-${index}`}>{message}</HelpBlock>);

    const validationState = validationMessage.length === 0 ? undefined : 'error';

    return <FormGroup validationState={validationState}>
        {props.children}
        {collectedMessages}
    </FormGroup>
};

export default ValidationGroup;