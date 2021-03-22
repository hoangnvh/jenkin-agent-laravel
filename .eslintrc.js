module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    "rules": {
        "quotes": ["warn", "single"],
        "no-console": ["off"]
    },
    "parserOptions": {
        "ecmaVersion": 9
    },
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
        "amd": true
    },
    "globals": {
        "$": true,
        "require": true,
        "process": true
    },
    "root": true
}