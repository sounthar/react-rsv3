import React, { Component } from 'react';
import AppControl from '../Components/AppControl';
import spotify from '../Images/spotify.png';
import alexa from '../Images/alexa.png';
import placeholder from '../Images/placeholder.jpg';
import Strings from '../Localization/Localization';
const inlineStyles = {
  main: {
    background: "#f1f1f1",
    borderBottom: "1px solid #ccc",
    borderTop: "1px solid #ccc",
    borderRadius: "0px"
  },
};
class SyncApps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    };
    this.syncDevicesObj = {
      Calender: false,
      Contacts: false,
      Navigation: false,
      Messages: false
    };
  }
  appStateHandler(name, value) {
    this.setState({ disabled: !value });
  }
  handleChange(name, value) {
    // this.setState({ value: event.target.checked });
    console.log(name);
    this.syncDevicesObj[name] = value;
    console.log(this.syncDevicesObj);
    localStorage.setItem('apps', JSON.stringify(this.syncDevicesObj));
    console.log(localStorage.getItem('devices'));

  }
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
            style={inlineStyles.main}
          />
          <div>
            <AppControl
              controlAction={this.handleChange.bind(this)}
              controlImage={alexa}
              controlName={Strings.syncApps.alexa}
              disabled={this.state.disabled}
            />
            <AppControl
              controlAction={this.handleChange.bind(this)}
              controlImage={placeholder}
              controlName={Strings.syncApps.target}
              disabled={this.state.disabled}
            />
            <AppControl
              controlAction={this.handleChange.bind(this)}
              controlImage={placeholder}
              controlName={Strings.syncApps.iHome}
              disabled={this.state.disabled}
            />
            <AppControl
              controlAction={this.handleChange.bind(this)}
              controlImage={placeholder}
              controlName={Strings.syncApps.pandora}
              disabled={this.state.disabled}
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
