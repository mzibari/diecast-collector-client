import config from '../config'


const TokenService = {
    saveAuthToken(token) {
        window.localStorage.setItem(config.TOKEN_KEY, token)
    },
    getAuthToken() {
        return window.localStorage.getItem(config.TOKEN_KEY)
    },
    clearAuthToken() {
        window.localStorage.removeItem(config.TOKEN_KEY)
    },
    hasAuthToken() {
        return !!TokenService.getAuthToken()
    },
    makeBasicAuthToken(userName, password) {
        return window.btoa(`${userName}:${password}`)
    },
    getAuthUserId(users) {
        const encryptedToken = this.getAuthToken()
        if (encryptedToken) {
            const basicTokenUser = Buffer
                .from(encryptedToken, 'base64')
                .toString()
                .split(':', 1) || {}
            const reqUser = users.find(user => user.username.toString() === basicTokenUser.toString())
            if (reqUser) {
                return reqUser.id
            }
        }
    },
    getAuthUserName() {
        const encryptedToken = this.getAuthToken()
        if (encryptedToken) {
            const basicTokenUser = Buffer
                .from(encryptedToken, 'base64')
                .toString()
                .split(':', 1) || {}
            if (basicTokenUser) {
                return basicTokenUser[0]
            }
        }
    },
}

export default TokenService
