# Краткая инструкция подключение кастомных Frontend модулей к платформе.

Для каждой дополнительной функциональности на UI разрабатывается кастомный Frontend модуль. Скомпилированный с помощью webpack.

Для того, чтобы каждый конкретный модуль заработал/появился в приложение необходимо выполнить следующие действия:

1. Имеющийся index.es.js (каждой конкретной кастомизации) поместить в папку CUX, в которой имеется соответствующа подпапка. В конкретном примере "yourFolder" . Внутри данной папки инфраструктура не ограничивает вложенные папки/именование, но требует правильного их указать в customer.json.

2. Добавить настройку `EXTERNAL_MODULES` в `customer.json`:
   ```json
   {
   	"EXTERNAL_MODULES": ["/CUX/yourFolder/index.es.js"]
   }
   ```

По результатам выполнения всего 2-х действий после перезагрузки страницы - у Вас должна заработать функциональность реализованная в каждом конкретном модуле.
