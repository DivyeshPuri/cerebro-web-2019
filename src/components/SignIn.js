import React from 'react';
import firebaseui from 'firebaseui';
import * as firebase from 'firebase';

class SignInComponent extends React.Component {
    constructor(props) {
        super(props);
        if (!window.authUi) window.authUi = new firebaseui.auth.AuthUI(firebase.auth());
    }

    componentDidMount() {
        let uiConfig = {
            signInSuccessUrl: '#',
            signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
            signInFlow: 'popup'
        };

        // Init firebase ui widget
        window.authUi.start('#firebaseui-auth-container', uiConfig);
    }

    render() {
        return (
            <div>
                <div id="firebase-auth-container" />
            </div>
        );
    }
}

export default SignInComponent;