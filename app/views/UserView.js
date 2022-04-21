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
        return UserService.create(payload);
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

module.exports = UserView;
