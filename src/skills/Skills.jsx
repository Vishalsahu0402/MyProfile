import React from 'react'
import './skills.css'
const Skills = () => {
    return (
        <div className='container py-5' id='skills'>
            <div className='row'>
                <div className='col-md-4'>
                    <p className='bar'></p>
                    <h2 className='skillhead'>Skills</h2>
                </div>
                <div className='col-md-8'>
                    <div className="row">

                        <div className="col-md-6">
                            <h5 className='skilltypes pt-5 pt-md-0 mt-md-0'>Frontend</h5>
                            <div class="row gy-3 pe-md-5">
                                <div class="col-3 text-danger text-center ">
                                    <div class="bg-light images" >
                                        <img src="/images/html.webp" alt="" />
                                    </div>
                                        <p className='skillsname'>HTML</p>
                                </div>
                                <div class="col-3 text-danger text-center">
                                    <div class="bg-light images" >
                                        <img src="/images/css.webp" alt="" />
                                         </div>
                                    <p className='skillsname'>CSS</p>
                                </div>
                                <div class="col-3 text-danger text-center">
                                    <div class="bg-light images" >
                                        <img src="/images/Bootstrap_logo.svg.webp" alt="" />
                                         </div>
                                    <p className='skillsname'>Bootstrap</p>
                                </div>
                                <div class="col-3 text-danger text-center">
                                    <div class="bg-light images" >
                                        <img src="/images/tailwind.webp" alt="" />
                                         </div>
                                    <p className='skillsname'>Tailwind</p>
                                </div>

                                <div class="col-3 text-danger text-center">
                                    <div class="bg-light images" >
                                        <img src="/images/JS.webp" alt="" />
                                
                                    </div>
                                    <p className='skillsname'>JavaScript</p>
                                </div>
                                <div class="col-3 text-danger text-center">
                                    <div class="bg-light images" >
                                        <img src="/images/React.webp" alt="" />
                                     </div>
                                    <p className='skillsname'>React.js</p>

                                </div>
                                <div class="col-3 text-danger text-center">
                                    <div class="bg-light images" >
                                        <img src="/images/ts.webp" alt="" />
                                
                                    </div>
                                    <p className='skillsname'>TypeScript</p>
                                </div>
                                <div class="col-3 text-danger text-center">
                                    <div class="bg-light images" >
                                        <img src="/images/next.webp" alt="" />
                                     </div>
                                    <p className='skillsname'>Next.js</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h5 className='skilltypes pt-5 pt-md-0 mt-md-0'>Backend</h5>
                            <div class="row gy-3 pe-md-5">
                                <div class="col-3 text-danger text-center">
                                    <div class="bg-light images" >
                                        <img src="/images/nodejs.webp" alt="" />
                                    </div>
                                    <p className='skillsname'>Node.Js</p>
                                </div>
                                <div class="col-3 text-danger text-center">
                                    <div class="bg-light images" >
                                        <img src="/images/express.webp" alt="" />
                                    </div>
                                    <p className='skillsname'>Express.js</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row my-md-5'>
                        <div className="col-md-6">
                            <h5 className='skilltypes pt-5 pt-md-0 mt-md-0'>Database</h5>
                            <div class="row gy-3 pe-md-5">
                                <div class="col-3 text-danger text-center">
                                    <div class="bg-light images" >
                                        <img src="/images/mongoodb.webp" alt="" />
                                    </div>
                                    <p className='skillsname'>MongoDB</p>
                                </div>
                                <div class="col-3 text-danger text-center">
                                    <div class="bg-light images" >
                                        <img src="/images/sql.webp" alt="" />
                                    </div>
                                    <p className='skillsname'>MySQL</p>
                                </div>
                                <div class="col-3 text-danger text-center">
                                    <div class="bg-light images" >
                                        <img src="/images/sequalize.webp" alt="" />
                                    </div>
                                    <p className='skillsname'>sequalize</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h5 className='skilltypes pt-5 pt-md-0'>Others</h5>
                            <div class="row gy-3 pe-md-5">
                                <div class="col-3 text-danger text-center">
                                    <div class="bg-light images" >
                                        <img src="/images/restapi.webp" alt="" />
                                    </div>
                                    <p className='skillsname'>REST API</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
