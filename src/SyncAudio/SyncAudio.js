import React, { Component } from 'react';
import AppControl from '../Components/AppControl';
import spotify from '../Images/spotify.png';
import Strings from '../Localization/Localization';
import placeholder from '../Images/placeholder.jpg';
import './SyncAudio.css';
const inlineStyles = {
    main: {
        background: "#f1f1f1",
        borderBottom: "1px dashed #fff",
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
    },
    descStyle: {
        fontSize: "16px",
        textAlign: "left",
        textOverflow: "ellipsis",
        overflow: "hidden"
    }
};
class SyncAudio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apps: true,
            sirius: false,
            radio: false,
            valume: false
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
    setStateHandler(name) {
        if (name === 'apps') {
            this.setState({
                apps: true,
                sirius: false,
                radio: false,
                valume: false
            });
        } else if (name === 'sirius') {
            this.setState({
                apps: false,
                sirius: true,
                radio: false,
                valume: false
            });
        } else if (name === 'radio') {
            this.setState({
                apps: false,
                sirius: false,
                radio: true,
                valume: false
            });
        } else if (name === 'valume') {
            this.setState({
                apps: false,
                sirius: false,
                radio: false,
                valume: true
            });
        }

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
    appHandler() {
        return (
            <div style={{ margin: "20px 0px" }}>
                <AppControl
                    controlImage={spotify}
                    controlName={Strings.syncApps.spotify}
                    disabled={true}
                    style={inlineStyles.main}
                    hideSwitch={true}
                    description={Strings.syncAudio.spotifyDesc}
                    descStyle={inlineStyles.descStyle}

                />
                <AppControl
                    controlImage={placeholder}
                    controlName={Strings.syncAudio.addMore}
                    disabled={true}
                    style={inlineStyles.main}
                    hideSwitch={true}
                    description={Strings.syncAudio.addMoreText}
                    descStyle={inlineStyles.descStyle}

                />
            </div>

        );
    }
    siriusHandler() {
        return (
            <div>
                Sirius
            </div>
        );
    }
    radioHandler() {
        return (
            <div>
                Radio
            </div>
        );
    }
    valumeHandler() {
        return (
            <div>
                Volume
            </div>
        );
    }
    render() {
        let { apps, sirius, radio, valume } = this.state;
        return (
            <div className="syncdevices">
                <div className="page-header page-header-light">
                    <div className="page-header-content p-0">
                        <div className="page-title d-flex justify-content-between">
                            <h4><span className="text-center left-auto">My CX727</span></h4>
                        </div>
                        <h1 class="p-4 text-center mb-0 font-weight-bold">
                            Audio
                </h1>
                    </div>
                    <div className="internalNavBar">
                        <div style={{ background: apps ? "#363636" : "#999999" }} className="navBtn navBtn-first" onClick={this.setStateHandler.bind(this, 'apps')}>Apps</div>
                        <div style={{ background: sirius ? "#363636" : "#999999" }} className="navBtn" onClick={this.setStateHandler.bind(this, 'sirius')}>Sirius</div>
                        <div style={{ background: radio ? "#363636" : "#999999" }} className="navBtn" onClick={this.setStateHandler.bind(this, 'radio')}>Radio</div>
                        <div style={{ background: valume ? "#363636" : "#999999" }} className="navBtn navBtn-last" onClick={this.setStateHandler.bind(this, 'valume')}>Volume</div>
                    </div>
                    {apps && this.appHandler()}
                    {sirius && this.siriusHandler()}
                    {radio && this.radioHandler()}
                    {valume && this.valumeHandler()}

                    <div className="appActionFooter">
                        <div className="appActionFooterContent" onClick={this.props.actionFooterLeftAction}>
                            {this.props.actionFooterLeft}
                        </div>
                        <div className="appActionFooterContent" onClick={this.props.actionFooterRightAction}>
                            {this.props.actionFooterRight}
                        </div>
                    </div>

                </div>


            </div >
        );
    }
}
export default SyncAudio;
