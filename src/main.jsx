import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDoList from './to-do-list'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoList />
  </StrictMode>,
)
