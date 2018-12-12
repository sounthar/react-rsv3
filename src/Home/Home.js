import React, { Component } from "react";
import Strings from '../Localization/Localization';
import car1 from '../Images/car1.png';
import device from '../Images/device.png';
import apps from '../Images/apps.png';
import charging from '../Images/charging_black.png';
import climate from '../Images/climate.png';
import comfort from '../Images/comfort.png';
import seating from '../Images/seating.png';
import CustomControl from '../Components/CustomControl';
import SyncDevices from '../SyncDevices/syncDevices';
import SyncApps from '../SyncApps/SyncApps';
import SyncAudio from '../SyncAudio/SyncAudio';

const inlineStyles = {
    main: {
        background: "#f1f1f1"
    },
    welcome: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#464646",
        padding: "20px",
        textAlign: "center"
    },
    message1: {
        fontSize: "14px",
        color: "#464646",
        padding: "10px",
        textAlign: "left"
    },
    message2: {
        fontSize: "14px",
        fontWeight: "bold",
        color: "#464646",
        padding: "20px",
        textAlign: "left"
    },
    connectAppsBtn: {
        width: " 200px",
        margin: "0 auto",
        background: "#999",
        color: "#f0f0f0"
    }
};
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewHandler: "home"
        };
    }
    controlAction = () => {
        alert("hai");
    }
    syncDevices() {
        return (
            <SyncDevices
                actionFooterLeft={"Menu"}
                actionFooterRight={"Apps"}
                actionFooterLeftAction={this.setStateHandler.bind(this, 'home')}
                actionFooterRightAction={this.setStateHandler.bind(this, 'syncApps')}
            />
        );
    };
    syncApps() {
        return (
            <SyncApps
                actionFooterLeft={"Device"}
                actionFooterRight={"Voice & Audio"}
                actionFooterLeftAction={this.setStateHandler.bind(this, 'syncDevices')}
                actionFooterRightAction={this.setStateHandler.bind(this, 'syncAudio')}
            />
        );
    }
    syncAudio() {
        return (
            <SyncAudio
                actionFooterLeft={"Apps"}
                actionFooterRight={"Comfort"}
                actionFooterLeftAction={this.setStateHandler.bind(this, 'syncApps')}
                actionFooterRightAction={this.setStateHandler.bind(this, 'syncComfort')}
            />
        );
    }
    syncComfort() {
        alert('syncComfort');
    }
    setStateHandler(state) {
        this.setState({
            viewHandler: state
        });
    }

    viewHandler() {
        return (
            <div className="home" style={inlineStyles.main} >
                <div className="page-header page-header-light">
                    <div className="page-header-content">
                        <div className="page-title d-flex justify-content-between">
                            <h4><span className="text-center left-auto">My CX727</span></h4>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='img-fluid' alt='icon' src={car1} />
                    <h1 class="p-4 text-center mb-0 font-weight-bold">
                        Personalize your CX727
                </h1>
                </div>

                <CustomControl
                    controlAction={this.setStateHandler.bind(this, 'syncDevices')}
                    controlImage={device}
                    controlName={Strings.customControl.connetDevice}
                />
                <CustomControl
                    controlAction={this.setStateHandler.bind(this, 'syncApps')}
                    controlImage={apps}
                    controlName={Strings.customControl.connetApps}
                />
                <CustomControl
                    controlAction={this.setStateHandler.bind(this, 'syncAudio')}
                    controlImage={comfort}
                    controlName={Strings.customControl.audioSettings}
                />
                <CustomControl
                    controlAction={this.controlAction}
                    controlImage={seating}
                    controlName={Strings.customControl.mirrerSettings}
                />
                <CustomControl
                    controlAction={this.controlAction}
                    controlImage={climate}
                    controlName={Strings.customControl.climateSettings}
                />
                <CustomControl
                    controlAction={this.controlAction}
                    controlImage={charging}
                    controlName={Strings.customControl.chargingSettiongs}
                />
            </div>
        );
    }
    render() {
        let { viewHandler } = this.state;
        return (
            <div>
                {viewHandler === 'home' && this.viewHandler()}
                {viewHandler === 'syncDevices' && this.syncDevices()}
                {viewHandler === 'syncApps' && this.syncApps()}
                {viewHandler === 'syncAudio' && this.syncAudio()}
                {viewHandler === 'syncComfort' && this.syncComfort()}

            </div>
        );
    }
}

export default Home;