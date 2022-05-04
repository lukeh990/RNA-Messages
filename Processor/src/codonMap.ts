interface Codon {
  codon: string;
  value: string;
}

const codonMap: Codon[] = [
  { codon: "UUU", value: "a" },
  { codon: "UCU", value: "q" },
  { codon: "UAU", value: "G" },
  { codon: "UGU", value: "W" },
  { codon: "UUC", value: "b" },
  { codon: "UCC", value: "r" },
  { codon: "UAC", value: "H" },
  { codon: "UGC", value: "X" },
  { codon: "UUA", value: "c" },
  { codon: "UCA", value: "s" },
  { codon: "UAA", value: "I" },
  { codon: "UGA", value: "Y" },
  { codon: "UUG", value: "d" },
  { codon: "UCG", value: "t" },
  { codon: "UAG", value: "J" },
  { codon: "UGG", value: "Z" },
  { codon: "CUU", value: "e" },
  { codon: "CCU", value: "u" },
  { codon: "CAU", value: "K" },
  { codon: "CGU", value: "0" },
  { codon: "CUC", value: "f" },
  { codon: "CCC", value: "v" },
  { codon: "CAC", value: "L" },
  { codon: "CGC", value: "1" },
  { codon: "CUA", value: "g" },
  { codon: "CCA", value: "w" },
  { codon: "CAA", value: "M" },
  { codon: "CGA", value: "2" },
  { codon: "CUG", value: "h" },
  { codon: "CCG", value: "x" },
  { codon: "CAG", value: "N" },
  { codon: "CGG", value: "3" },
  { codon: "AUU", value: "i" },
  { codon: "ACU", value: "y" },
  { codon: "AAU", value: "O" },
  { codon: "AGU", value: "4" },
  { codon: "AUC", value: "j" },
  { codon: "ACC", value: "z" },
  { codon: "AAC", value: "P" },
  { codon: "AGC", value: "5" },
  { codon: "AUA", value: "k" },
  { codon: "ACA", value: "A" },
  { codon: "AAA", value: "Q" },
  { codon: "AGA", value: "6" },
  { codon: "AUG", value: "l" },
  { codon: "ACG", value: "B" },
  { codon: "AAG", value: "R" },
  { codon: "AGG", value: "7" },
  { codon: "GUU", value: "m" },
  { codon: "GCU", value: "C" },
  { codon: "GAU", value: "S" },
  { codon: "GGU", value: "8" },
  { codon: "GUC", value: "n" },
  { codon: "GCC", value: "D" },
  { codon: "GAC", value: "T" },
  { codon: "GGC", value: "9" },
  { codon: "GUA", value: "o" },
  { codon: "GCA", value: "E" },
  { codon: "GAA", value: "U" },
  { codon: "GUG", value: "p" },
  { codon: "GCG", value: "F" },
  { codon: "GAG", value: "V" },
  { codon: "GGG", value: "🛑" },
];

const spaceCodon: Codon = { codon: "GGA", value: "Space" };
codonMap.push(spaceCodon);

const allowedCharacters = codonMap.map((codon) => {
  return codon.value;
});
allowedCharacters.push(" ");

export { allowedCharacters, spaceCodon, codonMap, Codon };
