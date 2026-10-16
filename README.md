# Landing Page – React + Bootstrap

Práctica N.º 2 · Desarrollo Web · Unidad 2: Frameworks (React + CSS Framework) · UNEMI

Landing page responsiva con un formulario de contacto validado, desarrollada con React y Bootstrap.

## Tecnologías
- React 19 (componentes funcionales, JSX, hooks)
- Vite
- Bootstrap 5 (rejilla, navbar, cards, formularios, alertas)

## Estructura
```
src/
├── App.jsx                  # Composición de la página
├── main.jsx                 # Punto de entrada (importa Bootstrap)
├── styles/custom.css        # Estilos propios
└── components/
    ├── Navbar.jsx           # Barra de navegación colapsable
    ├── Hero.jsx             # Sección principal
    ├── Services.jsx         # Tarjetas de servicios (render con map)
    ├── ContactForm.jsx      # Formulario con useState y validaciones
    └── Footer.jsx
```

## Funcionalidades
- Diseño responsivo (móvil, tablet y escritorio) con Bootstrap.
- Menú colapsable en pantallas pequeñas y navegación por anclas.
- Formulario controlado con `useState` y eventos `onChange`, `onBlur` y `onSubmit`.
- Validaciones: nombre (≥3 letras, solo letras), correo con formato válido, teléfono de 10 dígitos, asunto obligatorio, mensaje (≥10 caracteres) y aceptación de términos.
- Mensajes dinámicos de error por campo, y alertas globales de éxito o error.
- Botón para limpiar el formulario.

## Ejecución
```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # compilación de producción
```
