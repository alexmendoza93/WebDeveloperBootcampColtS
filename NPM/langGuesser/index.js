// const franc = require('franc');
// const langs = require('langs');
// const colors = require('colors');

// const input = process.argv[2];

// const langCode = franc(input);

// if (langCode === und){
//     console.log("Sorry, try type a larger example");
// }else{
//     const language = langs.where("3", langCode)
//     console.log(`our best guess is: ${language.name}  `)
// }

import {franc, francAll} from 'franc';
const langs = require("langs");
const colors = require("colors")
 
const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und') {
    console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!".red)
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is: ${language.name}`.green)
}