import React from 'react';

const Footer = () => {
    
    return ( 
        <footer class="text-center text-lg-start bg-light p-2 mt-4">    
            <section class="">
                <div class="container text-center text-md-start mt-5">
            
                <div class="row mt-3">
                
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                
                    <h6 class="text-uppercase fw-bold mb-4">
                      Educademy
                    </h6>
                    <p>
                       Educademy is course selling website where you can buy courses.We have courses
                       from different categories related to programming and IT.
                    </p>
                    </div>              
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                
                    <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                    <p> 
                        12 Dhaka,Bangladesh
                        <br/>
                        educademy@gmail.com
                        <br/>
                        +01 234 567
                    </p>
                   
                    </div>
                
                </div>
            
                </div>
            </section>     
            <div class="text-center fw-bold p-4 bg-light">
                © 2022 Copyright: Educademy
                
            </div>
        </footer>

    );
};

export default Footer;