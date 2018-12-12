import React, { Component } from "react";
import arrowForward from '../Images/arrow_forward.svg';

import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import PropTypes from 'prop-types';
const styles = theme => ({
    colorSwitchBase: {

        color: purple[300],
        '&$colorChecked': {
            color: purple[500],
            '& + $colorBar': {
                backgroundColor: purple[500],
            },
        },
    },
    colorBar: {},
    colorChecked: {},
    iOSSwitchBase: {
        height: "auto",
        '&$iOSChecked': {
            color: theme.palette.common.white,
            '& + $iOSBar': {
                backgroundColor: '#52d869',
            },
        },
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
            easing: theme.transitions.easing.sharp,
        }),
    },
    iOSChecked: {
        transform: 'translateX(15px)',
        '& + $iOSBar': {
            opacity: 1,
            border: 'none',
        },
    },
    iOSBar: {
        borderRadius: 13,
        width: 42,
        height: 26,
        marginTop: -13,
        marginLeft: -21,
        border: 'solid 1px',
        borderColor: theme.palette.grey[400],
        backgroundColor: "#8a8a8a",
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    iOSIcon: {
        width: 24,
        height: 24,
    },
    iOSIconChecked: {
        boxShadow: theme.shadows[1],
    },
});
class AppControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.disabled,
        };
    }
    handleChange = event => {
        const { controlName } = this.props;
        this.setState({ value: event.target.checked });
        this.props.controlAction && this.props.controlAction(controlName, event.target.checked);
    };
    render() {
        const { classes } = this.props;
        let thumpImg = null;
        let description = null;
        if (this.props.controlImage) {
            thumpImg = (
                <img className='app-control-content-img' alt='icon' src={this.props.controlImage} style={{ opacity: this.state.value ? "1" : "0.5" }} />
            );
        }
        if (this.props.description) {
            description = (
                <div style={this.props.descStyle}>
                    {this.props.description}
                </div>
            );
        }
        return (
            <div class="content  card-group-control-right">
                <div className="app-control-content" style={this.props.style}>
                    {thumpImg}
                    <div className='app-control-content-detail' style={this.props.contentStyle}>
                        <label className="app-control-label" style={this.props.labelStyle}>
                            {this.props.controlName}
                        </label>
                        <div style={{ display: this.props.hideSwitch ? "none" : "block" }}>
                            <Switch
                                classes={{
                                    switchBase: classes.iOSSwitchBase,
                                    bar: classes.iOSBar,
                                    icon: classes.iOSIcon,
                                    iconChecked: classes.iOSIconChecked,
                                    checked: classes.iOSChecked,
                                }}
                                disableRipple
                                disabled={this.props.disabled}
                                onChange={this.handleChange}
                                value={this.state.value}
                            />
                        </div>
                        {description}
                    </div>

                </div>
            </div>
        );
    }
}
AppControl.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AppControl);

