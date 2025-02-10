_Пример подключения точек расширения в docker-контейнер UI_

1. Выполнить вход в приватный NPM-репозиторий:
   ```shell
   npm login --registry=https://repository.universe-data.ru/repository/npm-sdk/
   ```
2. Установить зависимости:
   ```shell
   npm ci
   ```
3. Собрать файл модуля точек расширения в директорию `dist`:
   ```shell
   npm run build
   ```
4. Подключить собранный файл в docker-контейнер UI:
   1. Добавить настройку `EXTERNAL_MODULES` в `customer.json`:
      ```json
      {
          "EXTERNAL_MODULES": [
              "/CUX/index.es.js"
          ]
      }
      ```
   2. Смонтировать следующие файлы в docker-контейнер:
      * Файл `./dist/index.es.js` должен быть смонтирован в директорию `/usr/share/nginx/html/CUX/`
      * Файл `customer.json` должен быть смонтирован в `/usr/share/nginx/html/`
   
   С примером настроек можно ознакомится в файлах `customer.example.json` и `docker-compose.example.yml`
