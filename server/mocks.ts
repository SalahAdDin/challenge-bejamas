import { Product } from '@domain/products.dto';

const products: Product[] = [
  {
    id: 0,
    name: 'Red Bench',
    category: 'people',
    price: 3.89,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/9507099/pexels-photo-9507099.jpeg',
      alt: 'Inhouse red bench.',
    },
    bestseller: true,
    featured: false,
  },
  {
    id: 0,
    name: 'Egg Balloon',
    category: 'food',
    price: 93.89,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/9642398/pexels-photo-9642398.jpeg',
      alt: 'Delicious egg balloon.',
    },
    bestseller: false,
    featured: false,
  },
  {
    id: 0,
    name: 'Man in Boat',
    category: 'people',
    price: 100,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/1223649/pexels-photo-1223649.jpeg',
      alt: 'Man in boat.',
    },
    bestseller: false,
    featured: false,
  },
  {
    id: 0,
    name: 'Burj Khalifa',
    category: 'landmarks',
    price: 101,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg',
      alt: 'Burj Khalifa in Dubai',
    },
    bestseller: false,
    featured: false,
  },
  {
    id: 0,
    name: 'Hagia Sophia Mosque',
    category: 'landmarks',
    price: 101,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/10993607/pexels-photo-10993607.jpeg',
      alt: "Hagia Sophia Mosque's landscape.",
    },
    bestseller: false,
    featured: true,
    details: {
      dimensions: {
        width: 6000,
        height: 3376,
      },
      size: 14141,
      description:
        'So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely',
      recommendations: [
        {
          src: 'https://images.pexels.com/photos/4946589/pexels-photo-4946589.jpeg',
          alt: 'A good and health meeting with friends.',
        },
        {
          src: 'https://images.pexels.com/photos/1034940/pexels-photo-1034940.jpeg',
          alt: 'Light meal for the lunch.',
        },
        {
          src: 'https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg',
          alt: 'Couple enjoying their vacations by a waterfall.',
        },
      ],
    },
  },
  {
    id: 0,
    name: 'Blooming Spring',
    category: 'seasons',
    price: 94.601,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/11513276/pexels-photo-11513276.jpeg',
      alt: 'Flowers blooming in spring.',
    },
    bestseller: true,
    featured: false,
  },
  {
    id: 0,
    name: 'Happy Eid Al-Fitr',
    category: 'holidays',
    price: 36.88,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/1071968/pexels-photo-1071968.jpeg',
      alt: 'Friends visiting each other to say wish Happy Eid.',
    },
    bestseller: false,
    featured: false,
  },
  {
    id: 0,
    name: 'Green Detox',
    category: 'health',
    price: 16.52,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg',
      alt: 'Green Detox drink.',
    },
    bestseller: false,
    featured: false,
  },
  {
    id: 0,
    name: 'Fruits from the Mid',
    category: 'health',
    price: 42.55,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/1845287/pexels-photo-1845287.jpeg',
      alt: 'Delights from Mediterranean region.',
    },
    bestseller: true,
    featured: false,
  },
  {
    id: 0,
    name: 'Cathedral Interior View',
    category: 'cathedral',
    price: 13.98,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/705778/pexels-photo-705778.jpeg',
      alt: 'Sub Tuum Mariam',
    },
    bestseller: false,
    featured: false,
  },
  {
    id: 0,
    name: 'Healthy dinner',
    category: 'health',
    price: 51.55,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/4946589/pexels-photo-4946589.jpeg',
      alt: 'A good and health meeting with friends.',
    },
    bestseller: true,
    featured: false,
  },
  {
    id: 0,
    name: 'Happy Iftar',
    category: 'friends',
    price: 57.79,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/8995836/pexels-photo-8995836.jpeg',
      alt: 'Happy iftar with friends.',
    },
    bestseller: false,
    featured: false,
  },
  {
    id: 0,
    name: 'Remote Job Delights',
    category: 'lifestyle',
    price: 56.49,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg',
      alt: 'Working from home enables you to decide where you want to work.',
    },
    bestseller: false,
    featured: false,
  },
  {
    id: 0,
    name: 'Light meal',
    category: 'lifestyle',
    price: 50.25,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/1034940/pexels-photo-1034940.jpeg',
      alt: 'Light meal for the lunch.',
    },
    bestseller: true,
    featured: false,
  },
  {
    id: 0,
    name: 'Green waterfalls',
    category: 'landmarks',
    currency: 'USD',
    price: 37.122,
    image: {
      src: 'https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg',
      alt: 'Couple enjoying their vacations by a waterfall.',
    },
    bestseller: true,
    featured: false,
  },
  {
    id: 0,
    name: 'Majestic Rhino',
    category: 'animals',
    currency: 'USD',
    price: 44.86,
    image: {
      src: 'https://images.pexels.com/photos/9533158/pexels-photo-9533158.jpeg',
      alt: 'Javan rhinoceros in danger of extinction.',
    },
    bestseller: true,
    featured: true,
    details: {
      dimensions: {
        width: 3064,
        height: 3830,
      },
      size: 10926,
      description:
        'Two species of rhinos in Asia - the Javan and the Sumatran - are critically endangered. A subspecies of the Javan rhino was declared extinct in Vietnam in 2011. However, a small population of the Javan rhino still clings to survival on the Indonesian island of Java.',
      recommendations: [
        {
          src: 'https://images.pexels.com/photos/9507099/pexels-photo-9507099.jpeg',
          alt: 'Inhouse red bench.',
        },
        {
          src: 'https://images.pexels.com/photos/11513276/pexels-photo-11513276.jpeg',
          alt: 'Flowers blooming in spring.',
        },
        {
          src: 'https://images.pexels.com/photos/1845287/pexels-photo-1845287.jpeg',
          alt: 'Delights from Mediterranean region.',
        },
      ],
    },
  },
];

export default products;
