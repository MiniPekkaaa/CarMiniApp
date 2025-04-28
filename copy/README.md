# Мини Приложение

Это минимальный набор файлов для создания нового приложения.

## Структура проекта

```
copy/
├── backend/
│   ├── app.py
│   └── requirements.txt
└── frontend/
    ├── index.html
    ├── styles.css
    └── app.js
```

## Установка и запуск

### Backend

1. Перейдите в папку backend:
```bash
cd backend
```

2. Установите зависимости:
```bash
pip install -r requirements.txt
```

3. Запустите сервер:
```bash
python app.py
```

### Frontend

1. Откройте файл `frontend/index.html` в браузере
2. Или используйте любой локальный сервер для разработки

## Примечания

- Backend запускается на порту 5000
- Frontend ожидает backend на localhost:5000
- Для разработки рекомендуется использовать локальный сервер для frontend части 