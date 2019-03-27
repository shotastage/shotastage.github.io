import React from 'react';


export class Initial extends React.Component {

    static isLocalhost() {
        let hostname = window.location.hostname;

        let localhostStrArr = ['localhost', '127.0.0.1'];
        
        for (var i = 0; i < localhostStrArr.length; i++) {
            if (localhostStrArr[i] === hostname) {
                return(true);
            }
        }
        
        return false;
    }

    sslRedirect() {
        let loc = window.location;

        if (this.isLocalhost) {
            if(loc.protocol === 'http:') {
                loc.replace(loc.href.replace(/http:/, 'https:'));
            }
        } 
    }

    notificationSetup() {
        if ("Notification" in window) {
            Notification.requestPermission()
                .then((permission) => {
                    if (permission === 'granted') {
                        // Grant
                        console.log("Your browser accepted to send a notification.")
                    } else if (permission === 'denied') {
                        // Deny
                        console.log("Your browser denied to send a notification.")
                    } else if (permission === 'default') {
                        // Ignore
                    }
                });
        }
    }

    sendWarningNotification() {
        if ("Notification" in window) {
            let firstJoined = new Notification(
                "I'm SHOTA!",
                {
                    body: 'This web page is now under construction!'
                }
            );

            setTimeout(firstJoined.close.bind(firstJoined), 4000);
        }
    }

    componentDidMount() {
        this.sslRedirect();
        //this.notificationSetup();
        //this.sendWarningNotification();
    }

    render() {
        return (
            <>
            </>
        );
    }
}
