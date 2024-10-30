import pancakes from '../Images/pancakes.png'
import milk from '../Images/milk.png'
import sausage from '../Images/sausage.png'
import sausa from '../Images/sausa.png'
import cream from '../Images/cream.jpeg'
import maffins from '../Images/maffins.jpeg'
import brisket from '../Images/brisket.jpeg'
import towels from '../Images/towels.jpeg'

export const produce = [
    {
        id: 1,
        name: 'Колбаса Мясная История Сальчичон',
        price: '320 ₽',
        discountPrice: '210 ₽',
        img: sausage,
        rating: 4, 
      },
      {
        id: 2,
        name: 'Г/Ц Блинчики с мясом вес, Россия',
        price: '50,50 ₽',
        discountPrice: '44,50 ₽',
        img: pancakes,
        rating: 5, 
      },
      {
        id: 3,
        name: 'Молоко ПРОСТОКВАШИНО паст. питьевое 960 г',
        price: '120 ₽',
        discountPrice: '90 ₽',
        img: milk,
        rating: 4, 
      },
      {
        id: 4,
        name: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные',
        price: '210 ₽',
        discountPrice: '105 ₽',
        img: sausa,
        rating: 5
      },
      {
        id: 5,
        name: 'Сливки Станция Молочная стерилизованные 20% БЗМЖ 500мл',
        price: '210 ₽',
        discountPrice: '179 ₽',
        img: cream,
        rating: 4, 
      },
      {
        id: 6,
        name: 'Мини-маффины Шарлиз с вареной сгущенкой 433г',
        price: '230 ₽',
        discountPrice: '164 ₽',
        img: maffins,
        rating: 5, 
      },
      {
        id: 7,
        name: 'Масло подсолнечное',
        price: '159 ₽',
        discountPrice: '104 ₽',
        img: brisket,
        rating: 5, 
      },
      {
        id: 8,
        name: 'Полотенца бумажные Tolli Plus 2 слоя 2шт.',
        price: '120 ₽',
        discountPrice: '79 ₽',
        img: towels,
        rating: 4, 
      },
]

export default produce