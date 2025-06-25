import React, { useEffect } from 'react'

export default function MindMap() {
  useEffect(() => {
    if (!window.MindElixir) return

    const mind = new window.MindElixir({
      el: '#mind-map-container',
      direction: window.MindElixir.LEFT,
      draggable: true,
      editable: true,
      theme: 'fresh_blue',
       {
        nodeData: {
          id: 'root',
          topic: 'Psicologia',
          children: [
            { id: '1', topic: 'Comportamento' },
            { id: '2', topic: 'Processos Mentais' },
            { id: '3', topic: 'Ciência Empírica' }
          ]
        }
      }
    })

    mind.init()
  }, [])

  return (
    <main className="p-4 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mt-4">🧠 Mapa Mental Interativo</h1>
      <div id="mind-map-container" className="w-full h-[calc(100vh-120px)] bg-white rounded-lg shadow border border-gray-200 mx-auto max-w-xl"></div>
      <p className="text-center text-sm text-gray-500 mt-4">Toque nos nós para editar</p>
    </main>
  )
}
