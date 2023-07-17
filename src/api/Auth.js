import { Auth } from "@aws-amplify/auth"

async function register(email, password) {
    try {
        //console.log('Ingresando al register')
        //console.log(email)
        //console.log(password)
        const response = await Auth.signUp({ username: email, password });
        //console.log(response)
    } catch (error) {
        //console.log(error)
        throw error;
    }
}

async function resendCode(email) {
    try {

        console.log('Resendcode ',email)
        await Auth.resendSignUp(email);

    } catch (error) {
        throw error;
    }
} 

async function confirmation(email, code) {
    try {

        await Auth.confirmSignUp(email,code);
        return true;
    } catch (error) {
        throw error;
    }
}

async function login(email, password) {
    try {

        await Auth.signIn({
            username:email,
            password,
        });

        const session = await Auth.currentAuthenticatedUser({
            bypassCache:false,
        });

        return session;

    } catch (error) {
        throw error;
    }
}


async function retrieveSession() {

    try {

        const session = await Auth.currentSession({
            bypassCache: false,
        });

        return session.accessToken.jwtToken;
   
    } catch (error) {
        throw error;
    }
} 


async function logout () {
    try {
        
        await Auth.signOut();

    } catch (error) {
        throw error;
    }
}



export const authCtrl = {
    register,
    resendCode,
    confirmation,
    login,
    retrieveSession,
    logout,
};