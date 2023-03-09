import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import EmailContactForm from "../../email/EmailContactForm";

export function EmailModal(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton style={{background: '#102468', color: 'white'}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Email Atrey
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid" style={{background: '#48C7FF'}}>
                <Container>
                    <EmailContactForm onHide={props.onHide} />
                </Container>
            </Modal.Body>
            <Modal.Footer style={{background: '#102468'}}>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}