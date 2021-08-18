import { RANK } from "../../urls/urls";
import { requestCustomAxios } from "../customAxios";

class Rank {
    async getRankWithPage(page : number) {
        try {
            const params = {
                page,
                per_page: 999,
                order_by : "-commit_count"
            }
            
            const response = requestCustomAxios({
                method: "GET",
                url : RANK.ranks(),
                params : params
            })
            return response;
        } catch (error) {
            throw error
        }
    }
    async addPersonRank(grade : number) {
        try {
            const response = requestCustomAxios({
                method: "PATCH",
                url: RANK.addUser(),
                body: {
                    grade,
                    is_public : true
                },
                header: {
                    'Authorization' : `Bearer ${localStorage.getItem('grank_token')}`
                }
            })

            return response;
        } catch (error) {
            throw error
        }
    }
    async renew() {
        try {
            const response = requestCustomAxios({
                method: "PATCH",
                url: RANK.renew(),
                header: {
                    'Authorization' : `Bearer ${localStorage.getItem('grank_token')}`
                }
            })

            return response;
        } catch (error) {
            throw error
        }
    }
}

export default new Rank();