import { useState, useEffect, createContext } from "react";
import { authCtrl, userCtrl } from "@/api"
import { useRouter } from "next/router"


export const AuthContext = createContext();


export function AuthProvider(props) {
    const { children } = props;
    const [ user, setUser] = useState(null);

    //Estado indica si es administador o no
    const [ isAdmin, setIsAdmin ] = useState(false)

    //Estado para controlar esta cargando o no
    const [ loading, setLoading ] = useState(true)

    const router = useRouter();

    useEffect(() => {
        (async ()=> {
            try {
                await login();
                setLoading(false);
            } catch (error) {
                setLoading (false);
            }
        })();
    }, []);



    const login = async () => {
        try {
            
            const response = await userCtrl.me();
            setUser(response);
            setIsAdmin(response.userStatus === 0);
            setLoading(false);

        } catch (error) {
            //console.error(error);
            setLoading / false;
        }
    }

    const logout = () => {

        setUser(null);
        authCtrl.logout();
        router.push("/");

    }

    const updateUser = (key, value) => {
        setUser({
            ...user,
            [key]:value,
        });
    };
 

    const data = {
        user,
        isAdmin,
        login,
        logout,
        updateUser,
    };


    //si esta obteniendo los estados del usuario
    if (loading) return null;


    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
