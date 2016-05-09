import * as React from 'react';
import {
    Button,
    DropdownButton,
    MenuItem,
    OverlayTrigger,
    Modal,
    Tooltip,
    Popover
} from 'react-bootstrap';

class IntroductionPage extends React.Component<any, any> {

    componentWillMount() {
        this.setState({
            showModal: false
        });
    }

    close() {
        this.setState({
            showModal: false
        })
    }

    render() {
        const i = 1;
        const popover = <Popover id="popover-engagement" title="popover">very popover. such engagement</Popover>;
        const tooltip = <Tooltip id="tooltip-wow">wow.</Tooltip>;
        const closeModal = this.close.bind(this);

        return (<div>Hello, this is your introduction
            <DropdownButton
                bsStyle={'default'}
                title={'Default'}
                key={i} id={`dropdown-basic-${i}`}
                onSelect={(eventKey, event) => {
                console.log(`Your key is ${eventKey}`);
                if (eventKey === "1") {
                    this.setState({
                    showModal: true
                    });
                }

            }}
            >
                <MenuItem eventKey="1">Show modal</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3" active>Active Item</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey="4">Separated link</MenuItem>
            </DropdownButton>

            <Modal show={this.state.showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Text in a modal</h4>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                    <h4>Popover in a modal</h4>
                    <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

                    <h4>Tooltips in a modal</h4>
                    <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

                    <hr />

                    <h4>Overflowing text to show scroll behavior</h4>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>)
    }
}

export default IntroductionPage;