import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, GlobalStyles } from "@mui/material";
import App from './App.tsx'

// Global CSS
const globalStyles = {
  body: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  html: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <GlobalStyles styles={globalStyles} />
    <App />
  </StrictMode>,
)
