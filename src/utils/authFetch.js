import { authCtrl } from "@/api";


export async function authFetch(url, params) {

    const token = await authCtrl.retrieveSession()
    //console.log("token en authFetch")
    //console.log(token)


    const logout = ()  => {
        authCtrl.logout
        window.location.replace("/");
    };

    if(!token) {
        //console.log("ingresa al !token")
        logout()
    } else {

        console.log("ingresa al valor token");
        console.log(token);
        const paramsTemp = {
            ...params,
            headers: {
                ...params?.headers,
                Authorization: token,
            }
        };
        console.log(paramsTemp);
        console.log("Valor de url");
        console.log(url);
        console.log("ingresa al else del authfetch");
        try {
            return await fetch(url, paramsTemp)
        } catch (error) {
            console.log("Valor del error en authFetch");
            throw error;
        }
    }

}