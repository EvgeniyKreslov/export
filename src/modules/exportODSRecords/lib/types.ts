import {
	AbstractSearchColumnsStore,
	AbstractSearchPanelStore,
	AbstractSearchStore,
	RouterStore
} from '@universe-platform/sdk';
import { CheckboxChangeEvent } from '@universe-platform/uikit';

export type CheckBoxes = {
	exportPublishedOnly: boolean;
	includeRelations: boolean;
	exportClassifications: boolean;
	exportActiveVersionClassifications: boolean;
	exportVisibleOnly: boolean;
}

export type OptionsProps = {
	checkboxes: CheckBoxes;
	hasRelations: boolean;
	onChange(e: CheckboxChangeEvent): void;
}

export type SearchPageMenuItemArgs = {
	routerStore: RouterStore;
	searchStore: AbstractSearchStore<
		AbstractSearchPanelStore,
		AbstractSearchColumnsStore
	>;
};

export type Data = {
	bulkOperationId: string,
	content: {
		additional: CheckBoxes,
		entityName: string,
		exportedColumns: string[],
		recordIds: string[],
		timezone: string
	}
}

export type SearchStore = AbstractSearchStore<AbstractSearchPanelStore, AbstractSearchColumnsStore>;
