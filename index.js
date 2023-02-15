import crypt from "crypt";

function generate(length = 16) {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters[crypt.randomBytes(1)[0] % characters.length];
    }

    return password;
}

export default generate;