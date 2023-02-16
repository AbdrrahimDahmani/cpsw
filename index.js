import crypt from "crypt";
import { generate, isHashed } from "password-hash";
class cpsw {
  static generate(length = 16) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters[crypt.randomBytes(1)[0] % characters.length];
    }

    return password;
  }

  static checkStrength(PasswordParameter) {
    let strongPassword = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    let mediumPassword = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    );
    if (strongPassword.test(PasswordParameter)) {
      return "strong";
    } else if (mediumPassword.test(PasswordParameter)) {
      return "medium";
    }
    return "weak";
  }

  static upgradePsw(PasswordParam) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
    while (this.checkStrength(PasswordParams) != "strong") {
      PasswordParams += chars[crypt.randomBytes(1)[0] % chars.length];
    }
    return PasswordParams;
  }

  static hashPsw(PasswordParam) {}
}

export default cpsw;
