// Number(null) → 0
// Number(undefined) → NaN
// Number("") (empty string) → 0
// Number("false") → NaN (because the string is not a valid number)
let k = true; //try all the comented lines
let v = Number(k);

console.log(typeof v);  // "number"
console.log(v);         // NaN

let m = "khush"; //try all the comented lines
let l = Boolean(k);

console.log(typeof l);  // "number"
console.log(l);         // NaN