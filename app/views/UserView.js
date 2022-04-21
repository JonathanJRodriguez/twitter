const UserService = require("./../services/UserService");

class UserView {
  static createUser(payload) {
    let result = {
      valid: false,
      error: "",
    };
    if (payload != null) {
      result.valid = !hasNull(payload);
      if (result.valid) {
          if(checkKeys(payload)){
            return UserService.create(payload.id,payload.username,payload.name);
          }
      }
      result.error = "necesitan tener un valor válido";
      return result;
    }
    result.error = "payload no existe";
    return result;
  }
}

function hasNull(target) {
  for (var member in target) {
    if (target[member] == null) return true;
  }
  return false;
}

function checkKeys(obj){
    let keyList = Object.keys(obj)
    let keysToFind = ["username", "id", "name"]
    let result = []
    keysToFind.forEach(key => {
        if(keyList.includes(key)){
            result.push(true)
        }
        else{
            result.push(false)
        }
    })
    return result.every(ele => ele === true)
}

module.exports = UserView;
