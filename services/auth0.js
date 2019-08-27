import auth0 from "auth0-js";
import Cookies from 'js-cookie'
class Auth0 {

    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'miguel97.auth0.com',
            clientID: 'iLwGhCowBWuzoIFiYCvSXtu9JWw4LKC3',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
        })
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
        this.handleAuthentification = this.handleAuthentification.bind(this)
        this.isAuthentificated = this.isAuthentificated.bind(this)
    }
    handleAuthentification() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve();
                } else if (err) {
                    reject(err);
                    console.log(err)
                }
            })
        })

    }
    setSession(authResult) {
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000)+new Date().getTime())
        Cookies.set('user',authResult.idTokenPayload);
        Cookies.set('jwt',authResult.idToken);
        Cookies.set('expiresAt',auth.expiresAt);

    }

    login() {
        this.auth0.authorize();
    }
    logout(){
        Cookies.remove('user',authResult.idTokenPayload);
        Cookies.remove('jwt',authResult.idToken);
        Cookies.remove('expiresAt',auth.expiresAt);
        this.auth0.logout({
            returnTo:'',
            clientID:'iLwGhCowBWuzoIFiYCvSXtu9JWw4LKC3'
        })
    }
    isAuthentificated(){
        const expiresAt = Cookies.getJSON('expiresAt');
        return new Date().getTime() < expiresAt

    }
}

const autn0Client = new Auth0();

export default autn0Client