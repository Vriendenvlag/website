const vertaler = Array(27).fill().map(() => Array(2).fill(null));

const klinkers = ['a','o','e','i','u'];
const medeklinkers = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];

vertaler.slice(0, 21).forEach((e, i) => e[0] = medeklinkers[i]);
vertaler.slice(21, 26).forEach((e, i) => e[0] = klinkers[i]);

const brioscaansKlinkers = [...klinkers.slice(1, 5), klinkers[0]];
const brioscaansMedeklinkers = [...medeklinkers.slice(1, 21), medeklinkers[0]];

vertaler.slice(21, 26).forEach((e, i) => e[1] = brioscaansKlinkers[i]);
vertaler.slice(0, 21).forEach((e, i) => e[1] = brioscaansMedeklinkers[i]);

vertaler.push([" ", " "]);

const tekstIn = "Sharon";
let vertaald = "";

const brioscaansVertaler = (tekstIn) => {
  tekstIn = tekstIn.toLowerCase();

  const splitLetters = [...tekstIn];

  for (let l of splitLetters) {
    vertaald += vertaler.find(e => e[0] === l)[1];
  }

  const tekstUit = vertaald;
  return tekstUit;
}
console.log(brioscaansVertaler(tekstIn));
console.log(brioscaansVertaler(""));
