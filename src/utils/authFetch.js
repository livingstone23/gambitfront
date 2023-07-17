import { authCtrl } from "@/api";


export async function authFetch(url, params) {

    const token = await authCtrl.retrieveSession()
    console.log("token en authFetch")
    console.log(token)


    const logout = ()  => {
        authCtrl.logout
        window.location.replace("/");
    };

    if(!token) {
        console.log("ingresa al !token")
        logout()
    } else {
        const paramsTemp = {
            ...params,
            headers: {
                ...params?.headers,
                Authorization: token,
            }
        };
        console.log("ingresa al else del authfetch");
        try {
            return await fetch(url, paramsTemp)
        } catch (error) {
            throw error;
        }
    }

}