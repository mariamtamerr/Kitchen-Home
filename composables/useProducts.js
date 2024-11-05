// composables/useProducts.js

export const useProducts = () => useState('products', () => [
  {
    id: 1,
    title: 'kitchens.classic.cards[0].title',
    snippet: 'kitchens.classic.cards[0].snippet',
    image: 'classic_kitchen_1.jpg',
    snippet2: [
      'kitchens.classic.cards[0].snippet2[0]',
      'kitchens.classic.cards[0].snippet2[1]',
      'kitchens.classic.cards[0].snippet2[2]'
    ], // Ensure this is an array
  },
  {
    id: 2,
    title: 'kitchens.classic.cards[1].title',
    snippet: 'kitchens.classic.cards[1].snippet',
    image: 'classic_kitchen_2.jpg',
    snippet2: [
      'kitchens.classic.cards[1].snippet2[0]',
      'kitchens.classic.cards[1].snippet2[1]',
      'kitchens.classic.cards[1].snippet2[2]'
    ], // Ensure this 
  },
  {
    id: 3,
    title: 'kitchens.classic.cards[2].title',
    snippet: 'kitchens.classic.cards[2].snippet',
    image: 'classic_kitchen_3.jpeg',
    snippet2:[ 'kitchens.classic.cards[2].snippet2[0]',
    'kitchens.classic.cards[2].snippet2[1]',
    'kitchens.classic.cards[2].snippet2[2]',]
  },
  {
    id: 4,
    title: 'kitchens.modern.cards[0].title',
    snippet: 'kitchens.modern.cards[0].snippet',
    image: 'modern_kitchen_1.jpeg',
    snippet2: ['kitchens.modern.cards[0].snippet2[0]',
    'kitchens.modern.cards[0].snippet2[1]',
    'kitchens.modern.cards[0].snippet2[2]',]
  },
  {
    id: 5,
    title: 'kitchens.modern.cards[1].title',
    snippet: 'kitchens.modern.cards[1].snippet',
    image: 'modern_kitchen_2.jpg',
    snippet2: ['kitchens.modern.cards[1].snippet2[0]',
     'kitchens.modern.cards[1].snippet2[1]',
     'kitchens.modern.cards[1].snippet2[2]',]
  },
  {
    id: 6,
    title: 'kitchens.modern.cards[2].title',
    snippet: 'kitchens.modern.cards[2].snippet',
    image: 'modern_kitchen_3.jpg',
    snippet2: ['kitchens.modern.cards[2].snippet2[0]',
   'kitchens.modern.cards[2].snippet2[1]',
   'kitchens.modern.cards[2].snippet2[2]',]
  },
  {
    id: 7,
    title: 'kitchens.contemporary.cards[0].title',
    snippet: 'kitchens.contemporary.cards[0].snippet',
    image: 'contemporary_kitchen_1.avif',
    snippet2: ['kitchens.contemporary.cards[0].snippet2[0]',
   'kitchens.contemporary.cards[0].snippet2[1]',
   'kitchens.contemporary.cards[0].snippet2[2]',]
  },
  {
    id: 8,
    title: 'kitchens.contemporary.cards[1].title',
    snippet: 'kitchens.contemporary.cards[1].snippet',
    image: 'contemporary_kitchen_2.jpg',
    snippet2: ['kitchens.contemporary.cards[1].snippet2[0]',
    'kitchens.contemporary.cards[1].snippet2[1]',
    'kitchens.contemporary.cards[1].snippet2[2]',]
  },
  {
    id: 9,
    title: 'kitchens.contemporary.cards[2].title',
    snippet: 'kitchens.contemporary.cards[2].snippet',
    image: 'contemporary_kitchen_3.webp',
    snippet2: ['kitchens.contemporary.cards[2].snippet2[0]',
   'kitchens.contemporary.cards[2].snippet2[1]',
   'kitchens.contemporary.cards[2].snippet2[2]',]
  },
]);

export const useReservations = () => useState('reservations', () => []);
