import React, { FC } from 'react';
import { i18n } from '@universe-platform/sdk';
import { Wizard } from '@universe-platform/uikit';

import Confirm from '../Confirm/Confirm.tsx';

const Step2: FC = () => (
	<>
		<Wizard.Navigation />
		<Wizard.Content>
			<Confirm />
		</Wizard.Content>
		<Wizard.Footer
			allowNext nextText={i18n.t('customEnrichmentModal>firstActionBtn')}
			prevText={i18n.t('customEnrichmentModal>goBackBtn')}
			submitText={i18n.t('customEnrichmentModal>submitBtn')} />
	</>
);

export default Step2;
