import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
    const { user, logOut }  = useContext(AuthContext);
    
    const handleLogOut = () => {
        logOut()
        .then(()=> {})
        .catch(error => console.error(error))
    }
    return (
            <div>
            <Navbar collapseOnSelect className="mb-4" expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><Link to='/' className='text-decoration-none'>Educademy</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link><Link to='/courses/09' className='text-decoration-none text-dark'>Courses</Link></Nav.Link>
                        <Nav.Link><Link to='/faq' className='text-decoration-none text-dark'>FAQ</Link></Nav.Link>
                        <Nav.Link><Link to='/blog' className='text-decoration-none text-dark'>Blog</Link></Nav.Link>
                        <Nav.Link><Link to='/contact' className='text-decoration-none text-dark'>Contact</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                <>
                                    <span>{user?.displayName}</span>
                                    <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                </>
                                :
                                <>
                                    <Link to="/login" className='text-decoration-none'>Login</Link>
                                    <Link to="/register" className='ms-2 text-decoration-none'>Register</Link>
                                </>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            { user?.photoURL ?
                            <Image 
                            style={{height:'30px'}} roundedCircle 
                            src={user.photoURL}></Image>
                            : <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        {/* <LeftSideNav></LeftSideNav> */}
                    </div>
                    <div class="form-check form-switch ms-2 ">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefaul/"/>
                        <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                   </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;