export const auditLogCustomEnrichment = {
		get url(): string {
				return `${window.location.origin}/universe-backend/api/v2/audit/export?_dc=${localStorage.getItem('ud-session')}`;
		}
};
