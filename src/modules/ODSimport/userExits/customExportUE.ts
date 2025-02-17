import { ImportODS } from "../components/CustomExportModal/CustomExportModal";

export const customImportUE = {
    moduleId: 'testUE',
    type: 'DataCardMenuItem',
    active: true,
    system: false,
    resolver: () => true,
    meta: {},
    component: ImportODS
}