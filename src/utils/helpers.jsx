export function formatarDate(data) {
  return new Date(data).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  })
}

export function quantidadeTarefas(tarefas) {
  return tarefas.length
}

export function quantidadeCompletas(tarefas) {
  return tarefas.filter(tarefa => tarefa.feito).length
}

export function quantidadePendentes(tarefas) {
  return tarefas.filter(tarefa => !tarefa.feito).length
}

export function filtroTarefas(tarefas, filtro) {
  if (filtro === "completas") return tarefas.filter(tarefa => tarefa.feito)
  if (filtro === "pendentes") return tarefas.filter(tarefa => !tarefa.feito)
  return tarefas
}

export function trucateTexto(texto, limite = 50) {
  if (!texto) return ""
  return texto.length > limite
    ? `${texto.substring(0, limite)}...`
    : texto
}
