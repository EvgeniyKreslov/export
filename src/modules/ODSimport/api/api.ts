import { Dialog } from '@universe-platform/sdk';

import customStore from '../entities/CustomExportStore';

const { formData, setIsModalOpen } = customStore;

const udToken = localStorage.getItem('ud-token');
const udSession = localStorage.getItem('ud-session');

export const importData = () => {
  fetch(
    `/universe-backend/api/v2/core/import-data?_dc=${udSession}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `${udToken}`
      },
      body: formData
    }
  )
  .then((res: Response) => {
    if (res.status === 200) {
      Dialog.showMessage('Импорт успешен');
    } else {
      Dialog.showError('Не получилось импортировать. Попробуйте ещё раз или обратитесь к администратору');
    }
  })
  .finally(() => {
    setIsModalOpen(false);
  });
};

let fileName = 'template-import.ods';

export const getTemplate = () => {
  fetch(
    `/universe-backend/api/v2/core/import-data/template?_dc=${udSession}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${udToken}`
      },
      body: JSON.stringify({
        entityName: 'test',
        target: 'records-and-relations-ods',
        format: 'XLSX',
        additional: {
          importClassifications: false
        }
      })
    }
  )
  .then((response: Response) => {
    if (response.status !== 200) {
      Dialog.showError('Не получилось скачать шаблон. Попробуйте ещё раз или обратитесь к администратору');

return null;
    }
    const disposition = response.headers.get('Content-Disposition');
    if (disposition && disposition.includes('attachment')) {
        const filenameRegex = /filename[^\n;=]*=((["']).*?\2|[^\n;]*)/;
        const matches = filenameRegex.exec(disposition);
        if (matches != null && matches[1]) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
          fileName = matches[1].replaceAll(/["']/g, '');

          fileName = `${fileName.split('.')[0]}.ods`;
        }
    }

return response.blob();
  })
  .then(blob => {
    if (blob) {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.append(link);
      link.click();
      // @ts-ignore
      link.remove();
    }
  });
};
