import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideNav from '../../layout/SideNav/SideNav';

const Courses = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div className='row'>
            <div className='col-2'>
                <SideNav></SideNav>
            </div>
            <div className='col-10'>
                <h3>Total {course.length} course in this category</h3>
                <div className="row row-cols-2 row-cols-md-2 g-4 mt-4">
                    { course.map
                            ( cs=> 
                                <div className="col text-justified" key={cs.id}>
                                    <div className="card">
                                        <img src={cs.img_url} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{cs.course_title}</h5>
                                            <div className='d-flex justify-content-between'>
                                                <span>Price: {cs.price}</span>
                                                <span>Rating: {cs.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            )
                  
                    } 
                </div>   
            </div>
        </div>
    );
};

export default Courses;