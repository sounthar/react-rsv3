import React, { Component } from "react";
import arrowForward from '../Images/arrow_forward.svg';

class CustomControl extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="content card-group-control card-group-control-right" onClick={this.props.controlAction}>
                <div className="card-header card-title">
                    <div className="custom-control-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                    </div>
                    <div className="custom-control-content">
                        <img className='custom-control-content-img' alt='icon' src={this.props.controlImage} />
                        <label className="custom-control-label" >
                            {this.props.controlName}
                        </label>
                        <img className='custom-control-arrow-img' alt='icon' src={arrowForward} />
                    </div>
                </div>
            </div>
        );
    }
}
export default CustomControl;