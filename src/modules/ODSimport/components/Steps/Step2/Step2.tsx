import React from 'react';
import { i18n } from '@universe-platform/sdk';
import { Button, INTENT, SIZE, Wizard } from '@universe-platform/uikit';

import { getTemplate } from '../../../api/api';
import { inject, observer } from 'mobx-react';
import customStore from '../../../entities/CustomExportStore';

@inject((stores: any) => {
		return {
				...stores,
				customStore
		};
})
@observer
class Step2 extends React.Component {
	override render () {

		const {
					mergeWithPrevious,
					entity,
					importClassifications,
					importRelationsEnabled,
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
				} = this.props.customStore;

		return (
			<>
				<Wizard.Navigation />
				<Wizard.Content>
					<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column'
					}}>
						<div style={{ alignSelf: 'center' }}>{i18n.t('secondStep>text')}</div>
						<Button
							size={SIZE.MIDDLE}
							intent={INTENT.PRIMARY}
							style={{ width: 150, alignSelf: 'center', marginTop: 10 }}
							onClick={()=>getTemplate(entity.value, importClassifications, mergeWithPrevious, importRelationsEnabled)}
						>
							{i18n.t('secondStep>button')}
						</Button>
					</div>
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

};

export default Step2;
