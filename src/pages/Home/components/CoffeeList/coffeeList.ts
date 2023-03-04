import expresso from '../../../../assets/coffees/expresso.svg'
import americano from '../../../../assets/coffees/americano.svg'
import expressoCremoso from '../../../../assets/coffees/expresso-cremoso.svg'
import cafeGelado from '../../../../assets/coffees/cafe-gelado.svg'
import cafeComLeite from '../../../../assets/coffees/cafe-com-leite.svg'
import latte from '../../../../assets/coffees/latte.svg'
import capuccino from '../../../../assets/coffees/capuccino.svg'
import macchiato from '../../../../assets/coffees/macchiato.svg'
import mochaccino from '../../../../assets/coffees/mochaccino.svg'
import chocolateQuente from '../../../../assets/coffees/chocolate-quente.svg'
import cubano from '../../../../assets/coffees/cubano.svg'
import havaiano from '../../../../assets/coffees/havaiano.svg'
import arabe from '../../../../assets/coffees/arabe.svg'
import irlandes from '../../../../assets/coffees/irlandes.svg'

export const coffeeList = [
  {
    id: 1,
    image: expresso,
    tags: ['TRADICIONAL'],
    title: 'Expresso Tradicional',
    subtitle: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
  },
  {
    id: 2,
    image: americano,
    tags: ['TRADICIONAL'],
    title: 'Expresso Americano',
    subtitle: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
  },
  {
    id: 3,
    image: expressoCremoso,
    tags: ['TRADICIONAL'],
    title: 'Expresso Cremoso',
    subtitle: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
  },
  {
    id: 4,
    image: cafeGelado,
    tags: ['TRADICIONAL', 'GELADO'],
    title: 'Expresso Gelado',
    subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
  },
  {
    id: 5,
    image: cafeComLeite,
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Café com Leite',
    subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
  },
  {
    id: 6,
    image: latte,
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Latte',
    subtitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
  },
  {
    id: 7,
    image: capuccino,
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Capuccino',
    subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
  },
  {
    id: 8,
    image: macchiato,
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Macchiato',
    subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
  },
  {
    id: 9,
    image: mochaccino,
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Mocaccino',
    subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
  },
  {
    id: 10,
    image: chocolateQuente,
    tags: ['ESPECIAL', 'COM LEITE'],
    title: 'Chocolate Quente',
    subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
  },
  {
    id: 11,
    image: cubano,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    title: 'Cubano',
    subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
  },
  {
    id: 12,
    image: havaiano,
    tags: ['ESPECIAL'],
    title: 'Havaiano',
    subtitle: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
  },
  {
    id: 13,
    image: arabe,
    tags: ['ESPECIAL'],
    title: 'Árabe',
    subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
  },
  {
    id: 14,
    image: irlandes,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    title: 'Irlandês',
    subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
  },
]
