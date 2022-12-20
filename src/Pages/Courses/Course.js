import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';
import { FaArrowCircleRight } from 'react-icons/fa';
import jsPDF from 'jspdf';

const Course = () => {
    const course = useLoaderData();
    
    
    const print = () => {
            const doc = new jsPDF();
            const details = document.getElementById("csName").textContent;
            const price = document.getElementById("csPrice").textContent;
            doc.setFontSize(20)
            doc.text(35,25,details)
            doc.text(60,50,price)
            doc.save('welcome.pdf')
         }
    
   
    return (
        <Container>
            <Card className='my-4'>
                <Card.Header>Welcome to our course</Card.Header>
                <Card.Body>
                    <Card.Title>Before you purchase this course please read the following:</Card.Title>
                    <Card.Text>
                        <ol id='outline'>
                            <li>This course gives you access to course materials and videos for personal use.
                                You can not use those materials for public distribution.
                                You can not share the course video or materials</li>
                            <li>You can not any parts of course video or materials and share those 
                                on social media platforms</li>
                            <li>You can download the course videos or materials for preservation.</li>
                            <li>You can not sell or transfer your access too this course.</li>    
                        </ol>
                    </Card.Text>
                    <Button onClick={print} variant="primary">Download <FaArrowCircleRight/></Button>
                </Card.Body>
            </Card>
            <Card id="courseDetails" style={{width:"60%"}}>
                <Card.Img variant="top" src={course.img_url} />
                <Card.Body>
                <Card.Title id="csName">{course.course_title}</Card.Title>
                <Card.Text>
                {course.details}
                </Card.Text>
                <div className='d-flex justify-content-between mb-4 fw-bold'>
                    <span id="csPrice">Price:  {course.price}</span>
                    <span>Rating: {course.rating}</span>
                    <span>Review: {course.review}</span>
                </div>
                <Link to={`checkout/${course.id}`}><Button size="md" variant="primary">Get premium access</Button></Link>
                </Card.Body>
            </Card>
        </Container>
        
    );
};

export default Course;