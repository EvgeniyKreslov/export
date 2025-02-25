import React from 'react';
import {Checkbox as PlatformCheckBox, CheckboxChangeEvent} from '@universe-platform/uikit';

interface IProps {
    checked: boolean;
    label: string;
    name: string;
    style?: object;
    onChange: Function;
}

const Checkbox = (props: IProps) => {

    const {checked, label, name, style, onChange} = props;

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', ...style}}>
            {label.length && <div style={{width: '40%'}}>{label}</div>}
            <div style={{width: '55%'}}>
                <PlatformCheckBox
                    name={name} checked={checked}
                    onChange={(value: CheckboxChangeEvent) => onChange(value)}/>
            </div>
        </div>
    );
};

// eslint-disable-next-line no-restricted-syntax
export default Checkbox;
