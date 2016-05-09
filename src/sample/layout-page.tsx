import * as React from 'react';
import {
    Col,
    Grid,
    Row
} from 'react-bootstrap';
const LayoutPage = (props) => {
    return (
        <Grid>
            <Row>
                <Col sm={6}>
                    Hello, world
                </Col>
                <Col sm={6}>
                    Hello, world
                </Col>
            </Row>
        </Grid>

    );
}
export default LayoutPage;