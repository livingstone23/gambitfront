import { ENV, authFetch } from "@/utils";
//import { Auth } from "@aws-amplify/auth";

async function me() {
    try {


            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER_ME}`;
            const response = await authFetch(url)
            const result = await response.json();

            if (response.status !== 200) throw result;

            return result;


    } catch (error) {
        throw error;
    }
}

export const userCtrl = {
    me,
}