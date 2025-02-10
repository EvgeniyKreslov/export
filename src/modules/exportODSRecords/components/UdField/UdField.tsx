/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { Checkbox, CheckboxChangeEvent } from '@universe-platform/uikit';

type UdFieldProps = {
	label: string;
	checkboxName: string;
	checked: boolean;
	disabled?: boolean;
	invisible?: boolean;
	onChange(e: CheckboxChangeEvent): void;
}

const UdField: FC<UdFieldProps> = observer(({ label, checkboxName, onChange, checked, disabled, invisible }) => (
	<>
		{!invisible && (
			<div className='ud-field'>
				<div className='field columnsMode'>
					<div className='fieldLabelContainer' style={{ width: '50%' }}>
						<div className='fieldLabel'>
							<span>{label}</span>
						</div>
					</div>
					<div className='fieldInputContainer' style={{ width: '50%' }}>
						<div className='checkboxInputPadding'>
							{/*// @ts-ignore*/}
							<Checkbox
								checked={checked}
								onChange={onChange}
								name={checkboxName}
								disabled={disabled}
							/>
						</div>
					</div>
				</div>
			</div>
		)}
	</>
));

export default UdField;
