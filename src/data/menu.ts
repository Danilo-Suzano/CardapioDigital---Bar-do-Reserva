export interface MenuItem {
  id: string
  name: string
  price: number
  image?: string
}

export interface Category {
  id: string
  name: string
  items: MenuItem[]
}

export const menuData: Category[] = [
  {
    id: 'files',
    name: 'Filés',
    items: [
      { id: 'file-1', name: 'Filé de Pão', price: 30, image: '/filedepao.png' },
      { id: 'file-2', name: 'Filé Mignon', price: 100, image: '/filemignon.png' },
      { id: 'file-3', name: 'Filé com Fritas', price: 130, image: '/filecomfritas.png' },
      { id: 'file-4', name: 'Filé c/ Gorgonzola', price: 130, image: '/filecgorgonzola.png' },
      { id: 'file-5', name: 'Filé c/ Fritas e Linguiça', price: 150, image: '/filecfritaselinguica.png' },
      { id: 'file-6', name: 'Meio Filé com Fritas e Linguiça', price: 80, image: '/meiofilecfritaselinguica.png' },
    ],
  },
  {
    id: 'peixes',
    name: 'Peixes',
    items: [
      { id: 'peixe-1', name: 'Meia Isca de Peixe', price: 35, image: '/MeiaIscadePeixe.png' },
      { id: 'peixe-2', name: 'Meio Peixe com Batata', price: 40, image: '/MeioPeixecomBatata.png' },
      { id: 'peixe-3', name: 'Isca de Peixe', price: 60, image: '/IscadePeixe.png' },
      { id: 'peixe-4', name: 'Peixe c/ Batata', price: 70, image: '/PeixecBatata.png' },
    ],
  },
  {
    id: 'frango',
    name: 'Frango',
    items: [
      { id: 'frango-1', name: 'Meia Isca de Frango', price: 25 },
      { id: 'frango-2', name: 'Frango à Passarinho', price: 45 },
      { id: 'frango-3', name: 'Frango Frito', price: 45 },
      { id: 'frango-4', name: 'Frango na Chapa', price: 45 },
      { id: 'frango-5', name: 'Frango c/ Bacon e Catupiry', price: 55 },
      { id: 'frango-6', name: 'Frango c/ Bacon e Cheddar', price: 55 },
      { id: 'frango-7', name: 'Frango c/ Fritas', price: 55 },
    ],
  },
  {
    id: 'batatas',
    name: 'Batatas',
    items: [
      { id: 'batata-1', name: 'Meia Batata', price: 15 },
      { id: 'batata-2', name: 'Batata Frita', price: 25 },
      { id: 'batata-3', name: 'Meia Batata c/ Bacon', price: 20 },
      { id: 'batata-4', name: 'Meia Batata c/ Linguiça', price: 20 },
      { id: 'batata-5', name: 'Meia Batata, Cheddar e Linguiça', price: 20 },
      { id: 'batata-6', name: 'Batata Frita c/ Bacon', price: 30 },
      { id: 'batata-7', name: 'Batata Frita c/ Linguiça', price: 35 },
      { id: 'batata-8', name: 'Batata Frita c/ Cheddar', price: 40 },
    ],
  },
  {
    id: 'pratos',
    name: 'Pratos / Almoço',
    items: [
      { id: 'prato-1', name: 'Porção de Arroz', price: 10 },
      { id: 'prato-2', name: 'Porção de Feijão', price: 10 },
      { id: 'prato-3', name: 'Frango à Milanesa', price: 30 },
      { id: 'prato-4', name: 'Frango à Parmegiana', price: 30 },
      { id: 'prato-5', name: 'Filé Mignon à Parmegiana', price: 35 },
      { id: 'prato-6', name: 'Filé de Peixe à Parmegiana', price: 35 },
      { id: 'prato-7', name: 'Filé de Peixe à Belle Meunière', price: 110 },
      { id: 'prato-8', name: 'Linguado com Camarão', price: 120 },
    ],
  },
  {
    id: 'aipim',
    name: 'Aipim',
    items: [
      { id: 'aipim-1', name: 'Aipim c/ Bacon', price: 35 },
      { id: 'aipim-2', name: 'Aipim c/ Linguiça', price: 30 },
    ],
  },
  {
    id: 'caldos',
    name: 'Caldos',
    items: [
      { id: 'caldo-1', name: 'Batata Baroa', price: 30 },
      { id: 'caldo-2', name: 'Aipim', price: 30 },
      { id: 'caldo-3', name: 'Canjiquinha', price: 30 },
      { id: 'caldo-4', name: 'Caldo Verde', price: 30 },
      { id: 'caldo-5', name: 'Abóbora com Carne Seca', price: 35 },
      { id: 'caldo-6', name: 'Bobó de Camarão', price: 35 },
    ],
  },
  {
    id: 'pizzas',
    name: 'Pizzas',
    items: [
      { id: 'pizza-1', name: 'Quatro Queijos', price: 55 },
      { id: 'pizza-2', name: 'Alho', price: 55 },
      { id: 'pizza-3', name: 'Calabresa', price: 55 },
      { id: 'pizza-4', name: 'Carne', price: 55 },
      { id: 'pizza-5', name: 'Frango com Camarão', price: 55 },
      { id: 'pizza-6', name: 'Marguerita', price: 55 },
      { id: 'pizza-7', name: 'Mista', price: 55 },
      { id: 'pizza-8', name: 'Mussarela', price: 55 },
      { id: 'pizza-9', name: 'Nutella', price: 55 },
      { id: 'pizza-10', name: 'Doce de Leite', price: 55 },
      { id: 'pizza-11', name: 'Pizza de Camarão', price: 60 },
    ],
  },
]
