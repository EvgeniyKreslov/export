import { i18n, Locales } from '@universe-platform/sdk';

i18n.addResourceBundle(Locales.Ru, {
	customButton: {
		buttonTitle: 'Экспорт записей в ODS'
	},
	customEnrichmentModal: {
		modalTitle: 'Экспорт записей в ODS (Выбрано записей',
		firstStep: 'Параметры экспорта',
		secondStep: 'Подтверждение',
		pubV: 'Экспорт только опубликованных версий',
		rel: 'Экспортировать связи',
		classifications: 'Экспортировать классификацию',
		actV: 'Активная версия',
		visCols: 'Экспортировать только видимые колонки',
		firstActionBtn: 'Следующий шаг',
		goBackBtn: 'Назад',
		submitBtn: 'Подтвердить',
		batchInfo: 'Будет запущена пакетная операция "Экспорт записей в ODS"'
	},
	snackbar: {
		successText: 'Запущено задание по экспорту записей в ODS',
		failedText: 'Ошибка при экспорте записей из ODS',
		noResponse: 'Нет соединения'
	},
	auditLogs: {
		exportPageToODS: 'Экспорт текущей страницы в ODS',
		exportLogsToODS: 'Экспортировать журнал целиком в ODS'
	}
});

i18n.addResourceBundle(Locales.En, {
	customButton: {
		buttonTitle: 'Exports records to ODS'
	},
	customEnrichmentModal: {
		modalTitle: 'Exports records to ODS (Selected records',
		firstStep: 'Export options',
		secondStep: 'Confirm',
		pubV: 'Export only published versions',
		rel: 'Export relations',
		classifications: 'Export classifications',
		actV: 'Active version',
		visCols: 'Export only visible columns',
		firstActionBtn: 'Next step',
		goBackBtn: 'Back',
		submitBtn: 'Submit',
		batchInfo: 'Batch operation "Exports records to ODS" will be started'
	},
	snackbar: {
		successText: 'Job exports records to ODS is started',
		failedText: 'Error exports records to ODS',
		noResponse: 'No response'
	},
	auditLogs: {
		exportPageToODS: 'Export current page to ODS',
		exportLogsToODS: 'Export the whole log to ODS'
	}
});
