import { useState, useEffect } from "react"

export const useLocalStorage = (chave, valorInicial) => {
  const [storad, setStorad] = useState(() => {
    try {
      const valor = localStorage.getItem(chave)
      return valor ? JSON.parse(valor) : valorInicial
    } catch (error) {
      console.log("Erro ao acessar o localStorage", error)
      return valorInicial
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(chave, JSON.stringify(storad))
    } catch (error) {
      console.log("Erro ao salvar no localStorage", error)
    }
  }, [chave, storad])

  return [storad, setStorad]
}
