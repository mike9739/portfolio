import auth0 from "auth0-js";
 class Auth0 {
  
    constructor(){
        this.auth0 = new auth0.WebAuth({
            domain:'mike97.auth0.com',
            clientID: '04qFEJZPpLMX6yToSut1JzlZjVyb6Ls2',
            redirectUri:'http://localhost:3000/',
            responseType:'token id_token',
            scope:'openid profile'
        })
        this.login = this.login.bind(this)
    }

    login(){
        this.auth0.authorize();
    }
}

const autn0Client = new Auth0();

export default autn0Client

