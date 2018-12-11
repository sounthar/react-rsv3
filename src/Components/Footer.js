import React, { Component } from "react";
const inlineStyles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
    }
};
class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={inlineStyles.nav}>
                <div>
                    icon 1
                </div>
                <div>
                    icon 2
                </div>
                <div>
                    icon 3
                </div>
                <div>
                    icon 4
                </div>
            </div>
        );
    }
}

export default Footer;