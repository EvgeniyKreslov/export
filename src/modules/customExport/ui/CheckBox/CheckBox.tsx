import React from "react";
import { CheckboxChangeEvent, Checkbox as PlatformCheckBox } from "@universe-platform/uikit";

import './checkBox.scss';

interface IProps {
  checked: boolean,
  label: string,
  name: string,

  onChange: Function
}

const Checkbox = (props: IProps) => {

  const { checked, label, name, onChange } = props;

  return (
    <div className="container">
      {label.length && <div className="label">{label}</div>}
      <PlatformCheckBox name={name} checked={checked} onChange={(value: CheckboxChangeEvent) => onChange(value)}/>
    </div>
  );
}

export default Checkbox;