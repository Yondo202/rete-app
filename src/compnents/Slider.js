import React, { Component } from 'react'
import Swiper from 'react-id-swiper'

export class Slider extends Component {
    render() {
        return (
            <div id="Swiper" style={{marginBottom:120}}>
                <Swiper {...params}>
                    <div> 
                        <img style={this.props.sliderHeight}  src={require(`../img/slider1.jpg`)} />
                        {/* <img style={this.props.sliderHeight || {}}  src={require(`../img/slider2.jpg`)} />
                        <img style={this.props.sliderHeight || {}}  src={require(`../img/slider3.jpg`)} /> */}
                            {/* <div className="absolute-this">
                            <h3>хйхйхйхйх</h3>
                            <p>Бидэнтэй нэгдэх</p>
                            <button>Дэлгэрэнгүй</button>
                     </div> */}
                    </div>
                   
                </Swiper>
            </div>
        )
    }
}


const params = {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
}


export default Slider
