import { ADMIN } from "../../urls/urls";
import { requestCustomAxios } from "../customAxios";

class Admin {
    async adminLogin(username : string, password : string) {
        try {
            const body = {
                username : username,
                password : password
            }
            const response = requestCustomAxios({
                method: "POST",
                url: ADMIN.login(),
                body
            })
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export default new Admin();