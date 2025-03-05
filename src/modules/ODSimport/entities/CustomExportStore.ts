import {action, observable} from 'mobx';
import {ICustomStore} from '../lib/types';
import {CheckboxChangeEvent} from '@universe-platform/uikit';

class CustomStore implements ICustomStore {
    @observable isModalOpen = false;

    @observable fileType = 'ods';

    @observable entity = {
      label: '',
	    value: ''
    };
    @observable sourceSystem = '';
    @observable firstStepImportHandler = 'records-and-relations-ods'; // hardCode, чтобы не было выбора

    @observable mergeWithPrevious = true;
    @observable importRelationsEnabled = false;
    @observable importClassifications = false;

    @observable formData = new FormData();

    @action.bound
    setIsModalOpen = (value: boolean) => {
        this.isModalOpen = value;
    };

    @action.bound
    setFileType = (value: string) => {
        this.fileType = value;
    };

		@action.bound
		setEntity = (value: {label: string, value: string}) => {
			this.entity = value;
		}

    @action.bound
    setCheckBox = (value: CheckboxChangeEvent) => {
        const {name, checked} = value.target;
console.log(name, checked)
        // @ts-ignore
        this[name] = checked;
    };

    @action.bound
    setSelect = (name: string) => {
        return (value: string) => {
            // @ts-ignore
            this[name] = value;
        };
    };

    @action.bound
    setFormData = (odsDocument: File) => {
        this.formData.append('file', odsDocument);
        this.formData.append('target', this.firstStepImportHandler); // hardCode, что бы не было выбора
        this.formData.append('format', 'XLSX'); // только XLSX
        this.formData.append('entityName', this.entity.value);
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
