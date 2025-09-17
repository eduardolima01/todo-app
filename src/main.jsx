import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./style.css"
import { App } from "./App.jsx"
import { TodoProvider } from "./context/TodoContext"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>,
)
