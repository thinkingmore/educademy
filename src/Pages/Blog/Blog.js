import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blog = () => {
    return (
         <Container>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> What is cors?</Accordion.Header>
                    <Accordion.Body>
                       CORS is the Cross-Origin Resource Sharing which is an HTTP header mechanism 
                       that tells server indicate any origins (domain, scheme, or port) 
                       other than its own from which a browser should allow loading resources. CORS failure 
                       results in error which can be viewed by going to browser consoles.When CORS origin occurs 
                       browser fails to fetch resources from the server and display that data on a webpage.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication? </Accordion.Header>
                    <Accordion.Body>
                       Firebase provides a strong and secured app authentication 
                       system along with hosting and site analytics.Therefore, implementing firebase 
                       authentication is a smart choice for web application developers.Auth0, MongoDB, 
                       Passport, Okta  are some good alternatives to firebase authentication.An app developer 
                       can also create a back-end programme that will allow users to authenticate by using their 
                       email,password or other credential by using a web programming language.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> How does the private route work? </Accordion.Header>
                    <Accordion.Body>
                       Private route grant permission to users of a website or web application while 
                       visiting different pages of a website by their user status or level of access.
                       For example, there can be some public pages which can be visited by anyone 
                       and there can be some specific pages that only the logged in users can visit and 
                       there can some pages which only the admins of a web application can visit.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> What is Node? How does Node work? </Accordion.Header>
                    <Accordion.Body>
                      Node is an open-source JavaScript runtime environment that comes with different packages
                      installment facility.It is commonly used by the web developers for building dynamic front-end
                      web application and server.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
         </Container>
    );
};

export default Blog;