import { i18n, Locales } from '@universe-platform/sdk';

i18n.addResourceBundle(Locales.Ru, {
  dropdown: {
    xlsx: 'Импорт данных в XLSX',
    ods: 'Импорт данных в ODS',
  },
  navigation: {
    prev: 'Назад',
    next: 'Следующий шаг',
    submit: 'Подтвердить',
  },
	firstStep: {
    title: 'Настройки',
		dataModelTitle: 'Выберите объект модели данных',
    sourceSystemTitle: 'Загружать данные от имени системы-источника',
    importHandlerTitle: 'Выберите обработчик импорта',
    tiesImportTitle: 'Импортировать связи',
    classificationImportTitle: 'Импорт классификации',
	},
  secondStep: {
    title: 'Подготовка данных',
    text: 'Необходимо скачать шаблон и заполнить его',
    button: 'СКАЧАТЬ ШАБЛОН',
  },
  thirdStep: {
    title: 'Импорт',
    text1: 'Выберите заполненный на предыдущем шаге ODT шаблон.',
    text2: 'Результаты будут доступны в уведомлениях.',
    button: 'Выберите файл ODS',
  },
  fileInput: {
    button: 'Выберите файл ODS',
  }
});

i18n.addResourceBundle(Locales.En, {
  dropdown: {
    xlsx: 'XLSX data import',
    ods: 'ODS data import',
  },
  navigation: {
    prev: 'Back',
    next: 'Next',
    submit: 'Submit',
  },
	firstStep: {
    title: 'Options',
		dataModelTitle: 'Select data model object',
    sourceSystemTitle: 'Загружать данные от имени системы-источника',
    importHandlerTitle: 'Select import handler',
    tiesImportTitle: 'Import ties',
    classificationImportTitle: 'Classification import',
	},
  secondStep: {
    title: 'Data preparation',
    text: 'You should download template and fill it up',
    button: 'Download template',
  },
  thirdStep: {
    title: 'Import',
    text1: 'Select ODT template, filled up at previous step',
    text2: 'Results would be enabled in notifications',
    button: 'Select ODS file',
  },
  fileInput: {
    button: 'Select ODS file',
  }
});
