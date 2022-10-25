import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const Course = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <Card style={{width:'30rem'}}>
            <Card.Img variant="top" src={course.img_url} />
            <Card.Body>
            <Card.Title>{course.course_title}</Card.Title>
            <Card.Text>
               {course.details}
            </Card.Text>
            <div className='d-flex justify-content-between mb-4 fw-bold'>
                <span>Price:  {course.price}</span>
                <span>Rating: {course.rating}</span>
                <span>Review: {course.review}</span>
            </div>
            <Button style={{width:'10rem'}} variant="primary">Buy</Button>
            </Card.Body>
       </Card>
    );
};

export default Course;