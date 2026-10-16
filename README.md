# Tasks Manager

*Aplicación ligera de gestión de tareas construida con React y Vite*

[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-f7df1e?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![ESLint](https://img.shields.io/badge/Linting-ESLint-4b32c3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org)

[Características](#características) • [Demo en vivo](#demo-en-vivo) • [Comenzando](#comenzando) • [Uso](#uso) • [Estructura del proyecto](#estructura-del-proyecto) • [Scripts](#scripts) • [Pila tecnológica](#pila-tecnológica)

---

Aplicación de tareas (to-do) de una sola página para crear, rastrear y filtrar tareas. El estado se gestiona globalmente con la API de Contexto de React, sin backend ni servicios externos. La interfaz está en español (*Gestor de Tareas*) y fue construida para un programa de capacitación en español.

## Características

- **Crear tareas** — agregar tareas con título y descripción corta desde un formulario simple.
- **Marcar como hechas** — alternar el estado de completado con una casilla de verificación; las tareas completadas reciben un resaltado visual.
- **Filtrar por estado** — mostrar *todas*, *pendientes* o *terminadas* con un menú desplegable.
- **Contadores en vivo** — el encabezado muestra siempre cuántas tareas están pendientes y cuántas están terminadas.
- **Estado global** — un único `TasksProvider` comparte tareas, filtros y contadores en toda la aplicación.
- **Sin configuración** — servidor de desarrollo con HMR y configuración ESLint plana lista para usar.

> [!NOTE]
> Las tareas viven solo en memoria. Recargar la página restablece la lista — la persistencia (por ejemplo, `localStorage`) se omite intencionalmente para mantener el ejemplo minimal.

## Demo en vivo

La aplicación está desplegada en: **https://tasks-manager-six.vercel.app**

## Comenzando

### Prerrequisitos

- [Node.js](https://nodejs.org/) LTS (v18 o posterior)
- npm (incluido con Node.js)

### Instalación

```bash
git clone https://github.com/JhoamSebastianMunoz/tasksManager.git
cd tasksManager
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación inicia en `http://localhost:5173` con recarga en caliente habilitada.

> [!TIP]
> Ejecuta `npm run lint` antes de hacer commit para verificar tu código contra las reglas ESLint del proyecto, y `npm run build` para verificar una compilación de producción.

## Uso

1. Llena **Título** y **Descripción**, luego haz clic en **Crear tarea**.
2. Usa la casilla de verificación de cada tarea para marcarla como completada o pendiente; el contador se actualiza automáticamente.
3. Elige una opción en **Filtrar** para mostrar *Todas*, *Pendientes* o *Terminadas*.

## Estructura del proyecto

```
src/
├── assets/                  # Imágenes usadas por la interfaz
├── components/
│   ├── Context/             # TasksProvider: estado global (tareas, filtros, contadores)
│   ├── FilterTasks/         # Menú desplegable de filtro de estado
│   ├── ItemTask/            # Fila de tarea con alternar de completado
│   ├── Layouts/             # Encabezado, Principal, ContenedorTareas, InfoTareas
│   ├── NewTask/             # Formulario de creación de tareas
│   └── Pages/Home/          # Página de inicio que compone el diseño
├── App.jsx                  # Componente raíz
└── main.jsx                 # Punto de entrada, envuelve <App/> en <TasksProvider>
```

Cada componente incluye su propio archivo CSS, manteniendo los estilos con alcance por característica.

### Cómo fluye el estado

- `TasksProvider` (`src/components/Context/Context.jsx`) contiene los arreglos `tasks` y `filteredTasks` más los contadores pendientes/hechos.
- `NewTask` añade una nueva tarea con un `uuid` y `status: false`.
- `ItemTask` busca su tarea por id y llama a `updateTaskStatus` al alternar.
- `Header` recomputa y muestra los contadores cada vez que cambia la lista de tareas.
- `FilterTasks` reemplaza `filteredTasks` con el subconjunto que coincide con el estado seleccionado.

## Scripts

| Script | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo de Vite con HMR |
| `npm run build` | Crea una compilación de producción optimizada en `dist/` |
| `npm run preview` | Sirve la compilación de producción localmente |
| `npm run lint` | Ejecuta ESLint en todo el proyecto |

## Pila tecnológica

| Herramienta | Propósito |
| --- | --- |
| [React 18](https://react.dev) | Librería de UI, API de Contexto para el estado |
| [Vite 5](https://vitejs.dev) | Servidor de desarrollo y empaquetador de producción |
| [uuid](https://github.com/uuidjs/uuid) | Identificadores únicos para tareas |
| [ESLint 9](https://eslint.org) | Linting con configuración plana y plugins de React y hooks |
