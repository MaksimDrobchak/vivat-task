```sh
git clone https://github.com/MaximDrobchak/vivat-task.git &&
cd vivat-task && yarn && yarn start
```
### Exemple: [http://samikoma.zzz.com.ua/]
## Задачи:

 * Stepper -> 3 шага
* шаг 1 -> поле Name и Description
* шаг 2 -> DatePicker
* шаг 3 -> Drag & Drop
* на шаге 3 должен быть Slider из которого и будет реализован Drag & Drop
* Верхняя панель каждого шага принимает данные заполненных полей
* Всегда можно вернуться на шаг назад исправить заполненные данные
* При нажатии на кнопку Finish на 3-ем шаге открываем Popap
* Disable кнопку Finish если обязательные поля не заполнены
* Добавить кнопку Reset которая очищает все поля и заголовки панели
* В модельном окне имитирует спинер и возвращаем или Succses || Error
* Использовать обязательно Webpack, Redux и mocky.io или подобный сервис


## Основные библиотеки:
  * React
  * Redux
  * jss
  * Material-ui
  * Redux-saga
  * axios

Для Drag & Drop и Slider решил не использовать дополнительных библиотек.
Для DatePicker использовал material-ui-pickers,@date-io/date-fns

```
task-vivat/
├── src                    # Application source code
│   ├── actions                  # Actions Creator
│   │   └── sendData.js          # Actions send data
│   │   └── steps.js             # Actions steps
│   ├── components               # Components
│   │   └── Header               # Header
│   │   └── Image                # Image from Drag & Drop и Slider
│   │   └── Link                 # Link from GitHub repo.
│   │   └── Popap                # Modal window
│   │   └── Slider               # Slider step 3
│   ├── constants                # Actions types from reducer
│   │   └── actionTypes.js       # Actions types
│   ├── reducers                 # All reducer
│   │   └── index.js             # All reducerrepo.
│   │   └── sendData.js          # reducer send data
│   │   └── steps.js             # reducer control steps
│   ├── routes                   # All routes pages
│   │   └── App                  # Main routes
│   │   └── Home                 # Home page (all project the whole project is on this page)
│   │      │   └── ExtensionPanel # Steps panel main task
│   │      │   │   └── FersStep  # Form name, description
│   │      │   │   └── SecondStep # DatePicker
│   │      │   │   └── LastStep # Drag & Drop and Slider
│   │      │   │   └── ActionsContainer.js # Control action steps and dispatch to store data
│   │      │   │   └── ComlatedeSteps.js # Component of complate steps
│   │      │   │   └── withStepsComponent.js # HOC controled steps
│   ├── sagas                   # Sagas
│   ├── stores                  # configureStore
```


