import React, { FC } from 'react';
// import { i18n } from '@universe-platform/sdk';
import { Wizard } from '@universe-platform/uikit';

// import Confirm from '../Confirm/Confirm.tsx';

const Step2: FC = () => (
	<>
		<Wizard.Navigation />
		<Wizard.Content>
			{/* <Confirm /> */}
			step 2
		</Wizard.Content>
		<Wizard.Footer
			allowNext nextText='Следующий шаг'
			prevText='Назад'
			submitText='Подтвердить' />
	</>
);

export default Step2;
