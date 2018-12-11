import LocalizedStrings from 'react-localization';

const Strings = new LocalizedStrings({
    en: {
        welcome: "Congrats",
        message1: "It's time to customize your EV21 and truly make it yours",
        message2: "Let's get started by selecting your favorite apps:",
        connectAppsBtn: "CONNECT APPS",
        customControl: {
            connetDevice: "Connect to your Smart Device",
            connetApps: "Connect to your Favorite Apps",
            audioSettings: "Connect Voice & Audio Settings",
            mirrerSettings: "Configure Seating, Mirrors & Steering",
            climateSettings: "Configure Climate & Conditioning",
            chargingSettiongs: "Smart Charging & Payments"
        },
        syncDevices: {
            iphoneXS: "iPhone XS Max",
            calender: "Calender",
            contacts: "Contacts",
            navigation: "Navigation",
            messages: "Messages"
        },
        syncApps: {
            spotify: "Spotify",
            alexa: "Alexa",
            target: "Target",
            iHome: "iHome",
            pandora: "Pandora"
        }
    },

});

export default Strings;