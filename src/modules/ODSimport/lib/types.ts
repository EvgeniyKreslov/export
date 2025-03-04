export interface ICustomStore {
    isModalOpen: boolean;
    fileType: string;
    entityName: string;
    sourceSystem: string;
    firstStepImportHandler: string;
    mergeWithPrevious: boolean;
    importRelationsEnabled: boolean;
    importClassifications: boolean;

    formData: FormData;

    setIsModalOpen: Function;
    setFileType: Function;
    setCheckBox: Function;
    setSelect: Function;

    setFormData: Function;
}
