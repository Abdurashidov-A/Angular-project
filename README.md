# Test project (Angular 19+)

Проект мигрирован с React на Angular 19+ в формате standalone-компонента.

## Технологии

- HTML
- CSS
- TypeScript
- Angular 19+

## Запуск локально

1. Установите Node.js LTS (рекомендуется 20+).
2. Установите зависимости:

```bash
npm install
```

3. Запустите dev-сервер:

```bash
npm start
```

Приложение откроется на `http://localhost:4200`.

## Сборка

```bash
npm run build
```

Production-артефакты будут в `dist/pizza-menu`.

## Деплой на GitHub Pages

В проект уже добавлен builder `angular-cli-ghpages`.

1. Убедитесь, что репозиторий на GitHub: `https://github.com/Abdurashidov-A/Udemy`.
2. Установите зависимости (`npm install`).
3. Выполните деплой:

```bash
npm run deploy
```

4. В GitHub откройте `Settings -> Pages` и выберите source: `gh-pages` branch, folder `/ (root)`.
5. Сайт будет доступен по адресу:

`https://abdurashidov-a.github.io/Udemy/`

## Структура

- `src/app/app.component.ts` — логика и состояние интерфейса
- `src/app/app.component.html` — шаблон
- `src/styles.css` — глобальные стили
- `angular.json` — конфиг сборки/деплоя
