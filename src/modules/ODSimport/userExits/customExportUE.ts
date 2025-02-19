import {CustomImportODS} from '../components/CustomExportModal/CustomExportModal';

export const customImportUE = {
  moduleId: 'customImportData',
  type: 'SearchPageCustomView',
  active: true,
  system: false,
  resolver: (): boolean => true,
  meta: {},
  component: CustomImportODS
};