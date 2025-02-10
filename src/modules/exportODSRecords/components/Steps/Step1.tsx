import React, { FC } from 'react';
import { i18n } from '@universe-platform/sdk';
import { CheckboxChangeEvent, Wizard } from '@universe-platform/uikit';

import { CheckBoxes } from '../../lib/types.ts';
import Options, {} from '../Options/Options.tsx';

type StepProps = {
	checkboxes: CheckBoxes;
	hasRelations: boolean;
	onChange(e: CheckboxChangeEvent): void;
}

const Step1: FC<StepProps> = ({ checkboxes, hasRelations, onChange }) => (
	<>
		<Wizard.Navigation allowNext />
		<Wizard.Content>
			<Options checkboxes={checkboxes} hasRelations={hasRelations} onChange={onChange} />
		</Wizard.Content>
		<Wizard.Footer
			allowNext nextText={i18n.t('customEnrichmentModal>firstActionBtn')}
			prevText={i18n.t('customEnrichmentModal>goBackBtn')}
			submitText={i18n.t('customEnrichmentModal>submitBtn')} />
	</>
);

export default Step1;
