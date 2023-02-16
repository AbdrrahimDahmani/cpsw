import crypt from "crypt";

class cpsw {
    constructor() {}

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
            "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
        );
        let mediumPassword = new RegExp(
            "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
        );
        if (strongPassword.test(PasswordParameter)) {
            return "strong";
        } else if (mediumPassword.test(PasswordParameter)) {
            return "medium";
        } else {
            return "weak";
        }
    }
}

export default cpsw;