import { openExportDrawer } from '../components/CustomEnrichmentModal/lib/actions';
import { menuItemCustomEnrichment } from '../entities/menuItemCustomEnrichment';
import { SearchPageMenuItemArgs } from '../lib/types';

export const exportRecordMenuItemUE = {
	type: 'SearchPageOperationMenuItem',
	resolver: ({ searchStore }: SearchPageMenuItemArgs): boolean => {
		const { checkedSearchHits } = searchStore.searchResult;
		const checkedCount = checkedSearchHits.size;

		return checkedCount >= 1;
	},
	active: true,
	system: false,
	moduleId: 'enrichment_entity_route_view',
	fn: openExportDrawer,
	meta: {
		getTitle: menuItemCustomEnrichment.getTitle
	}
};
