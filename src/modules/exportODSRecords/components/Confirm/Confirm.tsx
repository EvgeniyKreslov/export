import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { i18n } from '@universe-platform/sdk';

import InfoIcon from '../../ui/Icons/InfoIcon.tsx';

const Confirm: FC = observer(() => (
		<div className='ud-inline-message ud-inline-message-type-info'>
			<div className='ud-inline-message-icon ud-inline-message-icon_l'>
				<InfoIcon />
			</div>
			<div className='ud-inline-message-content'>
				{i18n.t('customEnrichmentModal>batchInfo')}
			</div>
		</div>
	)
);

export default Confirm;
