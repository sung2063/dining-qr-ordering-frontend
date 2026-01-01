# Dining QR Ordering App (MVP)

This project is a simplified MVP version of my full dining QR ordering platform. The React application focuses on the core customer experience of browsing a digital menu, selecting items, managing a cart, and placing an order, all integrated with a Spring Boot backend service. The goal of this MVP is to provide a lightweight, easy‑to‑run demonstration of the essential ordering flow.

In the production environment, the platform includes a much broader and more sophisticated feature set. The full system supports QR code scanning by table, staff and role management, category and menu item administration, revenue analytics and reporting, and a variety of operational tools. It also offers user‑customizable settings such as light and dark themes and multi‑language support. These advanced capabilities are intentionally excluded from the MVP to keep the portfolio version simple and focused.

## Features

- __Menu browsing UI__ — responsive interface for viewing available dishes
- __Item detail view__ — users can inspect descriptions and prices
- __Cart management__ — add, remove, and update items before checkout
- __Order submission__ — sends order data to the backend service
- __API‑driven data loading__ — menu and order operations powered by the Spring Boot backend

## Tech Stack

- React
- TypeScript
- React Router
- Axios
- Vite
- CSS

## Prerequisites

- Node.js
- npm or yarn
- Dining QR Ordering Backend Service — required for API communication (clone from: https://github.com/sung2063/dining-qr-service-backend)
