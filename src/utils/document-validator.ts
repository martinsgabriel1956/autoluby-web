type DocumentType = "CPF" | "CNPJ" | "CEP";

export function documentValidator(value: string, type: DocumentType) {
	const cpfDigitsLimit = 11;
	const cnpjDigitsLimit = 14;
	const cep = 8;

	let documentDigitsLimit: number;

	switch (type) {
		case "CPF":
			documentDigitsLimit = cpfDigitsLimit;
			break;
		case "CNPJ":
			documentDigitsLimit = cnpjDigitsLimit;
			break;
		case "CEP":
			documentDigitsLimit = cep;
			break;
		default:
			documentDigitsLimit = 0;
			break;
	}

	const digits = value?.replace(/\D/g, "").slice(0, documentDigitsLimit);

	if (digits?.length <= documentDigitsLimit) {
		let qtdOfDigits: RegExp = /(\d+)/;
		let formatOfDigits = "";

		switch (type) {
			case "CPF":
				qtdOfDigits = /(\d{3})(\d{3})(\d{3})(\d{2})/;
				formatOfDigits = "$1.$2.$3-$4";
				break;
			case "CNPJ":
				qtdOfDigits = /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/;
				formatOfDigits = "$1.$2.$3/$4-$5";
				break;
			case "CEP":
				qtdOfDigits = /(\d{5})(\d{3})/;
				formatOfDigits = "$1-$2";
				break;
			default:
				break;
		}

		return digits?.replace(qtdOfDigits, formatOfDigits);
	}
	return digits;
}
