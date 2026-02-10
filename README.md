# Request Management Mini App

A modern, performant Angular 17 application for managing and filtering organizational requests. Built with standalone components, signals, and reactive programming patterns.

## 🎯 Overview

This mini-app provides a clean interface to view, search, and filter requests with real-time updates. It demonstrates best practices in Angular development including standalone components, signal-based state management, and OnPush change detection strategy.

## ✨ Features

- **Real-time Search**: Debounced search functionality with text highlighting
- **Status Management**: Visual status badges (Approved, Pending, Rejected)
- **Performance Optimized**: OnPush change detection and computed signals
- **Type Safety**: Strongly typed with TypeScript 5.4+
- **Clean Architecture**: Separation of concerns with API, Core, Features, and Shared layers

## 🏗️ Architecture

```
src/
├── app/
│   ├── api/              # API integration layer (DTOs, services)
│   ├── core/             # Core functionality (mappers, enums, utilities)
│   ├── features/         # Feature/pages (requests-list)
│   └── shared/           # Reusable components, pipes, models
└── assets/
    ├── mocks/            # Mock data for development
    └── styles/           # Design tokens and base styles
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
ng serve
```

Navigate to `http://localhost:4200/` after starting the dev server.

## 🛠️ Technology Stack

- **Angular 17.3** with standalone components
- **TypeScript 5.4** for type safety
- **RxJS 7.8** for reactive programming
- **SCSS**

## 🔮 Future Improvements

Given additional time, the following enhancements would further improve performance and code quality:

### Performance Optimizations

- Implement virtual scrolling for large datasets (e.g., `@angular/cdk/scrolling`)
- Add pagination or infinite scroll to reduce initial load time
- Implement service worker for offline capabilities and caching

### Design

- Implement "layout component" to unify the visual of all the pages
- Responsive Design: Mobile-first approach with SCSS architecture

### Code Quality & Features

- Error boundary implementation with user-friendly error messages
- Advanced filtering (multi-select status, date ranges, sorting)
- Accessibility support
- Internationalization (i18n) support for multi-language
- HTTP interceptors for authentication, error handling (4xx, 5xx, ...), and request/response transformation

### Developer Experience

- Husky pre-commit hooks with linting and formatting

---

<br>
<br>

Author: Maryam Fooladi
