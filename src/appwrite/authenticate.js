import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";
// import {login as AuthLogin,logout as AuthLogout} from '../features/userSlice'


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }

//   async checkAuthOnRefresh() {
//     try {
//       const user = await this.getCurrentUser();
//       if (user) {
//         store.dispatch(AuthLogin(user));
//         return user;
//       } else {
//         store.dispatch(AuthLogout());
//         return null;
//       }
//     } catch (error) {
//       console.log("Appwrite service :: checkAuthOnRefresh :: error", error);
//       return null;
//     }
//   }
}

const authService = new AuthService();

export default authService


