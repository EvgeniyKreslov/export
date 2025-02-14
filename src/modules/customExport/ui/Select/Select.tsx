import { Select as PlatformSelect, SIZE } from "@universe-platform/uikit";
import React from "react";

interface IOption {
  title: string,
  value: string,
}

interface IProps {
  label?: string,
  options: IOption[],
  key: string,
  disabled?: boolean,
  defaultValue?: string,

  onChange: Function
}

const Select = (props: IProps) => {
  const { label, options, key, disabled, defaultValue, onChange } = props;
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
    {label?.length && <div style={{ width: 300 }}>{label}</div>}
    <PlatformSelect
      key={key}
      size={SIZE.MIDDLE}
      options={options}
      isDisabled={disabled}
      defaultValue={defaultValue}
      onChange={(value) => onChange(value)}
    />
    </div>
  );
}

export default Select;