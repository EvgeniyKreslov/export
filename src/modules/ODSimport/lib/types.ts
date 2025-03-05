export interface ICustomStore {
    isModalOpen: boolean;
    fileType: string;
    entity: {
      label: string,
			value: string
		};
    sourceSystem: string;
    firstStepImportHandler: string;
    mergeWithPrevious: boolean;
    importRelationsEnabled: boolean;
    importClassifications: boolean;

    formData: FormData;

    setIsModalOpen: Function;
    setFileType: Function;
		setEntity: Function;
    setCheckBox: Function;
    setSelect: Function;

    setFormData: Function;
}
