interface GetStringsReturnType {
	[langCode: string]: {
		[key: string]: string;
	};
}

export async function getStrings(): Promise<GetStringsReturnType> {
	return {};
}
