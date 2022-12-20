import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const FAQ = () => {
    return (
        <Container>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> What is Educademy?</Accordion.Header>
                    <Accordion.Body>
                       Educamy is a popular course selling platform.There are serveral courses on programming and IT
                       on Educademy. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How can I get access to the course category page</Accordion.Header>
                    <Accordion.Body>
                       Educademy restricts access to course page from unregistred users.To get access you have to
                       register first and then visit the courses page.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> How to download course description? </Accordion.Header>
                    <Accordion.Body>
                        To download course description you have to visit the course details page.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> How to see the course I want? </Accordion.Header>
                    <Accordion.Body>
                      There are several categories to  find your desired course.Visit the course categories 
                      and see your courses.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
         </Container>
    );
};

export default FAQ;