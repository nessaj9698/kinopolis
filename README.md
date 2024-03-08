Кинополис - приложение для поиска фильмов

**API** - (https://kinopoisk.dev/)

## **Возможности**

- 🔐 **Регистрация и авторизация** пользователи могут создать учетную запись и авторизоваться в приложении, авторизация сохраняется после закрытия вкладки/браузера
- 🔎 **Поиск** приложение предоставляет возможность поиска фильмов по названию
- 🖤 **Избранное** пользователи могут добавлять фильмы в избранное
- 🕣 **История поиска:** для авторизованных пользователей есть возможность сохранять историю поиска

## Реализованные требования:

### **1 уровень (обязательный - необходимый минимум)**

- [x] Реализованы **Требования к функциональности**

- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используется firebase + localStorage [**firebase**](https://firebase.google.com/)

**React**

- [x] **Функциональные компоненты c хуками** в приоритете над классовыми
- [x] Есть разделение на **[глупые](https://github.com/nessaj9698/aston-react/blob/main/src/components/layout/container/Container.tsx)** и **[умные](https://github.com/nessaj9698/aston-react/blob/main/src/components/searchForm/SearchForm.tsx)** компоненты

- [x] Есть [**рендеринг списков**](https://github.com/nessaj9698/aston-react/blob/main/src/components/movieCards/CardRows.tsx)

- [x] Реализована хотя бы одна [**форма**](https://github.com/nessaj9698/aston-react/blob/main/src/components/userForm/UserForm.tsx)

- [x] Есть применение [**Контекст API**](https://github.com/nessaj9698/aston-react/blob/main/src/pages/FavouritesPage/FavouritesPage.tsx)

- [x] Есть применение **предохранителя** [Страница поиска](https://github.com/nessaj9698/aston-react/blob/main/src/pages/SearchPage/SearchPage.tsx) и [app](https://github.com/nessaj9698/aston-react/blob/main/src/App.tsx)

- [x] Есть хотя бы один [**кастомный хук**](https://github.com/nessaj9698/aston-react/blob/main/src/hooks/useNavigateToSearch.ts)

- [x] Хотя бы несколько компонентов используют **PropTypes** [тут](https://github.com/nessaj9698/aston-react/blob/main/src/components/layout/container/Container.tsx) и [тут](https://github.com/nessaj9698/aston-react/tree/main/src/components/loader)

- [x] Поиск не должен триггерить много запросов к серверу [**debounce**](https://github.com/nessaj9698/aston-react/blob/main/src/hooks/useDebounce.ts)

- [x] Есть применение [lazy](https://github.com/nessaj9698/aston-react/blob/main/src/routes/routes.js) + [Suspense](https://github.com/nessaj9698/aston-react/blob/main/src/components/layout/AppLayout.tsx)

**Redux**

- [x] Используем [**Modern Redux with Redux Toolkit**](https://github.com/nessaj9698/aston-react/blob/main/src/store/store.ts)
- [x] Используем [**слайсы**](https://github.com/nessaj9698/aston-react/blob/main/src/store/authSlice.ts)

- [x] Есть хотя бы одна **кастомная мидлвара** или [**createListenerMiddleware**](https://github.com/nessaj9698/aston-react/blob/main/src/store/authMiddleware.ts)

- [x] Используется [**RTK Query**](https://github.com/nessaj9698/aston-react/blob/main/src/store/moviesQueryApi.ts)

- [x] Используется [**Transforming Responses**](https://github.com/nessaj9698/aston-react/blob/main/src/utils/dataFormatting.ts)

### **2 уровень (необязательный)**

- [x] Использование [**TypeScript**](https://github.com/nessaj9698/aston-react/blob/main/tsconfig.json)
- [x] Использование Firebase + LocalStorage для учетных записей и их Избранного и Истории поиска
- [x] Подключен storybook и созданы два, три сториса с knobs, которые показывают разные состояния компонента [**button**](https://github.com/nessaj9698/aston-react/blob/main/src/stories/Button.stories.tsx) и [**userForm**](https://github.com/nessaj9698/aston-react/blob/main/src/stories/UserForm.stories.tsx)

## **Дополнительно**

- [react-hook-forms](https://react-hook-form.com/) forms
- [sonner](https://sonner.emilkowal.ski/toast) notification
