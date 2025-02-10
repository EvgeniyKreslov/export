import {i18n} from '@universe-platform/sdk';
import {CheckBoxes, Data, SearchStore} from '../lib/types';

export const menuItemCustomEnrichment = {
		getTitle(): string {
				return i18n.t('customButton>buttonTitle');
		},

		get moduleId(): string {
				return 'com.unidata.mdm.bulk.export.records.ods';
		},

		get url(): string {
				return `${window.location.origin}/universe-backend/api/v2/bulk-operations/execute?_dc=${localStorage.getItem('ud-session')}`;
		},

		hasRelations(searchStore: SearchStore): boolean {
				// @ts-ignore ошибка типизации Universe
				return !!searchStore.searchEntityKey?.namespace && searchStore.searchEntityKey?.namespace === 'register';
		},

		getRequestData({searchStore, checkboxes, exportedColumns, selectedHitsIds}: {
				searchStore: SearchStore;
				checkboxes: CheckBoxes;
				exportedColumns: string[];
				selectedHitsIds: string[];
		}): Data {
				return {
						bulkOperationId: `${this.moduleId}[operation]`,
						content: {
								additional: checkboxes,
								// ошибка в типах от Universe, предоставленные типы не соответствуют заявленным
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								// @ts-expect-error
								entityName: searchStore.searchResult.entityName,
								exportedColumns,
								recordIds: selectedHitsIds,
								timezone: 'Europe/Moscow'
						}
				};
		}
};
