import { useState } from 'react'
import { menuData } from './data/menu'
import { MenuCategory } from './components/MenuCategory'

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredCategories = selectedCategory
    ? menuData.filter((cat) => cat.id === selectedCategory)
    : menuData

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <header className="bg-amber-800 text-white py-8 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Cardápio Reserva</h1>
          <p className="mt-2 text-amber-200">Sabor e qualidade em cada prato</p>
        </div>
      </header>

      <nav className="bg-amber-700 py-4 sticky top-0 z-10 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-white text-amber-800'
                  : 'bg-amber-600 text-white hover:bg-amber-500'
              }`}
            >
              Todos
            </button>
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-white text-amber-800'
                    : 'bg-amber-600 text-white hover:bg-amber-500'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <MenuCategory key={category.id} category={category} />
          ))}
        </div>
      </main>

      <footer className="bg-amber-800 text-amber-200 py-6 text-center">
        <p>Cardápio Reserva - Todos os direitos reservados</p>
      </footer>
    </div>
  )
}

export default App
