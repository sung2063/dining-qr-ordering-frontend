# Dining-QR Ordering App (MVP)

This project is a simplified MVP version of my full dining QR ordering platform. The React application focuses on the core customer experience of browsing a digital menu, selecting items, managing a cart, and placing an order, all integrated with a Spring Boot backend service. The goal of this MVP is to provide a lightweight, easy‑to‑run demonstration of the essential ordering flow.

In the production environment, the platform includes a much broader and more sophisticated feature set. The full system supports QR code scanning by table, staff and role management, category and menu item administration, revenue analytics and reporting, and a variety of operational tools. It also offers user‑customizable settings such as light and dark themes and multi‑language support. These advanced capabilities are intentionally excluded from the MVP to keep the portfolio version simple and focused.

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)

![Dining-QR Ordering Demo](https://github.com/sung2063/dining-qr-ordering-frontend/blob/main/resources/dining-qr-ordering-demo.gif)

## Features

- __Menu browsing UI__ — responsive interface for viewing available dishes
- __Item detail view__ — users can inspect descriptions and prices
- __Cart management__ — add, remove, and update items before checkout
- __Order submission__ — sends order data to the backend service
- __API‑driven data loading__ — menu and order operations powered by the Spring Boot backend

## Prerequisites

- Node.js
- npm
- Dining-QR Backend Service — required for API communication (clone from: https://github.com/sung2063/dining-qr-service-backend)

## Setup & Run

1. <b>Clone the repository</b>
2. <b>Ensure backend services are running</b><br>
The React app depends on the Spring Boot API and PostgreSQL database.
<br>Make sure both services are already running.
<br>You can follow the backend setup instructions here: https://github.com/sung2063/dining-qr-service-backend?tab=readme-ov-file#setup--run
3. <b>Start the app</b><br>
Run the app locally: `npm run dev`.
<br>This will generate a local development URL (usually `http://localhost:5173` or similar) in your terminal.
<br>Open that link in your browser to interact with the application.

## Screenshots

| <p align="center"><img src="https://raw.githubusercontent.com/sung2063/dining-qr-ordering-frontend/main/resources/screenshot-1.png" width="100%" height="450px"><br><b>Menu Screen</b></p> | <p align="center"><img src="https://raw.githubusercontent.com/sung2063/dining-qr-ordering-frontend/main/resources/screenshot-2.png" width="100%" height="450px"><br><b>Item Detail Modal</b></p> |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <p align="center"><img src="https://raw.githubusercontent.com/sung2063/dining-qr-ordering-frontend/main/resources/screenshot-3.png" width="100%" height="450px"><br><b>Order Screen</b></p> | <p align="center"><img src="https://raw.githubusercontent.com/sung2063/dining-qr-ordering-frontend/main/resources/screenshot-4.png" width="100%" height="450px"><br><b>Checkout Screen</b></p> |


## License

This project is for portfolio and demonstration purposes.
