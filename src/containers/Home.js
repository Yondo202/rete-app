import React, { Component } from 'react';
import Slider from '../compnents/Slider'
// import { slide } from 'react-burger-menu';
import Intro from '../compnents/Intro';
import Chances from '../compnents/Chances';


export class Home extends Component {

    state = {
        sliders: []
    }

    render() {
        return (
            <div>
               <Slider sliderHeight={{height: "calc(120vh - 10vw)"}} sliders={this.state.sliders} />
               <Intro />
               <Chances />
            </div>
        )
    }
}

export default Home
