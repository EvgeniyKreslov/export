import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { observer } from 'mobx-react';
import { Dialog, i18n } from '@universe-platform/sdk';
import { CheckboxChangeEvent, Modal, SIZE, Wizard } from '@universe-platform/uikit';

import { menuItemCustomEnrichment } from '../../entities/menuItemCustomEnrichment';
import { getColumnsIdsBySearchStore, getSelectedHitsIds, sortOrderByContent } from '../../lib/helpers.ts';
import Step1 from '../Steps/Step1.tsx';
import Step2 from '../Steps/Step2.tsx';
import { handleChangeCheckboxes, handleCloseModal, setDefaultState, setSnackbarStatus } from './lib/actions.ts';
import { customEnrichmentModalStore } from './lib/store.ts';
import { isKeyofCheckboxes } from './lib/typeguards';
import { CustomEnrichmentModalProps, ResponseCustom, SnackbarStatus } from './lib/types';

import './CustomEnrichmentModal.scss';

const CustomEnrichmentModal: FC<CustomEnrichmentModalProps> = observer(props => {
		const { searchStore } = props;
		const title = useMemo(() => {
				const { checkedSearchHits } = searchStore.searchResult;

				return `${i18n.t('customEnrichmentModal>modalTitle')}: ${checkedSearchHits.size})`;
		}, [searchStore.searchResult.checkedSearchHits.size]);

		const hasRelations = menuItemCustomEnrichment.hasRelations(searchStore);

		const onSubmit = useCallback(async () => {
				const data = menuItemCustomEnrichment.getRequestData({
						searchStore,
						checkboxes: customEnrichmentModalStore.checkboxes,
						exportedColumns: getColumnsIdsBySearchStore(searchStore),
						selectedHitsIds: getSelectedHitsIds(searchStore)
				});

				try {
						const response = await fetch(menuItemCustomEnrichment.url, {
								method: 'POST',
								body: JSON.stringify(data),
								headers: {
										'Content-Type': 'application/json',
										Accept: 'application/json, text/plain, */*',
										Authorization: `${localStorage.getItem('ud-token')}`
								}
						});

						if (response.status >= 300) {
								Dialog.showError(i18n.t('snackbar>failedText'));
						}

						const json = await response.json() as ResponseCustom;

						if (response.status < 300 && json.success) {
								Dialog.showMessage(i18n.t('snackbar>successText'));
						}

						setDefaultState();
				} catch {
						Dialog.showError(i18n.t('snackbar>failedText'));
				}
		}, [searchStore]);

		const onChange = useCallback((e: CheckboxChangeEvent) => {
				const { name } = e.target;

				if (!isKeyofCheckboxes(name)) {
						throw new Error('Name of checkboxes are not supported');
				}

				handleChangeCheckboxes(name);
		}, []);

		useEffect(() => {
				const mutationObserver = new MutationObserver(mutations => {
						mutations.forEach(function (mutation: MutationRecord) {
								if (mutation.target.nodeName !== 'BODY' && mutation.target.nodeName !== 'DIV') {
										return;
								}

								const portal = document.querySelector('#portal');

								if (!portal) {
										return;
								}

								const portalObserver = new MutationObserver(mutations => {
										mutations.forEach(mutation => {
												if (mutation.target.nodeName !== 'DIV') {
														return;
												}

												const spansNodes = portal.querySelectorAll('span');

												if (!spansNodes.length) {
														return;
												}

												// eslint-disable-next-line unicorn/prefer-spread
												const spans = Array.from(spansNodes);

												const ods = spans.find(span => span.textContent === 'Exports records to ODS' || span.textContent === 'Экспорт записей в ODS');
												if (!ods) {
														return;
												}

												const odsBtn = ods.parentElement;

												if (!odsBtn) {
														return;
												}

												odsBtn.style.order = '2';

												const container = odsBtn.parentElement;

												if (!container) {
														return;
												}

												container.style.display = 'flex';
												container.style.flexDirection = 'column';

												sortOrderByContent({
														spans,
														content: ['Exports records to XLSX', 'Экспорт записей в XLSX'],
														order: '1',
														enclosure: 2
												});
												sortOrderByContent({
														spans, content: ['Delete records', 'Удаление записей'], order: '3',
														enclosure: 2
												});
												sortOrderByContent({
														spans, content: ['Modify records', 'Модификация записей'], order: '4',
														enclosure: 2
												});
												sortOrderByContent({
														spans, content: ['Compare records', 'Сравнение записей'], order: '5',
														enclosure: 1
												});
												sortOrderByContent({
														spans,
														content: ['Отправить в системы-потребители', 'Send to consumer systems', 'Send to consumer-systems'],
														order: '6',
														enclosure: 1
												});
										});
								});

								portalObserver.observe(portal, {
										attributes: false,
										characterData: false,
										childList: true,
										subtree: true,
										attributeOldValue: false,
										characterDataOldValue: false
								});

								mutationObserver.disconnect();
						});
				});

				const body = document.querySelector<HTMLElement>('body');

				if (!body) {
						return;
				}

				mutationObserver.observe(body, {
						attributes: false,
						characterData: false,
						childList: true,
						subtree: true,
						attributeOldValue: false,
						characterDataOldValue: false
				});

				setSnackbarStatus(SnackbarStatus.SUCCESS);
		}, []);

		return (
				<>
						<Modal
								isOpen={customEnrichmentModalStore.isOpen}
								shouldCloseOnClickOutside
								shouldCloseOnEsc
								noBodyPadding
								onClose={handleCloseModal}
								header={title}
								size={SIZE.MIDDLE}
						>
								<Wizard
										steps={[
												{
														component: <Step1
																checkboxes={customEnrichmentModalStore.checkboxes} onChange={onChange}
																hasRelations={hasRelations} />,
														label: i18n.t('customEnrichmentModal>firstStep'),
														name: 'options'
												},
												{
														component: <Step2 />,
														label: i18n.t('customEnrichmentModal>secondStep'),
														name: 'confirm'
												}
										]} onSubmit={onSubmit} />
						</Modal>
				</>
		);
});

export default CustomEnrichmentModal;
