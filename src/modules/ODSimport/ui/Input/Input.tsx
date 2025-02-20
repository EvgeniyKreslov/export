import { Input as PlatformInput, SIZE } from "@universe-platform/uikit";
import React from "react";

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
    <div style={{ display: 'flex' }}>
      {label?.length && <div style={{ width: 300 }}>{label}</div>}
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