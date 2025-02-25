import {Select as PlatformSelect, SIZE} from '@universe-platform/uikit';
import React from 'react';

interface IOption {
    title: string;
    value: string;
}

interface IProps {
    label?: string;
    options: IOption[];
    key: string;
    disabled?: boolean;
    defaultValue?: string;
    style?: object;

    onChange: Function;
}

const Select = (props: IProps) => {
    const {label, options, key, disabled, defaultValue, style, onChange} = props;

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', gap: '10px', ...style}}>
            {label?.length && <div style={{width: '40%'}}>{label}</div>}
            <div style={{width: '55%'}}>
                <PlatformSelect
                    key={key}
                    size={SIZE.MIDDLE}
                    options={options}
                    isDisabled={disabled}
                    defaultValue={defaultValue}
                    onChange={(value) => onChange(value)}
                />
            </div>
        </div>
    );
};

// eslint-disable-next-line no-restricted-syntax
export default Select;
