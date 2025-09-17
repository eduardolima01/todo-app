import { createContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [tarefas, setTarefas] = useLocalStorage("todoapp_tarefas", [])

  const addTarefa = tarefa => setTarefas([tarefa, ...tarefas])
  const removeTarefa = data => setTarefas(tarefas.filter(tarefa => tarefa.data !== data))
  const toggleTarefa = data => setTarefas(tarefas.map(tarefa => tarefa.data === data
    ? { ...tarefa, feito: !tarefa.feito }
    : tarefa
  ))

  return <TodoContext.Provider
    value={{ tarefas, addTarefa, removeTarefa, toggleTarefa }}
  >
    {children}
  </TodoContext.Provider>
}

