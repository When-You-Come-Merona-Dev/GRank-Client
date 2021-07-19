const DEFAULT_URL = {
    rank: "/github-users",
    admin: "/admin",
    sns : '/sns'
}

export const RANK = {
    //get - 랭킹 불러오기, post - 랭킹에 인원 추가하기
    ranks: () => {
        return DEFAULT_URL.rank
    },
    addUser: () => {
        return DEFAULT_URL.rank + `/${localStorage.getItem('username')}`
    },
    renew: () => {
        return `${DEFAULT_URL.rank}/${localStorage.getItem('username')}/renew`
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

export const SNS = {
    github: () => {
        return `${DEFAULT_URL.sns}/github`
    }
}