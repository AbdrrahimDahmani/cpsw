# cpsw

An npm package for managing your passwords

## Installation

Install cpsw with npm

```bash
  npm install cpsw
```

## Importation

```javascript
import cpsw from "cpsw";
```

## Usage/Examples

To generate a strong password:

```javascript
// Returns a strong password of number chars
var psw = cpsw.generate(number);
```

To check the strength of your password:

```javascript
// Returns "strong" or "medium" or "weak" depending on your password
var psw = cpsw.checkStrength("password");
```

To upgrade your password to become strong:

```javascript
// Returns a strong password if the password param is not strong
var psw = cpsw.upgradePsw("password");
```

To hash your password:

```javascript
// Returns a hashed password if the password param is not hashed
var psw = cpsw.hashPsw("password");
```

## Packages Used

[crypt](https://github.com/pvorb/node-crypt#readme) |

[password-hash](https://github.com/davidwood/node-password-hash) |

```sh
npm i crypt password-hash
```
