import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SideNav from '../../layout/SideNav/SideNav';
import Blog from '../Blog/Blog';

const Home = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <SideNav></SideNav>
            </Col>
            <Col xs={9}>
                    <h3 className='text-center mt-4'>Welcome to Educademy</h3>
            </Col>
            </Row>
           
        </Container>
            
    );
};

export default Home;