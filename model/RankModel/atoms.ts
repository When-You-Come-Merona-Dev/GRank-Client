import { atom, atomFamily, selectorFamily } from "recoil";
import RankAPI from "../../lib/apis/Rank/RankAPI";


export const commitRank = atomFamily({
    key: "userList",
    default: selectorFamily({
        key: "loadCommitRank",
        get: (page : number) => async ({ get }) => {
            const res = await RankAPI.getRankWithPage(page)
            return res.data
        }
    })
})
