const User = require('./../models/User')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
    static getInfo(user){
        return [user.id, user.getUsername, user.name, user.getBio]
    }
    static updateUsername(user, newName){
        user.setUsername = newName
    }
    static getAllUsernames(listOfUsers){
        let usernames = []
        listOfUsers.forEach(user => {
            usernames.push(user.getUsername)
        });
        return usernames
    }
}

module.exports = UserService