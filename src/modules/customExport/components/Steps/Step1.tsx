import React from 'react';
// import { i18n } from '@universe-platform/sdk';
import {
	// CheckboxChangeEvent,
	Wizard
} from '@universe-platform/uikit';

// import { CheckBoxes } from '../../lib/types.ts';
// import Options, {} from '../Options/Options.tsx';

// type StepProps = {
// 	checkboxes: CheckBoxes;
// 	hasRelations: boolean;
// 	onChange(e: CheckboxChangeEvent): void;
// }

// const Step1: FC<StepProps> = ({ checkboxes, hasRelations, onChange }) => (
	const Step1 = () => (
	<>
		<Wizard.Navigation allowNext />
		<Wizard.Content>
			{/* <Options checkboxes={checkboxes} hasRelations={hasRelations} onChange={onChange} /> */}
			step 1
		</Wizard.Content>
		<Wizard.Footer
			allowNext nextText='Следующий шаг'
			prevText='Назад'
			submitText='Подтвердить' />
	</>
);

export default Step1;
