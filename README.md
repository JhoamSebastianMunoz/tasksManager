<div align="center">

# Tasks Manager

*A lightweight task management app built with React and Vite*

[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-f7df1e?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![ESLint](https://img.shields.io/badge/Linting-ESLint-4b32c3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org)

[Features](#features) • [Getting started](#getting-started) • [Usage](#usage) • [Project structure](#project-structure) • [Scripts](#scripts)

</div>

---

A simple, single-page to-do application to create, track and filter tasks. State is handled globally with the React Context API — no backend or external services required. The interface text is in Spanish (*Gestor de Tareas*), as it was built for a Spanish-language training program.

## Features

- **Create tasks** — add tasks with a title and a short description (up to 100 characters) from a simple form.
- **Mark as done** — toggle a task's completion state with a checkbox; completed tasks get a visual highlight and status indicator.
- **Filter by status** — show *all*, *pending* or *completed* tasks with a dropdown filter.
- **Live counters** — the header always displays how many tasks are pending and how many are finished.
- **Global state** — a single `TasksProvider` context shares tasks, filters and counters across the whole app.
- **Zero config** — batteries-included dev server with Hot Module Replacement (HMR) and a flat ESLint config ready to go.

> [!NOTE]
> Tasks live in memory only. Reloading the page resets the list — persistence (e.g. `localStorage`) is intentionally left out to keep the sample minimal.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) LTS (v18 or later)
- npm (bundled with Node.js)

### Installation

```bash
git clone https://github.com/JhoamSebastianMunoz/tasksManager.git
cd tasksManager
npm install
```

### Run in development

```bash
npm run dev
```

The app starts at `http://localhost:5173` with hot reload enabled.

> [!TIP]
> Run `npm run lint` before committing to check your code against the project's ESLint rules, and `npm run build` to verify a production build.

## Usage

1. Fill in **Título de la tarea** (task title) and **Descripción de la tarea** (description), then click **Crear nueva tarea**.
2. Use the checkbox on each task to mark it as completed or pending — the counter at the top updates automatically.
3. Pick an option in **Filtrar por** to display *Todas* (all), *Pendientes* (pending) or *Completados* (done) tasks.

## Project structure

```
src/
├── assets/                  # Images used by the UI
├── components/
│   ├── Context/             # TasksProvider: global state (tasks, filters, counters)
│   ├── FilterTasks/         # Status filter dropdown
│   ├── ItemTask/            # Task row with completion toggle
│   ├── Layouts/             # Header, Main, ContainerTasks, InfoTasks
│   ├── NewTask/             # Task creation form
│   └── Pages/Home/          # Home page composing the layout
├── App.jsx                  # Root component
└── main.jsx                 # Entry point, wraps <App/> in <TasksProvider>
```

Each component ships alongside its own CSS file, keeping styles scoped by feature.

### How state flows

- `TasksProvider` (`src/components/Context/Context.jsx`) holds the `tasks` and `filteredTasks` arrays plus the pending/done counters.
- `NewTask` appends a new task with a `uuid` and `status: false`.
- `ItemTask` looks up its task by id and calls `updateTaskStatus` on toggle.
- `InfoTasks` recomputes the counters whenever the task list changes.
- `FilterTasks` replaces `filteredTasks` with the subset matching the selected status.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

## Tech stack

| Tool | Purpose |
| --- | --- |
| [React 18](https://react.dev) | UI library, Context API for state |
| [Vite 5](https://vitejs.dev) | Dev server and production bundler |
| [uuid](https://github.com/uuidjs/uuid) | Unique ids for tasks |
| [ESLint 9](https://eslint.org) | Flat-config linting with React & hooks plugins |
