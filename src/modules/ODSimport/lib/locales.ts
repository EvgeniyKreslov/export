import {i18n, Locales} from '@universe-platform/sdk';

i18n.addResourceBundle(Locales.Ru, {
    modal: {
        title: 'импорт данных'
    },
    dropdown: {
        xlsx: 'Импорт данных в XLSX',
        ods: 'Импорт данных в ODS'
    },
    navigation: {
        prev: 'Назад',
        next: 'Следующий шаг',
        submit: 'Подтвердить'
    },
    firstStep: {
        title: 'Настройки',
        dataModelTitle: 'Выберите объект модели данных',
        sourceSystemTitle: 'Загружать данные от имени системы-источника',
        importHandlerTitle: 'Выберите обработчик импорта',
        mergeWithPrevious: 'Игнорировать пустые ячейки',
        tiesImportTitle: 'Импортировать связи',
        classificationImportTitle: 'Импорт классификации'
    },
    secondStep: {
        title: 'Подготовка данных',
        text: 'Необходимо скачать шаблон и заполнить его',
        button: 'СКАЧАТЬ ШАБЛОН'
    },
    thirdStep: {
        title: 'Импорт',
        text1: 'Выберите заполненный на предыдущем шаге ODS шаблон.',
        text2: 'Результаты будут доступны в уведомлениях.',
        button: 'Выберите файл ODS'
    },
    fileInput: {
        button: 'Выберите файл ODS',
        selectedFile: 'Вы выбрали файл - '
    }
});

i18n.addResourceBundle(Locales.En, {
    modal: {
        title: 'data import'
    },
    dropdown: {
        xlsx: 'XLSX data import',
        ods: 'ODS data import'
    },
    navigation: {
        prev: 'Back',
        next: 'Next',
        submit: 'Submit'
    },
    firstStep: {
        title: 'Options',
        dataModelTitle: 'Select data model object',
        sourceSystemTitle: 'Load data by data source',
        importHandlerTitle: 'Select import handler',
        mergeWithPrevious: 'Ignore empty cells',
        tiesImportTitle: 'Import ties',
        classificationImportTitle: 'Classification import'
    },
    secondStep: {
        title: 'Data preparation',
        text: 'You should download template and fill it up',
        button: 'Download template'
    },
    thirdStep: {
        title: 'Import',
        text1: 'Select ODS template, filled up at previous step',
        text2: 'Results would be enabled in notifications',
        button: 'Select ODS file'
    },
    fileInput: {
        button: 'Select ODS file',
        selectedFile: 'You have selected file - '
    }
});
