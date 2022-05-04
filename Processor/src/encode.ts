import { allowedCharacters, codonMap } from "./codonMap.js";

export async function encode(input: string): Promise<string> {
  return new Promise<string>((res, rej) => {
    const characters = input.split("");
    //Octagon Check
    characters.forEach((value, index) => {
      if (value === "\ud83d" && characters[index+1] === "\uded1") {
        characters[index] = "🛑"
        characters.splice(index+1,1)
      }
    })
    if (
      !characters.every((character) =>
        allowedCharacters.find((char) => char === character)
      )
    )
      return rej("INVALID CHARACTERS");

    const response = characters
      .map((character) => {
        if (character === " ") character = "Space";
        return codonMap.find((codon) => codon.value === character)?.codon;
      })
      .join("-");

    res(response);
  });
}
