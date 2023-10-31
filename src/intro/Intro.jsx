import React from 'react'
import './intro.css'
const Intro = () => {
    return (
        <div className='container py-5 '>
            <div className='row mb-2'>
                <div className='col-md-6 align-self-center' >
                    <h2 className='heading '>Hi, I am <br />
                        <span>vishal Sahu</span> </h2> 
                        <p className='introDesc'>
                        A passionate Full Stack Web Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Expressjs / MongoDB and some other cool libraries and frameworks.
                            </p>
                            <button className='resumeBTN p-md-2 mt-3'>Resume</button>
                            </div>
                <div className='col-md-6 ' > </div>
            </div>

        </div>
    )
}

export default Intro