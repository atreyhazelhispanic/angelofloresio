import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';


const EmailContactForm = (props) => {
    const form = useRef();
    const [show, setShow] = useState(false);

    const alert =
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Email could not be sent!</p>
        </Alert>

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAIL_PUBLIC_KEY)
            .then((result) => {
                console.log(result);
                props.onHide();
            }, (error) => {
                console.log(error);
                setShow(true);
            });
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <Row>
                    <Col xs={4} md={4}>
                        <label>Name</label>
                    </Col>
                    <Col xs={4} md={4}>
                        <input type="text" name="name" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} md={4}>
                        <label>Email</label>

                    </Col>
                    <Col xs={4} md={4}>
                        <input type="email" name="email" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} md={4}>
                        <label>Message</label>
                    </Col>
                    <Col xs={4} md={4}>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </Col>
                </Row>
            </form>

            {show && alert}
        </div>
    );
};

export default EmailContactForm;