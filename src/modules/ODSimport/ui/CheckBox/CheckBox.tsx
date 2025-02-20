import React from "react";
import { CheckboxChangeEvent, Checkbox as PlatformCheckBox } from "@universe-platform/uikit";

interface IProps {
  checked: boolean,
  label: string,
  name: string,

  onChange: Function
}

const Checkbox = (props: IProps) => {

  const { checked, label, name, onChange } = props;

  return (
    <div style={{ display: 'flex' }}>
      {label.length && <div style={{ width: 190 }}>{label}</div>}
      <PlatformCheckBox name={name} checked={checked} onChange={(value: CheckboxChangeEvent) => onChange(value)}/>
    </div>
  );
}

export default Checkbox;