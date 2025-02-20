import React, { useState } from "react";
import { ICustomStore } from "../../lib/types";
import { Button, INTENT, SIZE } from "@universe-platform/uikit";
import { i18n } from "@universe-platform/sdk";

interface IProps {
  store: ICustomStore
}

const FileInput = ({store}: IProps) => {

  const { setFormData } = store;

  const [ fileName, setFileName ] = useState('');

  const handleChange = () => {
    // @ts-ignore
    const currentFile = document.getElementById("ods-file").files[0];

    setFormData(currentFile);    
    setFileName(currentFile.name)
  };

  return (
    <div style={{
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <input
        style={{
          visibility: 'hidden',
          opacity: 0,
          width: 0,
        }}
        title=''
        id="ods-file"
        type="file"
        onChange={handleChange}
      />
      {!fileName && <Button
        size={SIZE.MIDDLE}
        intent={INTENT.PRIMARY}
        onClick={() => {
          document.getElementById("ods-file")?.click()
        }}
        style={{
          alignSelf: 'center',
        }}
      >
        {i18n.t('fileInput>button')}
      </Button>}
      <div style={{
          alignSelf: 'center',
        }}
      >
        {fileName ? `${i18n.t('fileInput>selectedFile')} ${fileName}` : ''}
      </div>
    </div>
  )
}

export default FileInput;