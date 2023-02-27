import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

export function ModalFunction(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Stats
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col xs={12} md={8} style={{paddingBottom: '10px'}}>
                            Comprehensive Heroes
                        </Col>
                        <Col xs={6} md={4}>
                            {props.stats.heroes}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                            <img src={props.stats.portrait} width='50' height='50' />
                        </Col>
                        <Col xs={6} md={4} style={{
                            fontSize: '20px',
                            fontStyle: 'bold',
                            textDecorationLine: 'underline',
                            fontFamily: 'Lobster'
                        }}>
                            {props.stats.username}
                        </Col>
                        <Col xs={6} md={4}>
                            <img src={props.stats.endorsement} width='50' height='50' />
                        </Col>
                    </Row>
                    <Row>
                        {props.stats.videos}
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}