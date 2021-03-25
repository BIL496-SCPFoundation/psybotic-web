import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from "firebase";

export default function () {
    const auth = firebase.auth();
    const [response] = useAuthState(auth);
    if(response === null || response.providerData.length < 1)
        return {};

    let user = response.providerData[0];
    return {
        uid: response.uid,
        googleId: user.uid,
        firstName: (user.displayName.includes(' ') ? user.displayName.substring(0, user.displayName.lastIndexOf(" ")): user.displayName),
        lastName: (user.displayName.includes(' ') ? user.displayName.substring(user.displayName.lastIndexOf(" ") + 1, user.displayName.length): ""),
        email: user.email,
        imageUrl: user.photoURL
    }
}