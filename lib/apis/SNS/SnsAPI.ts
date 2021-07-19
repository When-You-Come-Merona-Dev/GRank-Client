import { SNS } from "../../urls/urls";
import { requestCustomAxios } from "../customAxios";

class Sns {
    async getUserClientURL() {
        try {
            const response = await requestCustomAxios({ method: 'GET', url: SNS.github() })
            
            return response;
        } catch (error) {
            throw error
        }
    }
    async githubLogin(clientUrl : string) {
        try {
            const response = await requestCustomAxios({ method: 'GET', url: clientUrl })
            
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export default new Sns();