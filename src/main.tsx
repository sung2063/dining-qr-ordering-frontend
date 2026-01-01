/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./i18n";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
