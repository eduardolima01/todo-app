import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { Button } from "../components/Button"
import { formatarDate, trucateTexto } from "../utils/helpers"

export const TaskCard = ({ tarefa }) => {
  const { toggleTarefa, removeTarefa } = useContext(TodoContext)

  return <div
    className="flex justify-between items-center p-2 border rounded"
  >
    <div className="flex gap-2 items-center">
      <Button
        onClick={() => toggleTarefa(tarefa.data)}
        className={`${tarefa.feito
          ? "bg-green-500 hover:bg-green-700"
          : "bg-gray-500 hover:bg-gray-700"}`}
      >
        {tarefa.feito ? "❌" : "✅"}
      </Button>
      <div
        className={tarefa.feito
          ? "line-through text-gray-400"
          : "cursor-ponter"
        }
      >
        <span className="text-sm">
          {formatarDate(tarefa.data)}
        </span>
        <p>
          {trucateTexto(tarefa.texto, 40)}
        </p>
      </div>
    </div>
    <Button
      onClick={() => removeTarefa(tarefa.data)}
      className="bg-red-500 hover:bg-red-700"
    >
      X
    </Button>
  </div>
}

