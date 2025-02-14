import { Dialog } from "@universe-platform/sdk";
import customStore from "../entities/CustomExportStore";

const { formData, setIsModalOpen } = customStore;

export const importData = () => {
  fetch(
    '/universe-backend/api/v2/core/import-data',
    {
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "07490e02-c5a5-452a-890e-02c5a5d52a59",
      },
      body: formData
    }
  )
  .then((res: Response) => {
    if(res.status == 200) {
      Dialog.showMessage('Импорт успешен');
    } else {
      Dialog.showError('Не получилось импортировать. Попробуйте ещё раз или обратитесь к администратору');
    }
    console.log('res --- ', res);
  })
  .catch((err: any) => {
    console.log('error --- ', err);
  })
  .finally(() => {
    setIsModalOpen(false)
  })
}

export const getTemplate = () => {
  fetch(
    '/universe-backend/api/v2/core/import-data/template',
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "07490e02-c5a5-452a-890e-02c5a5d52a59"
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
      return null
    }
    return response.blob()
  })
  .then((blob) => {
    if (blob) {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `sample.ods`);
      document.body.appendChild(link);
      link.click();
      // @ts-ignore
      link.parentNode.removeChild(link);
    }
  })
}