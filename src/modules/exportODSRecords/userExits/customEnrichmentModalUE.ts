import CustomEnrichmentModal from '../components/CustomEnrichmentModal/CustomEnrichmentModal';
import { menuItemCustomEnrichment } from '../entities/menuItemCustomEnrichment';

export const customEnrichmentModalUE = {
		type: 'SearchPageCustomView',
		resolver: (): boolean => true,
		active: true,
		system: false,
		moduleId: menuItemCustomEnrichment.moduleId,
		component: CustomEnrichmentModal,
		meta: {}
};
