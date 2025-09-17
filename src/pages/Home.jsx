import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"

import { TaskCard } from "../components/TaskCard"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

import {
  quantidadeCompletas,
  quantidadePendentes,
  filtroTarefas,
  quantidadeTarefas,
} from "../utils/helpers"

export const Home = ({ }) => {
  const { tarefas, addTarefa } = useContext(TodoContext)
  const [newTarefa, setNewTarefa] = useState('')

  const [filtro, setFiltro] = useState('todas')

  const handleAdd = () => {
    if (!newTarefa.trim()) return
    addTarefa({
      texto: newTarefa,
      feito: false,
      data: new Date().toISOString()
    })
    setNewTarefa('')
  }

  return <div>
    <div className="max-w-md mx-auto mt10">
      <h1 className="text-2xl font-bold mb-4">To-Do Lista</h1>
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <Button
          onClick={_ => setFiltro("todas")}
          className={
            filtro === "todas"
              ? "bg-blue-500 hover:bg-blue-700"
              : "bg-gray-500 hover:bg-gray-700"}
        >
          {
            quantidadeTarefas(tarefas) ?
              <span>
                ({quantidadeTarefas(tarefas)})
              </span>
              : null
          } todas
        </Button>
        <Button
          onClick={_ => setFiltro("pendentes")}

          className={
            filtro === "pendentes"
              ? "bg-yellow-500 hover:bg-yellow-700"
              : "bg-gray-500 hover:bg-gray-700"}
        >
          {
            quantidadePendentes(tarefas) ?
              <span>
                ⏳ ({quantidadePendentes(tarefas)})
              </span>
              : null
          } pendentes
        </Button>
        <Button
          onClick={_ => setFiltro("completas")}
          className={
            filtro === "completas"
              ? "bg-green-500 hover:bg-green-700"
              : "bg-gray-500 hover:bg-gray-700"}
        >
          {
            quantidadeCompletas(tarefas) ?
              <span>
                ✅ ({quantidadeCompletas(tarefas)})
              </span>
              : null
          } completas
        </Button>
      </div>

      <div>
        <div>
          <h2 className="text-xl font-bold">Nova Tarefa</h2>
          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <Input
              value={newTarefa}
              onChange={e => setNewTarefa(e.target.value)}
            />
            <Button onClick={handleAdd}>
              Adicionar
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <ul
          className="flex flex-col gap-2"
        >
          {filtroTarefas(tarefas, filtro).map((tarefa, index) => <li
            key={"task" + index}
          >
            <TaskCard tarefa={tarefa} />
          </li>
          )}
        </ul>
      </div>
    </div>
  </div>
}

