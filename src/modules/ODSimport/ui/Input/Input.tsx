import {Input as PlatformInput, SIZE} from '@universe-platform/uikit';
import React from 'react';

interface IProps {
    label?: string;
    key?: string;
    disabled?: boolean;
    defaultValue?: string;
    style?: object;
}

const Input = (props: IProps) => {
    const {label, key, disabled, defaultValue, style} = props;

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', gap: '10px', marginTop: 10}}>
            {label?.length && <div style={{width: '40%'}}>{label}</div>}
            <div style={{width: '55%'}}>
                <PlatformInput
                    key={key}
                    size={SIZE.MIDDLE}
                    isDisabled={disabled}
                    defaultValue={defaultValue}
                    onChange={() => {
                    }}
                    style={{...style}}
                />
            </div>
        </div>
    );
};

// eslint-disable-next-line no-restricted-syntax
export default Input;
