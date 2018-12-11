import React, { Component } from "react";
import { Navbar } from 'react-bootstrap';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import './Common.css';
const inlineStyles = {
    nav: {
        background: "#fff",
        borderBottom: "1px solid #d0d0d0"
    }
};
class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Navbar inverse fixedTop style={inlineStyles.nav}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="##"><Glyphicon glyph="align-justify" /></a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="##"><Glyphicon glyph="user" /></a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Header pullRight>
                    <Navbar.Brand>
                        <a href="##"><Glyphicon glyph="bell" /></a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default Header;