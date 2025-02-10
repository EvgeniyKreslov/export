import { RequestParams } from '../hoc/getOverridenAuditLogPage.tsx';

export function getReqData(): RequestParams {
		return {
				count: 20,
				page: 1,
				searchFields:
						[],
				sortFields: [{ fieldName: 'when_happened', order: 'DESC' }
				]
		};
}
