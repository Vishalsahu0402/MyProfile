import React, { useRef } from 'react'
import './intro.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import DecryptedText from '../blocks/TextAnimations/DecryptedText/DecryptedText';
import BlurText from '../blocks/TextAnimations/BlurText/BlurText';
import VariableProximity from '../blocks/TextAnimations/VariableProximity/VariableProximity';
import RotatingText from '../blocks/TextAnimations/RotatingText/RotatingText';
import ProfileImage from "../assets/skills/css.webp"
const Intro = () => {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
    const containerRef = useRef(null);
    return (
        <div className='container py-3 '>
            <div className='row mb-2'>
                <div className='col-md-6 align-self-center' >
                    <h2 className='heading '>
                        <BlurText
                            text="Hi, I am"
                            delay={100}
                            animateBy="letters"
                            direction="top"
                            className="heading mb-0 pb-0"
                        />
                        {/* Example 2: Customized speed and characters */}
                        <span className='Name'>
                            <DecryptedText
                                text="Vishal Sahu"
                                speed={200}
                                sequential={true}
                                maxIterations={50}
                                useOriginalCharsOnly={true}
                                className="revealed"
                                parentClassName="all-letters"
                                encryptedClassName="encrypted"
                                animateOn="view"
                            /></span>  <br />
                        <span className='d-flex my-3'>Creative<RotatingText
                            texts={['Coding', 'Thinking', 'Problem-Solving', "Development", "Innovation", "Logic", "Design", "Solutions"]}
                            mainClassName="px-2 creative_type px-md-3 text-white overflow-hidden py-1 py-md-0 mx-3 d-flex justify-content-center rounded align-items-center"
                            
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={3000}
                        />
                        </span>
                    </h2>



                    <div
                        ref={containerRef}
                        style={{ position: 'relative' }}
                    ></div>
                    <p className='introDesc'>
                        <VariableProximity
                            label={'A passionate Full Stack Web Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Expressjs / MongoDB and some other cool libraries and frameworks.'}
                            className={'variable-proximity-demo'}
                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            radius={50}
                            containerRef={containerRef}
                            falloff='linear'
                        />
                    </p>
                    <button className='resumeBTN p-md-2 mt-3' role="link"
                        onClick={() => openInNewTab('/Vishal__Resume_.pdf')}>Resume</button>
                </div>


                <div className='col-md-6 d-flex justify-content-center align-items-center' >
                    <LazyLoadImage className='ProfileImage' src={ProfileImage} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Intro
