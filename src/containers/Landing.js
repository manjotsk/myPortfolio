import React, { Component } from 'react';
import '../App.css';
import '../styleSheets/landing.css'
import * as ScrollMagic from 'scrollmagic';
import { ProgressBar } from "../components";
import { up, endAnimation, land, right, logoPNG, logoSVG, background } from '../assets'
import { TimelineMax, Linear, TweenMax, Power1, Power3, Power4, Power0, Power2 } from "gsap";
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import { HorizontalSection, LoadingScreen, Welcome } from "../components";
import * as loadingAnim from '../assets/loadingAnim.json'

export default class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            image1Loaded: true,
            image2Loaded: true,
            image3Loaded: true,
            image4Loaded: true,
            image5Loaded: false,
            image6Loaded: false,
        }
    }
    assetsAreLoaded() {
        if (
            this.state.image1Loaded &&
            this.state.image2Loaded &&
            this.state.image3Loaded &&
            this.state.image4Loaded &&
            this.state.image5Loaded &&
            this.state.image6Loaded
        ) {
            return true;
        }
        return false;
    }
    handleAssetLoad1() { this.setState({ image1Loaded: true }) }
    handleAssetLoad2() { this.setState({ image2Loaded: true }) }
    handleAssetLoad3() { this.setState({ image3Loaded: true }) }
    handleAssetLoad4() { this.setState({ image4Loaded: true }) }
    handleAssetLoad5() { this.setState({ image5Loaded: true }) }
    handleAssetLoad6() { this.setState({ image6Loaded: true }) }
    componentDidMount() {
        var controller = new ScrollMagic.Controller();

        var horizontalMoveTl = new TimelineMax();

        Math.round(10 * 100) / 100
        horizontalMoveTl
            .to('.horizontal-container', 1, { x: '-66.6666%', ease: Power4.ease, delay: 0.1, lazy: true });

        var blurScene = TweenMax.to('img.main-background1', 0.1, { 'filter': 'blur(' + Math.round(20 * 100) / 100 + ')', ease: Linear.easeInOut })

        var antiBlurScene = TweenMax.to('img#landpng', 0.1, { 'filter': 'blur(' + 0 + ')', ease: Power4.easeInOut })

        var addBGOpacityTween = TweenMax.to('img.main-background2', 0.1, { 'opacity': 1, ease: Power1.easeNone })
        var removeBGOpacityTween = TweenMax.to('img.main-background1', 0.1, { 'opacity': 0, ease: Power1.easeNone })
        var removeOpacityTween = TweenMax.to('img#landpng', 0.1, { 'opacity': 0, ease: Power1.easeNone })
        var removeBlurTween = TweenMax.to('#intro-main', 0.1, { 'filter': 'blur(' + Math.round(0 * 100) / 100 + ')', ease: Power1.easeNone })

        // var changeProgressState1=TweenMax.call(this.changeState)

        // new ScrollMagic.Scene({
        //     triggerElement: '#main',
        //     triggerHook:.5,
        //     duration: '50%'
        // }).setTween(changeProgressState1)
        //     // .addIndicators()
        //     .addTo(controller);
            
        new ScrollMagic.Scene({
            triggerElement: '#outro.one',
            triggerHook: 1,
            duration: '201%'
        }).setTween(removeBGOpacityTween)
            // .addIndicators()
            .addTo(controller);
        new ScrollMagic.Scene({
            triggerElement: '#outro.one',
            triggerHook: 1,
            duration: '201%'
        }).setTween(addBGOpacityTween)
            // .addIndicators()
            .addTo(controller);

        // new ScrollMagic.Scene({
        //     triggerElement: '#outro.one',
        //     triggerHook: 1,
        //     duration: '201%'
        // }).setClassToggle('#intro-main', 'changeBackground').addTo(controller);



        new ScrollMagic.Scene({
            triggerElement: '#outro',
            triggerHook: 1,
            duration: '100%'
        })
            .setTween(removeOpacityTween)
            // .addIndicators('blurrrrrrrrrrrrrrrrr')
            .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: '#main',
            triggerHook: 0.2,
            duration: '100%'
        })
            .setTween(antiBlurScene)
            // .addIndicators('blurrrrrrrrrrrrrrrrr')
            .addTo(controller);


        new ScrollMagic.Scene({
            triggerElement: '#main',
            triggerHook: 1,
            duration: '100%'
        })
            .setTween(blurScene)
            // .addIndicators('blurrrrrrrrrrrrrrrrr')
            .addTo(controller);

        var pinMainScene = new ScrollMagic.Scene({
            triggerElement: '#main',
            triggerHook: 0,
            duration: '300%'
        })
            .setTween(horizontalMoveTl)
            // .addIndicators()
            .setPin('#main')
            .addTo(controller);
        // var imageMover= new ScrollMagic.Scene({
        //     triggerElement:'#pic1'
        // })
    }
    

    render() {
        return <div id="intro1">
            {!this.assetsAreLoaded() ?
                <LoadingScreen /> : <div />}
            <div id="intro-main" className='initialBackground'>
                <img className='main-background1' src={background} onLoad={() => this.handleAssetLoad5()} />
                <img className='main-background2' src={background} onLoad={() => this.handleAssetLoad6()} />
            </div>
            <div id="intro">
            <div className="content">
            <p id='title'><code>manjot.in</code></p>
                {/* <img src="img/img_scrollmagic-logo.png"/> */}
                <p><code>{'<FullStackDeveloper/>'}</code></p>
            </div>
            <img id='pic1' src={up}></img>
            </div>

            <div id="main" className="main-container">
            
            <div className="horizontal-container">

                <div className="section-1 section-horizontal">
                    <div className='sectionContainer'>
                        <p className='introPara'>I am a self taught developer.
                             Hailing from the Golden city Amritsar, 
                             it has been a great ride. <br>
                             </br>I stand 6'3"<br>
                             </br>I Love to play Basketball, Shoot Threes and some verticle shy of dunks 🙈 </p>
                        <p className='introPara'>I love to play these Musical Instruments(priority wise)</p>
                        <ul>
                            <li className='introPara'>Guitar(<a href='https://youtu.be/tdN9-F_d8GM' target='_blank'>This one is covered by my</a>)</li>
                            <li className='introPara'>Tabla</li>
                            <li className='introPara'>Harmonium</li>
                        </ul>
                        <p className='introPara'>Metric CGPA 9.6<br>
                        </br>Senior Secondary Score 82% - Non medical Sciences<br>
                        </br>Persuing <strong>BE(CSE)+MBA</strong> From Thapar University, Patiala<br>
                        </br>Current CGPA:- 7</p>
                        


                    </div>
                        {/* <img id='landpng' src={land}/> */}
                </div>

                <div className="section-2 section-horizontal">
                    <div className='sectionContainer'>
                    <p style={{textAlign:'center',fontSize:'2vmax'}}>
                        <code>
                            Soft Skills
                        </code>
                    </p>
                        <div style={{marginTop:'8vmax'}}>
                        
                        <div className='progressBarContainerWrapper'>
                            <ProgressBar skillName='ReactJS (Web)' progress='80'/>                            
                            <ProgressBar skillName='</HTML>' progress='80'/>
                            <ProgressBar skillName='NodeJS (ExpressJS)' progress='60'/>                            
                            <ProgressBar skillName='Android (Core)' progress='50'/>                            
                            <ProgressBar skillName='Blender3D' progress='50'/>                    
                        </div>
                        <div className='progressBarContainerWrapper2'>
                            <ProgressBar skillName='ReactJS (Native)' progress='85'/>                            
                            <ProgressBar skillName='CSS' progress='75'/>
                            <ProgressBar skillName='Java' progress='60'/>                            
                            <ProgressBar skillName='GIT/GitHub' progress='90'/>
                            <ProgressBar skillName='Compute Engine' progress='90'/>                            
                        </div>
                        </div>
                    </div>
                    {/* <img id='landpng' src={land}/> */}
                </div>
                <div className="section-3 section-horizontal">
                    <div className='sectionContainer'>
                    <p style={{textAlign:'center'}}>
                        Soft Skills
                    </p>
                        <div style={{marginTop:'8vmax'}}>
                            <div className='progressBarContainerWrapper'>
                                <ProgressBar skillName='Photoshop' progress='80'/>                            
                                <ProgressBar skillName='After Effects' progress='60'/>
                                <ProgressBar skillName='Illustrator' progress='50'/>                            
                                <ProgressBar skillName='Python' progress='40'/>                            
                                <ProgressBar skillName='Machine Learning' progress='20'/>                    
                            </div>
                            <div className='progressBarContainerWrapper2'>
                                <ProgressBar skillName='SQL' progress='70'/>                            
                                <ProgressBar skillName='Scroll Magic' progress='40'/>                            
                                <ProgressBar skillName='C++' progress='60'/>                            
                                <ProgressBar skillName='Premier' progress='50'/>                            
                                <ProgressBar skillName='☕' progress='100'/>                            
                            </div>
                        </div>
                    </div>
                    {/* <img id='landpng' src={land}/> */}
                </div>
                

            </div>

        </div>

            <div id="outro" className='one'>
                <div className="content">
                    <p style={{fontFamily:'Knewave',fontSize:'5vmax'}}><a className='outroP' href='https://github.com/manjotsk' target='_blank'>GitHub</a></p>
                    <p style={{fontFamily:'Knewave',fontSize:'5vmax'}}><a className='outroP' href='https://instagram.com/manjotsinghkalsi' target='_blank'>Instagram</a></p>
                    <p style={{fontFamily:'Knewave',fontSize:'3vmax'}}><a className='outroP' href="mailto:manjot.kalsi@simbaquartz.com?Subject=Hi%20Manjot%20" target="_top">Email Me</a>
                    </p>
                </div>
            </div>

        </div>
    }
}