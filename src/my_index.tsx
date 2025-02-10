// import React from 'react';
// import * as ReactDOM from 'react-dom';
// import MyComponent from './components/MyComponent.tsx';


import { i18n, Locales } from '@universe-platform/sdk';

import { customEnrichmentModalUE } from './modules/exportODSRecords/userExits/customEnrichmentModalUE.ts';
import { exportRecordMenuItemUE } from './modules/exportODSRecords/userExits/exportRecordMenuItemUE.ts';

import './modules/auditLogPageExportODS/index';
// import { inject } from 'mobx-react';

export default { userExits: [customEnrichmentModalUE, exportRecordMenuItemUE] };

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
				noResponse: 'Нет соединения',
				failedAuditLogExportODS: 'Ошибка при запуске экспорта в ODS'
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
				noResponse: 'No response',
				failedAuditLogExportODS: 'Export ODS data failed'
		},
		auditLogs: {
				exportPageToODS: 'Export current page to ODS',
				exportLogsToODS: 'Export the whole log to ODS'
		}
});


// const list = document.getElementsByName('import');
// const button = list.item(1)
let button: Element | null;

// setTimeout(() => {
// 	button = document.querySelector('button[name="import"]');
// }, 1000)
// const button = document.querySelector('[name="import"]');
//@ts-ignore
// button?.style = { display: 'none' }


// console.log('list', list)
// setTimeout(() => {
// 	console.log('button', button)
// 	if (button) {
// 		// button.style = { display: 'none' }
// 		// button.onclick()
// 		let elem = document.createElement("div");
// 		elem.innerHTML ='123';
// 		button.replaceWith(elem)
// 	}
// }, 2000)

export const init = () => {
		button = document.querySelector('button[name="import"]');
		console.log('button', button)
		if (button) {
			// button.style = { display: 'none' }
			// button.onclick()
			let elem = document.createElement("div");
			elem.id = 'root'
			elem.innerHTML = '123';
			button.replaceWith(elem);


			// ReactDOM.render(
			// 	<MyComponent />,
			// 	document.getElementById('root')
			// );
		}

		// root.render(
		// 		<MyComponent />
		// );
}

// @ts-ignore
// document.querySelector('button[name="import"]')?.onload = init;

// setTimeout(init, 1000)

// document.addEventListener('DOMContentLoaded', init)
// window.onload = function () {
// 	console.log("LOADED!");
// }

// let elem = document.createElement("div");
// elem.id = 'myID';

// elem.innerHTML = '123';
// document.body.insertBefore(elem,document.body.childNodes[0]);