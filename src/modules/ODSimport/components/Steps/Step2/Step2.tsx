import React from 'react';
import { i18n } from '@universe-platform/sdk';
import { Button, INTENT, SIZE, Wizard } from '@universe-platform/uikit';

import { getTemplate } from '../../../api/api';

const Step2 = () => {
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
						onClick={()=>getTemplate()}
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
};

export default Step2;
