import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Main = () => {
    return (
        <div>
            <Container>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default Main;