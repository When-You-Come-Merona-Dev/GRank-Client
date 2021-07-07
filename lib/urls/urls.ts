const DEFAULT_URL = {
    rank: "/github-user",
    admin : "/admin"
}

export const RANK = {
    //get - 랭킹 불러오기, post - 랭킹에 인원 추가하기
    ranks: () => {
        return DEFAULT_URL.rank
    },
    applyUser: (username : string) => {
        return `${DEFAULT_URL.rank}/${username}/approve`
    }
}

export const ADMIN = {
    login: () => {
        return `${DEFAULT_URL.admin}/login`
    }
}