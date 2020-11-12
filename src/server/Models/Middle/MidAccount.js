// import { generateToken } from "../../libs/token.js"
const Account = require("../Core/Account.js")
const User = require("../Core/User.js")

class MidAccount {

    login = async (request) => {
        const account = await Account.findOne({
            where: {
                username: request.username,
                password: request.password
            }
        })
        console.log(account);
        if (account === null) {
            throw ("Account is not exist")
        } else {
            const data = {
                username: account.username,
                user_id: account.user_id
            }
            return await generateToken(data)
        }

    }

    register = async (request) => {
        const isChecked = await Account.findOne({
            where: {
                email: request.email,
                phone: request.phone,
                username: request.username,
                password: request.password
            }
        })

        if (isChecked != null) {
            throw ("Account is exist!")
        } else {
            const data = {
                email: request.email,
                phone: request.phone,
                lastname: request.lastName,
                firstname: request.firstName,
                location: request.location,
                location_code: request.location_code,
                city: request.city,
                district: request.district
                //createdAt: request.create_at
            }
            const created = await User.create(data)
            // console.log("-----   CREATED        " + JSON.stringify(created));
            const user = await User.findOne({
                where: {
                    email: request.email,
                    phone: request.phone,
                }
            })
            if (user != null) {
                const account = {
                    username: request.username,
                    password: request.password,
                    email: request.email,
                    phone: request.phone,
                    createdAt: request.create_at,
                    user_id: user.id
                }
                await Account.create(account)
                return 0;
            }


        }
    }
}
module.exports = new MidAccount()