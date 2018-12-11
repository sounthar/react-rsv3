import React, { Component } from 'react';
import AppControl from '../Components/AppControl';
import apple from '../Images/apple.png';
import placeholder from '../Images/placeholder.jpg';
import Strings from '../Localization/Localization';
import './SyncDevices.css';
const inlineStyles = {
  main: {
    background: "#f1f1f1",
    borderBottom: "1px solid #ccc",
    borderTop: "1px solid #ccc",
    borderRadius: "0px"
  },
};
class SyncDevices extends Component {
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
    localStorage.setItem('devices', JSON.stringify(this.syncDevicesObj));
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
              Sync Device
                </h1>
          </div>
          <AppControl
            controlAction={this.appStateHandler.bind(this)}
            controlImage={apple}
            controlName={Strings.syncDevices.iphoneXS}
            disabled={false}
            style={inlineStyles.main}
          />
          <div>
            <AppControl
              controlAction={this.handleChange.bind(this)}
              controlImage={placeholder}
              controlName={Strings.syncDevices.calender}
              disabled={this.state.disabled}
            />
            <AppControl
              controlAction={this.handleChange.bind(this)}
              controlImage={placeholder}
              controlName={Strings.syncDevices.contacts}
              disabled={this.state.disabled}
            />
            <AppControl
              controlAction={this.handleChange.bind(this)}
              controlImage={placeholder}
              controlName={Strings.syncDevices.navigation}
              disabled={this.state.disabled}
            />
            <AppControl
              controlAction={this.handleChange.bind(this)}
              controlImage={placeholder}
              controlName={Strings.syncDevices.messages}
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
export default SyncDevices;
