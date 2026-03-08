import type { Category } from '../data/menu'

interface MenuCategoryProps {
  category: Category
}

function formatPrice(price: number): string {
  if (price === 0) return 'Consultar'
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-amber-600 px-6 py-4">
        <h2 className="text-2xl font-bold text-white">
          {category.name}
        </h2>
      </div>
      <div className="divide-y divide-gray-100">
        {category.items.map((item) => (
          <div
            key={item.id}
            className="px-6 py-4 flex justify-between items-center hover:bg-amber-50 transition-colors"
          >
            <span className="text-gray-800 font-medium">{item.name}</span>
            <span className="text-amber-700 font-bold text-lg">
              {formatPrice(item.price)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
