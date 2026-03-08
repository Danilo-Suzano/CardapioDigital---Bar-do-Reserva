import { menuData } from './data/menu'
import { MenuCategory } from './components/MenuCategory'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <header className="bg-amber-800 text-white py-8 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Cardápio Reserva</h1>
          <p className="mt-2 text-amber-200">Sabor e qualidade em cada prato</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuData.map((category) => (
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
