# passgen ![https://deno.land/](https://img.shields.io/badge/built%20with-deno-blue?logo=deno&style=plastic)
Passgen is a stateless password manager. Feed it with a site and a masster password, and it returns a password computed from the SHA-256 hash of their combination.

## Installation
 1. Install [Deno](https://deno.land/).
 2. Run `deno install -n passgen URL`
 3. You're all set. Passgen should now be ready to rock.

## Usage
```
passgen --site google.com --pass MyVerySecurePassword
```

### Specifying Password Length
The optional `--len` flag may be used in order to specify the length (default: 16).