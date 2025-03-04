import {action, observable} from 'mobx';
import {ICustomStore} from '../lib/types';
import {CheckboxChangeEvent} from '@universe-platform/uikit';

class CustomStore implements ICustomStore {
    @observable isModalOpen = false;

    @observable fileType = 'ods';

    @observable entityName = '';
    @observable sourceSystem = '';
    @observable firstStepImportHandler = 'records-and-relations-ods'; // hardCode, чтобы не было выбора

    @observable mergeWithPrevious = true;
    @observable importRelationsEnabled = false;
    @observable importClassifications = false;

    @observable formData = new FormData();

    @action
    setIsModalOpen = (value: boolean) => {
        this.isModalOpen = value;
    };

    @action
    setFileType = (value: string) => {
        this.fileType = value;
    };

    @action
    setCheckBox = (value: CheckboxChangeEvent) => {
        const {name, checked} = value.target;

        // @ts-ignore
        this[name] = checked;
    };

    @action
    setSelect = (name: string) => {
        return (value: string) => {
            // @ts-ignore
            this[name] = value;
        };
    };

    @action
    setFormData = (odsDocument: File) => {
        this.formData.append('file', odsDocument);
        this.formData.append('target', this.firstStepImportHandler); // hardCode, что бы не было выбора
        this.formData.append('format', 'XLSX'); // только XLSX
        this.formData.append('entityName', this.entityName);
        this.formData.append('sourceSystem', this.sourceSystem);
        this.formData.append('mergeWithPrevious', this.mergeWithPrevious ? 'true' : 'false');
        this.formData.append('additional', JSON.stringify({
            'org.unidata.mdm.data.importRelationsEnabled': false,
            importClassifications: this.importClassifications
        }));
    };
}

const customStore = new CustomStore();

export default customStore;
