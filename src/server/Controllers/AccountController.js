// import { getCurrentDate } from "../libs/constants.js";
// import MidAccount from "../Models/Middle/MidAccount.js"
const MidAccount = require('../Models/Middle/MidAccount.js')
class AccountController {
    constructor() {
        this.state = {
            // datetime: getCurrentDate
        }
    }

    loginAccount = (req, res) => {
        const account = req.body
        const response = MidAccount.login(account);

        return response
    }
    registAccount = (req, res) => {
        const account = req.body
        const request = {
            ...account
            //create_at: this.state.datetime
        }
        return MidAccount.register(request)
    }
}

module.exports = new AccountController();