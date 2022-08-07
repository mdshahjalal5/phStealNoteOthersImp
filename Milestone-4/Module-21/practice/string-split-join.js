// ** Kono string k venge churno bichurno korbo

const lyrics = 'Tumi Bondhu Kala Pakhi, ami jeno k, boshonto batashe amra kala kala sada sada';

// Vanga vangi korbo 

// lyrics k whitespace onujaye vangbo

const lyricsWhiteSpace = lyrics.split(' ');

console.log(lyricsWhiteSpace);

// lyrics k comma onujaye vangbo

const lyricsComma = lyrics.split(',');

console.log(lyricsComma);

// lyrics er shob character k venge felbo


const lyricsAllchar = lyrics.split('');
console.log(lyricsAllchar);

// ** jora dibo ekhon

const lyricsArray = [
    'Tumi Bondhu Kala Pakhi',
    ' ami jeno k',
    ' boshonto batashe amra kala kala sada sada'
  ];

const joraDilam = lyricsArray.join(':'); // every array element er majhe : boshai join kore dise
console.log(joraDilam);

// ** Trim niye khela dhula

const myName = ' Kamrul hasan ' //dui pasher white space sorai output dibe

console.log(myName.trim());
console.log(myName.trimStart());
console.log(myName.trimEnd());

// ** Use of at 

console.log(lyrics.toLocaleLowerCase().charAt(5)); // eikhane lyrics string a 5 number position or index a k ase dekhabe

// ** concatenation

const firstName = 'Kamrul';
const lastName = 'Hasan';
const surName = 'Tanmoy';

console.log(firstName.concat(' ',lastName,' ',surName));

// ** ekhon paruti slice korbo

const newLyric = 'A hawa, Amay nebe koto dur';

// hawa bair kore felbo

console.log(newLyric.slice(2,6));

// ** subsString ()

console.log(newLyric.substring(2,6));