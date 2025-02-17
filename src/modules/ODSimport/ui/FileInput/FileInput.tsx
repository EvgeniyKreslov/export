import React from "react";
import { ICustomStore } from "../../lib/types";
import { Button, INTENT, SIZE } from "@universe-platform/uikit";
import { i18n } from "@universe-platform/sdk";

import './fileInput.scss';

interface IProps {
  store: ICustomStore
}

const FileInput = ({store}: IProps) => {

  const { setFormData } = store;

  const handleChange = () => {
    // @ts-ignore
    setFormData(document.getElementById("ods-file").files[0]);
  };

  return (
    <>
      <input
        className="fileInput"
        title=''
        id="ods-file"
        type="file"
        onChange={handleChange}
      />
      <Button
        size={SIZE.MIDDLE}
        intent={INTENT.PRIMARY}
        onClick={() => {
          document.getElementById("ods-file")?.click()
        }}
      >{i18n.t('fileInput>button')}</Button>
    </>
  )
}

export default FileInput;