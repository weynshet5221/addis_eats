# Addis Eats

A modern and responsive food ordering web application built with React and Vite.

Addis Eats allows customers to browse a food menu, search and filter dishes, view dish details, manage their shopping cart, save favorite dishes, complete checkout, and view their orders.

The application also includes a separate admin interface for managing menu items and customer orders.
## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Routing](#routing)
- [State Management](#state-management)
- [Data Storage](#data-storage)
- [Responsive Design](#responsive-design)
- [Error Handling](#error-handling)
- [Accessibility](#accessibility)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [License](#license)
# Project Overview

Addis Eats is a frontend food ordering application developed as part of the IBT College Canada Full Stack Software Development program.

The project is built with React and Vite and uses Zustand for global state management.

The application has two main areas:

- Customer-facing application
- Admin management application

The customer application allows users to browse and order food, while the admin application provides tools for managing dishes and customer orders.
# Features

## Customer Features

- Browse food menu
- Search dishes
- Filter dishes by category
- View individual dish details
- Add dishes to cart
- Increase and decrease item quantities
- Remove items from cart
- View cart total
- Cart persistence using localStorage
- Customer login
- Protected checkout
- Checkout form validation
- Order confirmation
- Order history
- Save favorite dishes
- Light and dark mode
- Responsive design

## Admin Features

- Admin login
- Admin dashboard
- View menu items
- Search menu items
- Add dishes
- Edit dishes
- Delete dishes
- Hide and unhide dishes
- View customer orders
- View order details
- Update order status
- Delete orders
- Admin logout
- Responsive admin navigation
# Technologies Used

- React
- Vite
- JavaScript
- React Router
- Zustand
- CSS
- Lucide React
- LocalStorage
- SessionStorage
# Project Structure

```text
addis-eats/
├── public/
│   ├── data/
│   │   └── menu.json
│   └── images/
│
├── src/
│   ├── admin/
│   ├── api/
│   ├── auth/
│   ├── cart/
│   ├── checkout/
│   ├── favorites/
│   ├── hooks/
│   ├── menu/
│   ├── orders/
│   ├── pages/
│   ├── store/
│   ├── ui/
│   ├── App.jsx
│   ├── Layout.jsx
│   ├── ErrorBoundary.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
# Routing

React Router is used for navigation between pages.

## Customer Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/menu` | Menu page |
| `/menu/:id` | Dish details |
| `/cart` | Shopping cart |
| `/favorites` | Favorite dishes |
| `/orders` | Order history |
| `/contact` | Contact page |
| `/login` | Customer login |
| `/checkout` | Checkout |
| `/order-confirmation/:id` | Order confirmation |

## Admin Routes

| Route | Description |
|---|---|
| `/admin/login` | Admin login |
| `/admin` | Admin dashboard |
| `/admin/menu` | Menu management |
| `/admin/orders` | Order management |
| `/admin/orders/:id` | Order details |
# State Management

Zustand is used to manage global application state.

The project contains separate stores for different parts of the application.

### Cart Store

Manages:

- Cart items
- Adding items
- Removing items
- Updating quantities
- Cart totals

### Authentication Store

Manages:

- Customer information
- Login
- Logout
- Authentication state

### Favorites Store

Manages:

- Favorite dishes
- Adding favorites
- Removing favorites

### Theme Store

Manages:

- Light mode
- Dark mode
- Theme persistence
# Data Storage

The application uses browser storage for frontend data persistence.

## LocalStorage

The following localStorage keys are used:

- `addiseats_menu`
- `addiseats_orders`
- `addiseats_cart`
- `addiseats_favorites`
- `addiseats_theme`

## SessionStorage

The admin session uses:

- `adminLoggedIn`
# Responsive Design

Addis Eats is designed to work across different screen sizes.

The application supports:

- Desktop
- Laptop
- Tablet
- Mobile

On smaller screens, the customer and admin navigation change to responsive hamburger menus.

Food cards, forms, buttons, and layouts also adapt to smaller screen sizes.
# Error Handling

The application includes several error-handling features:

- Loading states
- Error messages
- Empty cart state
- Empty favorites state
- Form validation
- Protected routes
- Invalid route handling
- React Error Boundary
# Accessibility

The application includes basic accessibility features such as:

- Semantic HTML
- Form labels
- Alternative text for images
- Accessible button labels
- Keyboard-accessible controls
- Clear validation messages
- Responsive layouts
- `aria-label` and `aria-expanded` for the mobile menu
# Installation

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

Check your versions:

```bash
node -v
npm -v
git --version

```markdown
# Running the Application

Start the development server:

```bash
npm run dev
```markdown
# Building for Production

To create a production build:

```bash
npm run build
```markdown
# Future Improvements

Possible future improvements include:

- Backend API integration
- Database integration
- Secure authentication
- Online payment integration
- Real-time order tracking
- Delivery management
- Customer reviews and ratings
- Image upload functionality
- Cloud storage
- Production deployment
- Real-time order updates

# Author

**Weynshet Kebede**