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

export const getTemplate = (entityName: string, importClassifications: boolean, mergeWithPrevious: boolean, importRelationsEnabled: boolean) => {
  const fileName = `${entityName}-import-template.ods` || 'import-template.ods';

  fetch(
    `/universe-backend/api/v2/core/import-data/template?_dc=${udSession}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${udToken}`
      },
      body: JSON.stringify({
        entityName,
        target: 'records-and-relations-ods',
        format: 'XLSX',
        additional: {
          importClassifications,
          mergeWithPrevious,
          importRelationsEnabled
        }
      })
    }
  )
  .then((response: Response) => {
    if (response.status !== 200) {
      Dialog.showError('Не получилось скачать шаблон. Попробуйте ещё раз или обратитесь к администратору');

      return null;
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
