import React, { useState } from 'react';
import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( ()=> {
        fetch('https://educademy-server.vercel.app/categories')
        .then(res=> res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h5>Total {categories.length} categories of course</h5>
            <ListGroup>
                {
                    categories.map(category =>
                    <ListGroup.Item key={category.id}>
                        <Link to={`/courses/${category.id}`}>{category.category}</Link>
                    </ListGroup.Item>
                    )                   
                }

            </ListGroup>
           
        </div>
    );
};

export default SideNav;