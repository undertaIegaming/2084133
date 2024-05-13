'use strict'

const VIRGULE = ', '
const tableau = [
    'belle Marquise',
    'vos beaux yeux',
    'me font mourir',
    'd\'amour'
]

function write_thing(_0, _1, _2, _3)
{
	var txt = "<li>" + tableau[_0] + VIRGULE + tableau[_1] + VIRGULE + tableau[_2] + VIRGULE + tableau[_3] + ".</li>";
	return txt;
}

document.write("<ul>" + write_thing(0, 1, 2, 3) + write_thing(1, 0, 3, 2) + write_thing(3, 2, 0, 1) + write_thing(2, 0, 3, 1) + "</ul>");
