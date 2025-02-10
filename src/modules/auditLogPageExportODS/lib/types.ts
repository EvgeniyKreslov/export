export type RequestParams = {
		count: number;
		page: number;
		searchFields:
				Record<string, string | number>[],
		sortFields: Record<string, string | number>[],
}
