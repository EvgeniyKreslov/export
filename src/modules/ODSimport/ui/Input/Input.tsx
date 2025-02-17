import { Input as PlatformInput, SIZE } from "@universe-platform/uikit";
import React from "react";

import './input.scss';

interface IProps {
  label?: string,
  key?: string,
  disabled?: boolean,
  defaultValue?: string,
  style?: object,
}

const Input = (props: IProps) => {
  const { label, key, disabled, defaultValue, style } = props;
  return (
    <div className="container">
      {label?.length && <div className="label">{label}</div>}
      <PlatformInput
        key={key}
        size={SIZE.MIDDLE}
        isDisabled={disabled}
        defaultValue={defaultValue}
        onChange={() => {}}
        style={{...style}}
      />
    </div>
  );
}

export default Input;