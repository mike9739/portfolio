import auth0 from "auth0-js";
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
        this.handleAuthentification = this.handleAuthentification.bind(this)
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
    setSession() {
        //savetokens

    }

    login() {
        this.auth0.authorize();
    }
}

const autn0Client = new Auth0();

export default autn0Client