import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    console.log(course);

   
    return (
        <Container>
            <h4 className='my-4 text-center'>Course successfully added</h4>
            <Card style={{width:"20rem"}}>
                <Card.Img variant="top" src={course.img_url} />
                <Card.Body className='text-start'>
                    <Card.Title>{course.course_title}</Card.Title>
                    <Card.Text>
                        {course.details}
                    </Card.Text>
                    <div className='d-flex justify-content-between fw-bold'>
                        <span>Price: {course.price}</span>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Checkout;