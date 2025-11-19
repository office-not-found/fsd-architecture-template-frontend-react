## Содержание

- [Стек](#стек)
- [Конфигурация](#конфигурация)
- [Запуск приложения](#запуск-приложения)
- [Архитектура](#архитектура)
- [Маршруты](#маршруты)
- [Уведомления](#уведомления)
- [Таблицы: выбор, сортировка](#таблицы-выбор-сортировка)

# Стек

- React (Vite)
- TypeScript
- TanStack Query v5
- React Hook Form + zod
- Mantine (UI library)
- Zustand
- Sass (SCSS)

# Конфигурация

Переменные окружения (файл `.env` в корне):

```
VITE_API_URL="<http/https url бэкенда без /api>"
```

# Запуск приложения

По умолчанию фронтенд доступен на `http://localhost:5173`.

## Dev

```
npm i
npm run dev
```

## Прод-развертывание (build + статическая раздача)

Для продакшена собираем статику и раздаём её любым веб‑сервером.

1. Сборка

```
npm ci
npm run build
```

2. Раздача статических файлов

- Размещайте содержимое папки `dist/` на любом веб‑сервере/хостинге.
- Укажите корневой каталог на `dist/`, главный файл — `index.html`.
- Для SPA необходимо настроить фоллбэк: неизвестные маршруты должны возвращать `index.html`.

# Архитектура

Проект организован по FSD структуре:

- `src/app` — провайдеры приложения: тема (`ThemeProvider`), маршрутизация (`RouterProvider`), React Query (`QueryProvider`), уведомления (`ToasterProvider`), проверка авторизации (`CheckAuthProvider`).
- `src/entities` — доменные сущности: `account`, `auth`, `user`, `partner` (API, схемы, query/mutation-хуки, UI-атомы).
- `src/features` — прикладные возможности: формы добавления/редактирования, фильтры, пагинация, поиск, logout, выбор/сортировка в таблицах.
- `src/pages` — страницы (layout, users, edit-user, login, error).
- `src/shared` — общие утилиты, конфиги (`routes`, `query`, тема), компоненты UI (таблица, инпуты, селекты и т.д.).
- `src/widgets` — составные виджеты (например, `table-with-actions`, `navbar`).

**Примечание по FSD правилам:** В проекте настроено исключение, позволяющее `entities` импортировать друг друга (например, `user` может импортировать `account`). Это отключено в ESLint конфигурации для `src/entities/**` файлов, так как некоторые сущности тесно связаны и требуют взаимных зависимостей.

# Маршруты

Определены в `src/shared/config/routes.ts`:

- `/login` — страница логина
- `/` — корневой layout; редирект на `/users`
- `/users` — пользователи (таблица, фильтры, поиск, выбор)
- `/users/:id` — редактирование пользователя

Переходы защищены `CheckAuthProvider`: при отсутствии авторизации происходит редирект на `/login` (проверка выполняется хук‑ом `useGetCurrentAccountQuery`).

# Уведомления

Используется `@mantine/notifications` c провайдером `ToasterProvider`:

- Для повторного показа уведомления с тем же `id` предусмотрена кастомная функция-обёртка, которая делает `hide(id)` и затем повторный `show(...)` с небольшой задержкой, чтобы анимация появления была заметна пользователю.
- Рекомендуется вызывать уведомления именно через эту обёртку (а не напрямую `notifications.show`), чтобы при дубликатах по `id` анимация корректно переигрывалась.

# Таблицы: выбор, сортировка

- Виджет: `src/widgets/table-with-actions` — готовая сборка таблицы с заголовком, тулбаром действий и телом.

    - Компоненты: `TableWithActionsHeader`, `TableWithActionsToolbar`, `TableWithActionsBody`, обёртка `TableWithActions`.
    - Колонки описываются типом `TableColumn<T>` (`src/shared/model/index.ts`):
        - `type: "entry"` — колонка берёт значение из поля сущности (`keyInEntry: keyof T`).
        - `type: "raw"` — произвольная колонка (лейбл/сортировка/видимость управляются извне).
    - Рендер строк: через проп `renderBodyRow(row, columns, isChecked, toggleSelection, index)` — вы решаете, как отрисовать `<Table.Tr>` и ячейки.

- Выбор строк: `src/features/table-selection`

    - Хук `useTableSelection(data)` возвращает: `selectedIds: Set<number>`, `handlers: { toggleSelection, selectAll, deselectAll, isSelected }`, а также флаги `allChecked`/`indeterminate` для чекбокса в шапке.
    - Тулбар `TableSelectionToolbar` показывает кнопки для массовых действий, состояние выделения и т.п.

- Сортировка: `src/features/table-sorting`
    - Хук инкапсулирует текущий `sortKey`/`direction` и коллбеки переключения.
    - Заголовок таблицы читает конфигурацию колонок и отображает кнопки сортировки для колонок с `sortKey`.

Краткий пример использования тела таблицы:

```tsx
<TableWithActionsBody
    data={rows}
    columns={columns}
    selectedIds={selectedIds}
    handlers={{ toggleSelection }}
    renderBodyRow={(row, columns, isChecked, toggleSelection) => (
        <Table.Tr key={row.id}>
            <Table.Td>
                <Checkbox checked={isChecked} onChange={() => toggleSelection(row.id)} />
            </Table.Td>
            {columns.map((col) => (
                <Table.Td key={col.key}>
                    {col.type === "entry"
                        ? String(row[col.keyInEntry])
                        : renderRaw(col, row)}
                </Table.Td>
            ))}
        </Table.Tr>
    )}
/>
```
