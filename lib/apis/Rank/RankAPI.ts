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
    async addPersonRank(username: string) {
        try {
            const body = {
                username : username
            }
            const response = requestCustomAxios({
                method: "POST",
                url: RANK.ranks(),
                body
            })

            return response;
        } catch (error) {
            throw error
        }
    }
}

export default new Rank();