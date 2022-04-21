const UserService = require('./../services/UserService')

class UserView{
static createUser(payload){
    let result = {error: ""}
    if(payload != null){
        return UserService.create(payload)
    }
    result.error = "payload no existe"
    return result
}
}

module.exports = UserView