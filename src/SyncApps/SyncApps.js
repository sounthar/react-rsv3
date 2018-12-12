import React, { Component } from 'react';
import AppControl from '../Components/AppControl';
import spotify from '../Images/spotify.png';
import alexa from '../Images/alexa.png';
import target from '../Images/target.png';
import pandora from '../Images/pandora.png';
import ihome from '../Images/ihome.png';
import placeholder from '../Images/placeholder.jpg';
import Strings from '../Localization/Localization';
import { TextField, Button } from '@material-ui/core';
import './SyncApps.css';
const inlineStyles = {
    main: {
        background: "#f1f1f1",
        borderTop: "1px solid #ccc",
        borderRadius: "0px"
    },
    toggleMain: {
        background: "#ffffff",
        borderTop: "1px solid #ccc",
        borderRadius: "0px"
    },
    saveButton: {
        background: "#33a554",
        width: "30%",
        borderRadius: "20px",
        color: "#fff",
        margin: "10px auto",
        fontSize: "14px",
        textTransform: "capitalize"
    },
    contentStyle: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    labelStyle: {
        marginBottom: "0px",
        fontWeight: "normal"
    },
    contentParentStyle: {
        height: "75px",
        padding: "30px",
        display: "block"
    },
    contentParentStyleBgnd: {
        background: "rgb(241, 241, 241)",
    }
};
class SyncApps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            spotifyUserName: '',
            spotifyPassword: ''
        };
        this.syncAppsObj = {
            Alexa: false,
            Target: false,
            iHome: false,
            Pandora: false,
            userName: '',
            password: ''
        };
    }
    appStateHandler(name, value) {
        this.setState({ disabled: !value });
    }
    handleChange(name, value) {
        this.syncAppsObj[name] = value;
        this.setLocalStorage(this.syncAppsObj);
    }
    setLocalStorage(syncAppsObj) {
        localStorage.setItem('apps', JSON.stringify(syncAppsObj));
    }
    saveItem() {
        let userName = this.state.spotifyUserName;
        let password = this.state.spotifyPassword;
        this.syncAppsObj.userName = userName;
        this.syncAppsObj.password = password;
        this.setLocalStorage(this.syncAppsObj);
    }
    onTextFieldChangeCB = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    render() {
        return (
            <div className="syncdevices">
                <div className="page-header page-header-light">
                    <div className="page-header-content p-0">
                        <div className="page-title d-flex justify-content-between">
                            <h4><span className="text-center left-auto">My CX727</span></h4>
                        </div>
                        <h1 class="p-4 text-center mb-0 font-weight-bold">
                            Sync Apps
                </h1>
                    </div>
                    <AppControl
                        controlAction={this.appStateHandler.bind(this)}
                        controlImage={spotify}
                        controlName={Strings.syncApps.spotify}
                        disabled={false}
                        style={this.state.disabled ? inlineStyles.main : inlineStyles.toggleMain}
                    />
                    <div style={{ paddingTop: "20px", paddingBottom: "40px", display: this.state.disabled ? 'none' : 'block' }}>
                        <div className="col-sm-4 col-xs-12 spotifySettings">
                            <TextField
                                ref={"spotifyUserName"}
                                className="textField spotifyUserName"
                                variant="outlined"
                                value={this.state.spotifyUserName}
                                onChange={this.onTextFieldChangeCB("spotifyUserName")}
                            />
                            <TextField
                                ref={"spotifyPassword"}
                                className="textField spotifyPassword"
                                variant="outlined"
                                type={"password"}
                                value={this.state.spotifyPassword}
                                onChange={this.onTextFieldChangeCB("spotifyPassword")}
                            />
                            <Button
                                className="saveButton"
                                variant="flat"
                                style={inlineStyles.saveButton}
                                onClick={this.saveItem.bind(this)}
                            >
                                Save
                            </Button>
                        </div>

                        <AppControl
                            controlAction={this.handleChange.bind(this)}
                            controlName={Strings.syncApps.importPlayLists}
                            disabled={this.state.disabled}
                            style={{ ...inlineStyles.contentParentStyle, ...inlineStyles.contentParentStyleBgnd }}
                            contentStyle={inlineStyles.contentStyle}
                            labelStyle={inlineStyles.labelStyle}
                        />
                        <AppControl
                            controlAction={this.handleChange.bind(this)}
                            controlName={Strings.syncApps.importPlayLists}
                            disabled={this.state.disabled}
                            style={inlineStyles.contentParentStyle}
                            contentStyle={inlineStyles.contentStyle}
                            labelStyle={inlineStyles.labelStyle}
                        />
                        <AppControl
                            controlAction={this.handleChange.bind(this)}
                            controlName={Strings.syncApps.importPlayLists}
                            disabled={this.state.disabled}
                            style={{ ...inlineStyles.contentParentStyle, ...inlineStyles.contentParentStyleBgnd }}
                            contentStyle={inlineStyles.contentStyle}
                            labelStyle={inlineStyles.labelStyle}
                        />
                    </div>
                    <div>
                        <AppControl
                            controlAction={this.handleChange.bind(this)}
                            controlImage={alexa}
                            controlName={Strings.syncApps.alexa}
                            disabled={this.state.disabled}
                            style={inlineStyles.main}
                        />
                        <AppControl
                            controlAction={this.handleChange.bind(this)}
                            controlImage={target}
                            controlName={Strings.syncApps.target}
                            disabled={this.state.disabled}
                            style={inlineStyles.main}
                        />
                        <AppControl
                            controlAction={this.handleChange.bind(this)}
                            controlImage={ihome}
                            controlName={Strings.syncApps.iHome}
                            disabled={this.state.disabled}
                            style={inlineStyles.main}
                        />
                        <AppControl
                            controlAction={this.handleChange.bind(this)}
                            controlImage={pandora}
                            controlName={Strings.syncApps.pandora}
                            disabled={this.state.disabled}
                            style={inlineStyles.main}
                        />
                    </div>

                    <div className="appActionFooter">
                        <div className="appActionFooterContent" onClick={this.props.actionFooterLeftAction}>
                            {this.props.actionFooterLeft}
                        </div>
                        <div className="appActionFooterContent" onClick={this.props.actionFooterRightAction}>
                            {this.props.actionFooterRight}
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}
export default SyncApps;
