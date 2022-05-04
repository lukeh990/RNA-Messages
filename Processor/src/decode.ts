import { codonMap } from "./codonMap.js";

export async function decode(input: string): Promise<string> {
	//Input Example: AUG-UAA-CUU-GUU-GUU-GUG-GCG-GUC-GUC-UUU-UAG
	return new Promise<string>((res, rej) => {
		const inputSplit = input.split("-");
		const response = inputSplit.map(codonString => {
			const match = codonMap.find(codon => codon.codon === codonString);
			if (!match) return rej("Error parsing");
			if (match?.value === "Space") return " ";
			//TODO: Implement octogon filter
			
			return match?.value;
		}).join("")

		res(response)
	})
}