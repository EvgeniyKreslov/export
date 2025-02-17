import { Select as PlatformSelect, SIZE } from "@universe-platform/uikit";
import React from "react";

import './select.scss';

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
    <div className="container">
    {label?.length && <div className="label">{label}</div>}
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