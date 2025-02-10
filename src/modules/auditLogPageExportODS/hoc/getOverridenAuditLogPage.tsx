import React from 'react';
import {Dialog, i18n} from '@universe-platform/sdk';
import {Button, DropDown, INTENT, PLACEMENT, TRIGGER} from '@universe-platform/uikit';

import {auditLogCustomEnrichment} from '../entities/auditLogCustomEnrichment.ts';

export type RequestParams = {
		count: number;
		page: number;
		searchFields:
				Record<string, string | number>[],
		sortFields: Record<string, string | number>[],
}

export function getOverridenAuditLogPage(DefaultCtor: any): unknown {
		return class CustomAuditLogPage extends DefaultCtor {
				private async fetchRequest(data: RequestParams): Promise<void> {
						try {
								const response = await fetch(auditLogCustomEnrichment.url, {
										method: 'POST',
										body: JSON.stringify(data),
										headers: {
												'Content-Type': 'application/json',
												Accept: 'application/json, text/plain, */*',
												Authorization: `${localStorage.getItem('ud-token')}`
										}
								});

								const json = await response.json();

								if (response.status < 300 && json.success) {
										this.prepareExport();
								}
						} catch {
								Dialog.showError(i18n.t('snackbar>failedAuditLogExportODS'));
						}
				}

				constructor() {
						super();
						this.doExportFullODS = this.doExportFullODS.bind(this);
						this.doExportPageODS = this.doExportPageODS.bind(this);
				}

				private async doExportPageODS(): Promise<void> {
						const data = this.props?.routerStore?.currentPageComponent?.auditLogStore?.lastRequestParams;

						if (!data) {
								return;
						}

						await this.fetchRequest(data);
				}

				private async doExportFullODS(): Promise<void> {
						const data = this.props?.routerStore?.currentPageComponent?.auditLogStore?.lastRequestParams;
						const totalCount = this.props?.routerStore?.currentPageComponent?.auditLogStore?.totalCount;

						if (!data || !totalCount || typeof totalCount !== 'number') {
								return;
						}

						data.count = totalCount;
						await this.fetchRequest(data);
				}

				get extraButtons() {
						return (
								<DropDown
										placement={PLACEMENT.BOTTOM_END}
										trigger={TRIGGER.CLICK}
										isOpen={this.state.isOpenExportDropDown}
										data-qaid='audit_log_export_dropdown'
										onVisibleChange={this.setExportDropdownVisibility}
										target={(
												<span>
                            <Button
																isRound
																rightIcon={'chevron-down'}
																data-qaid='export_actions'
																intent={INTENT.PRIMARY}
																title={i18n.t('admin.audit>exportButtonText')}>
                                {i18n.t('admin.audit>exportButtonText')}
                            </Button>
            </span>
										)}>
										<DropDown.Item
												onClick={this.doExportPage}
												data-qaid={'export_page_item'}>
												{i18n.t('admin.audit>exportPage')}
										</DropDown.Item>
										<DropDown.Item
												onClick={this.doExportFull}
												data-qaid={'export_full_item'}>
												{i18n.t('admin.audit>exportFull')}
										</DropDown.Item>
										<DropDown.Item
												onClick={this.doExportPageODS}
												data-qaid={'export_ODS_item'}>
												{i18n.t('auditLogs>exportPageToODS')}
										</DropDown.Item>
										<DropDown.Item
												onClick={this.doExportFullODS}
												data-qaid={'export_ODS_item'}>
												{i18n.t('auditLogs>exportLogsToODS')}
										</DropDown.Item>
								</DropDown>
						);
				}
		};
}
