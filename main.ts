#!/usr/bin/env -S deno run

import { parse } from "https://deno.land/std@0.151.0/flags/mod.ts";
import { encode } from "https://deno.land/std@0.151.0/encoding/hex.ts";
import { sha256 } from "https://denopkg.com/chiefbiiko/sha256@v1.0.0/mod.ts";

const flags = parse(Deno.args);
const site = flags.site ?? Usage("--site");
const pass = flags.pass ?? Usage("--pass");
const len: number = flags.len ?? 16;

if (site != undefined && pass != undefined) {
    const hash = sha256(`${pass}${site}`) as Uint8Array;
    console.log(new TextDecoder().decode(encode(hash)).substring(0, len));
}

function Usage(flag: string): void {
    console.warn(`Warning: ${flag} is undefined`);
}