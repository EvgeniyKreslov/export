import React from "react";
import { CheckboxChangeEvent, Checkbox as PlatformCheckBox } from "@universe-platform/uikit";

interface IProps {
  checked: boolean,
  label: string,
  name: string,
  style?: object,

  onChange: Function
}

const Checkbox = (props: IProps) => {

  const { checked, label, name, style, onChange } = props;

  return (
    <div style={{ display: 'flex', ...style }}>
      {label.length && <div style={{ width: 190 }}>{label}</div>}
      <PlatformCheckBox name={name} checked={checked} onChange={(value: CheckboxChangeEvent) => onChange(value)}/>
    </div>
  );
}

export default Checkbox;