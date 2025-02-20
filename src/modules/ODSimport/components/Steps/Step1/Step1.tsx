import React from 'react';
import { i18n } from '@universe-platform/sdk';
import {
	Wizard
} from '@universe-platform/uikit';
import { CheckBox, Input, Select } from '../../../ui';
import { inject, observer } from 'mobx-react';
import customStore from '../../../entities/CustomExportStore';

@inject((stores: any) => {
	return {
		...stores,
		customStore,
	}
})
@observer
	class Step1 extends React.Component {

		
		override render() {

		// @ts-ignore
		const { firstStepImportHandler, importRelationsEnabled, importClassifications, setCheckBox, setSelect } = this.props.customStore;

		// @ts-ignore
		const { entityName } = this.props.routerStore?.currentPageComponent?.props?.match?.params;
		// @ts-ignore
		const entityLabel = this.props.routerStore?.currentPageComponent?.searchStore?.innerColumnsStore?.entity?.displayName?.value?.value;
		
		return (
			<>
				<Wizard.Navigation allowNext />
				<Wizard.Content>
					<Select
						key='entityName'
						label={i18n.t('firstStep>dataModelTitle')}
						options={[
							{title: entityLabel, value: entityName}
						]}
						onChange={setSelect('entityName')}
					/>
					<Select
						key='sourceSystem'
						label={i18n.t('firstStep>sourceSystemTitle')}
						options={[
							{title: 'universe', value: 'universe'}
						]}
						onChange={setSelect('sourceSystem')}
					/>
					<Input
						style={{ width: 480 }}
						label={i18n.t('firstStep>importHandlerTitle')}
						defaultValue='Базовый импорт ODS'
						disabled
					/>
					<CheckBox
						name='importRelationsEnabled'
						label={i18n.t('firstStep>tiesImportTitle')}
						checked={importRelationsEnabled}
						onChange={setCheckBox}
					/>
					<CheckBox
						name='importClassifications'
						label={i18n.t('firstStep>classificationImportTitle')}
						checked={importClassifications}
						onChange={setCheckBox}
					/>
				</Wizard.Content>
				<Wizard.Footer
					allowNext
					nextText={i18n.t('navigation>next')}
					prevText={i18n.t('navigation>prev')}
					submitText={i18n.t('navigation>submit')}
				/>
			</>
		);
	}
}

export default Step1;
