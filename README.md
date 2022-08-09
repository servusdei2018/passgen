# passgen ![https://deno.land/](https://img.shields.io/badge/built%20with-deno-blue?logo=deno&style=plastic)
[passgen](https://github.com/servusdei2018/passgen) is a stateless password manager. Feed it with a site/identifier and a master password, and it returns a password computed from the SHA-256 hash of their combination.

## Installation
 1. Install [Deno](https://deno.land/).
 2. Run `deno install -n passgen https://raw.githubusercontent.com/servusdei2018/passgen/main/main.ts`
 3. You're all set. passgen should now be ready to rock ✨

## Usage
```
passgen --site google.com --pass MyVerySecurePassword
```

### Specifying Password Length
The optional `--len` flag may be used in order to specify the length (default: 16).