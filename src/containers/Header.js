import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import HamburgerMenu from 'react-hamburger-menu';



export class Header extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            menu: <p></p>,
            open: false,
        }
    }
    
    handleClick() {
        this.setState({
           open: !this.state.open
        });
     }


    render() {
        return (
            <div className="Headerghost">
                <div className="headPar">
                <div className="logo">
                        <img src={require(`../img/logo1.png`)} />
                    </div>
                        <ul  className="menu">
                            <li>Нүүр</li>
                            <li>Бидний тухай</li>
                            <li>Байгууллага / Агентлаг</li>
                            <li>Инфлюнсер / Контент бүтээгч</li>
                        </ul>
                        {/* <div className="menumobile">
                            <HamburgerMenu isOpen={this.state.open} menuClicked={this.handleClick.bind(this)}/>
                        </div>
                        <div className="menumobilebody" style={this.state.open ? {left:0} : null} onClick={this.handleClick.bind(this)}>
                            <ul className="menu1">
                                <li>Нүүр</li>
                                <li>Бидний тухай</li>
                                <li>Байгууллага / Агентлаг</li>
                                <li>Инфлюнсер / Контент бүтээгч</li>
                            </ul>
                        </div> */}
                </div>
            </div>
        )
    }
}

export default Header
