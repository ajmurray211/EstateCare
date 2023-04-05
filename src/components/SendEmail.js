import React, { useState } from 'react';
import { Button, Alert } from 'reactstrap';
import emailjs from 'emailjs-com';

const SendEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const sendEmail = () => {
    setIsLoading(true);
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      "to_email": "RECIPIENT_EMAIL",
      "from_name": "YOUR_NAME",
      "message": "YOUR_MESSAGE"
    }, "YOUR_USER_ID")
      .then(() => {
        setIsSent(true);
        setIsLoading(false);
        setTimeout(() => setIsSent(false), 10000);
        setAlertMessage('Email sent successfully!');
        setAlertVisible(true);
      })
      .catch(error => {
        console.log(error);
        setAlertMessage('Failed to send email. Please try again.');
        setAlertVisible(true);
        setIsLoading(false);
        setTimeout(() => setAlertVisible(false), 10000);
      });
  };

  const onDismissAlert = () => {
    setAlertVisible(false);
  };

  return (
    <>
      <Button color={isSent ? "success" : "danger"} onClick={sendEmail} disabled={isLoading}>
        {isLoading ? "Sending..." : isSent ? "Sent!" : "Send Email"}
      </Button>
      <Alert color={isSent ? "success" : "danger"} isOpen={alertVisible} toggle={onDismissAlert}>
        {alertMessage}
      </Alert>
    </>
  );
};

export default SendEmail;
