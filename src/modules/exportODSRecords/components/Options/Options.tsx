import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { i18n } from '@universe-platform/sdk';
import { CheckboxChangeEvent } from '@universe-platform/uikit';

import { CheckBoxes } from '../../lib/types.ts';
import UdField from '../UdField/UdField.tsx';

export type OptionsProps = {
	checkboxes: CheckBoxes;
	hasRelations: boolean;
	onChange(e: CheckboxChangeEvent): void;
}

const Options: FC<OptionsProps> = observer(({ checkboxes, hasRelations, onChange }) => {
	const {
		exportPublishedOnly, includeRelations, exportClassifications,
		exportActiveVersionClassifications, exportVisibleOnly
	} = checkboxes;

	const udFields =
		[
			{
				label: i18n.t('customEnrichmentModal>pubV'),
				checkboxName: 'exportPublishedOnly',
				checked: exportPublishedOnly,
				disabled: true
			},
			{
				label: i18n.t('customEnrichmentModal>rel'),
				checkboxName: 'includeRelations',
				checked: includeRelations,
				invisible: !hasRelations
			},
			{
				label: i18n.t('customEnrichmentModal>classifications'),
				checkboxName: 'exportClassifications',
				checked: exportClassifications
			},
			{
				label: i18n.t('customEnrichmentModal>actV'),
				checkboxName: 'exportActiveVersionClassifications',
				checked: exportActiveVersionClassifications,
				invisible: !exportClassifications
			},
			{
				label: i18n.t('customEnrichmentModal>visCols'),
				checkboxName: 'exportVisibleOnly',
				checked: exportVisibleOnly
			}
		];

	return (
		<div className='content'>
			<div className='cardPanel internal'>
				<div className='cardContent'>
					<div className='container'>
						{udFields.map((field, idx) => (
							<UdField key={idx} {...field} onChange={onChange} />))}
					</div>
				</div>
			</div>
		</div>
	);
});

export default Options;
