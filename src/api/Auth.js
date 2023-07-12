import { Auth } from "@aws-amplify/auth"

async function register(email, password) {
    try {
        console.log('Ingresando al register')
        console.log(email)
        console.log(password)
        const response = await Auth.signOut({ username: email, password });
        console.log(response)
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const authCtrl = {
    register,
};