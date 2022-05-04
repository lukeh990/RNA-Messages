/*
  Documentation:
    encode(input: string): Promise<string> 
      Takes in text returns a string in RNA format. Will error if invalid characters found.
    decode(input: string): Promise<string>
      Takes in RNA format from encode and return text string. Will error if unkown codon found.
*/
import { decode } from "./decode.js";
import { encode } from "./encode.js";

export { encode, decode }