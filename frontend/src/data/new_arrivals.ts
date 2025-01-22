import marisaBlack from '@assets/images/hp/marisaBlack.jpg';
import donnaBagSilver from '@assets/images/hp/donnaBagSilver.jpg';
import rosaliaCowBooties from '@assets/images/hp/rosaliaCowBooties.jpg';
import miaBooties from '@assets/images/hp/miaBooties.jpg';
import ericaBooties from '@assets/images/hp/ericaBooties.jpg';
import donnaBagBrown from '@assets/images/hp/donnaBagBrown.jpg';
import bagsRed from '@assets/images/hp/bagsRed.jpg';
import shoesCabare from '@assets/images/hp/shoesCabare.jpg';

import rebeccaBaguette from '@assets/images/hp/rebeccaBaguette.jpg';
import rebeccaBaguetteHairy from '@assets/images/hp/rebeccaBaguetteHairy.jpg';
import rebeccaBaguetteHairyBlack from '@assets/images/hp/rebeccaBaguetteHairyBlack.jpg';
import pranzoHairy from '@assets/images/hp/pranzoHairy.jpg';
import rBagShopper from '@assets/images/hp/rBagShopper.jpg';

import newSeasonHP1 from '@assets/images/hp/hp_new-season_1.jpg';
import newSeasonHP2 from '@assets/images/hp/hp_new-season_2.jpg';
import newSeasonHP3 from '@assets/images/hp/hp_new-season_3.jpg';
import newSeasonHP4 from '@assets/images/hp/hp_new-season_4.jpg';
import newSeasonHP5 from '@assets/images/hp/hp_new-season_5.jpg';
import newSeasonHP6 from '@assets/images/hp/hp_new-season_6.jpg';

import fashionMediaHP1 from '@assets/images/hp/media_1.webp';
import fashionMediaHP2 from '@assets/images/hp/media_2.webp';
import fashionMediaHP3 from '@assets/images/hp/media_3.webp';
import fashionMediaHP4 from '@assets/images/hp/media_4.webp';
import fashionMediaHP5 from '@assets/images/hp/media_5.webp';

export const newArrivals = [
  {
    id: 'newIn',
    title: 'New arrivals',
    urlTitle: 'More',
    url: '/new-arrivals',
    products: [
      {
        id: 'marisaBlack',
        name: 'MARISA black pumps',
        url: '/marisa-black',
        price: {
          base_price: '9,200',
          currency: 'USD',
        },
        sizes: [
          {
            id: '0',
            name: '36',
            hasSize: true,
          },
          {
            id: '1',
            name: '37',
            hasSize: true,
          },
          {
            id: '2',
            name: '38',
            hasSize: true,
          },
          {
            id: '3',
            name: '39',
            hasSize: true,
          },
          {
            id: '4',
            name: '40',
            hasSize: true,
          },
          {
            id: '5',
            name: '41',
            hasSize: true,
          },
        ],
        image: marisaBlack,
      },
      {
        id: 'donnaBagSilver',
        name: 'DONNA brown bag /silver/',
        url: '/donna-bag',
        urlTitle: 'more',
        price: {
          base_price: '12,500',
          currency: 'USD',
        },
        image: donnaBagSilver,
      },
      {
        id: 'rosaliaCowBooties',
        name: 'ROSALIA light brown tube cowbooties',
        url: '/rosalia-cowBooties',
        price: {
          base_price: '16,500',
          currency: 'USD',
        },
        sizes: [
          {
            id: '0',
            name: '36',
            hasSize: true,
          },
          {
            id: '1',
            name: '37',
            hasSize: true,
          },
          {
            id: '2',
            name: '38',
            hasSize: true,
          },
          {
            id: '3',
            name: '39',
            hasSize: true,
          },
          {
            id: '4',
            name: '40',
            hasSize: true,
          },
          {
            id: '5',
            name: '41',
            hasSize: false,
          },
        ],
        image: rosaliaCowBooties,
      },
      {
        id: 'miaBooties',
        name: 'MIA black ankle boots',
        url: '/mia-booties',
        price: {
          base_price: '8,900',
          currency: 'USD',
        },
        sizes: [
          {
            id: '0',
            name: '36',
            hasSize: true,
          },
          {
            id: '1',
            name: '37',
            hasSize: true,
          },
          {
            id: '2',
            name: '38',
            hasSize: true,
          },
          {
            id: '3',
            name: '39',
            hasSize: true,
          },
          {
            id: '4',
            name: '40',
            hasSize: true,
          },
          {
            id: '5',
            name: '41',
            hasSize: false,
          },
        ],
        image: miaBooties,
      },
      {
        id: 'ericaBooties',
        name: 'ERICA bordeaux boots',
        url: '/erica-booties',
        price: {
          base_price: '16,500',
          currency: 'USD',
        },
        sizes: [
          {
            id: '0',
            name: '36',
            hasSize: true,
          },
          {
            id: '1',
            name: '37',
            hasSize: true,
          },
          {
            id: '2',
            name: '38',
            hasSize: true,
          },
          {
            id: '3',
            name: '39',
            hasSize: true,
          },
          {
            id: '4',
            name: '40',
            hasSize: true,
          },
          {
            id: '5',
            name: '41',
            hasSize: false,
          },
        ],
        image: ericaBooties,
      },
      {
        id: 'donnaBagBrown',
        name: 'DONNA brown bag /silver/',
        url: '/donna-bag',
        urlTitle: 'more',
        price: {
          base_price: '12,500',
          currency: 'USD',
        },
        image: donnaBagBrown,
      },
    ],
  },
];

export const quadroCategoryHP = [
  {
    id: 'shoes',
    title: 'Shoes',
    url: '/shoes',
    image: shoesCabare,
  },
  {
    id: 'bags',
    title: 'Bags',
    url: '/bags',
    image: bagsRed,
  },
];

export const saleCategoryHP = [
  {
    id: 'saleCatHp',
    title: 'Sale',
    urlTitle: 'More',
    url: '/sale',
    products: [
      {
        id: 'rebeccaBaguette',
        name: 'REBECCA BAGUETTE hairy black bag',
        url: '/rebecca-baguette',
        urlTitle: 'more',
        image: rebeccaBaguette,
        prices: {
          base_price: '7,800',
          currency: 'USD',
          discounted_price: '5,400',
          discount_percentage: '30.77',
        },
      },
      {
        id: 'rebeccaBaguetteHairy',
        name: 'REBECCA GRANDE hairy bordeaux bag',
        url: '/rebecca-baguette-hairy',
        urlTitle: 'more',
        image: rebeccaBaguetteHairy,
        prices: {
          base_price: '12,500',
          currency: 'USD',
          discounted_price: '8,750',
          discount_percentage: '30.00',
        },
      },
      {
        id: 'rebeccaBaguetteHairyBlack',
        name: 'REBECCA GRANDE hairy black bag',
        url: '/rebecca-baguette-hairy-black',
        urlTitle: 'more',
        image: rebeccaBaguetteHairyBlack,
        prices: {
          base_price: '8,500',
          currency: 'USD',
          discounted_price: '5,950',
          discount_percentage: '30.00',
        },
      },
      {
        id: 'pranzoHairy',
        name: 'PRANZO HAIRY red & white bag   ',
        url: '/pranzo-hairy',
        urlTitle: 'more',
        image: pranzoHairy,
        prices: {
          base_price: '12,500',
          currency: 'USD',
          discounted_price: '8,750',
          discount_percentage: '30.00',
        },
      },
      {
        id: 'rBagShopper',
        name: 'R-BAG bordeaux shopper bag /silver/',
        url: '/r-bag-shopper',
        urlTitle: 'more',
        image: rBagShopper,
        prices: {
          base_price: '12,500',
          currency: 'USD',
          discounted_price: '8,750',
          discount_percentage: '30.00',
        },
      },
    ],
  },
];

export const newSeasonHP = [
  {
    title: "NEW season FW'25",
    url: '/new-season',
    images: [
      {
        id: '0',
        image: newSeasonHP1,
        title: 'new season FW',
      },
      {
        id: '1',
        image: newSeasonHP2,
        title: 'new season FW',
      },
      {
        id: '2',
        image: newSeasonHP3,
        title: 'new season FW',
      },
      {
        id: '3',
        image: newSeasonHP4,
        title: 'new season FW',
      },
      {
        id: '4',
        image: newSeasonHP5,
        title: 'new season FW',
      },
      {
        id: '5',
        image: newSeasonHP6,
        title: 'new season FW',
      },
    ],
  },
];

export const fashionMediaHP = [
  {
    id: 'media_1',
    url: 'www.vogue.com',
    image: fashionMediaHP1,
    title: 'Vogue magazine writes about us',
  },
  {
    id: 'media_2',
    url: 'www.ft.com',
    image: fashionMediaHP2,
    title: 'FN magazine writes about us',
  },
  {
    id: 'media_3',
    url: 'edition.cnn.com',
    image: fashionMediaHP3,
    title: 'CNNmagazine writes about us',
  },
  {
    id: 'media_4',
    url: 'www.nytimes.com',
    image: fashionMediaHP4,
    title: 'The New York Times magazine writes about us',
  },
  {
    id: 'media_5',
    url: 'www.elle.dk',
    image: fashionMediaHP5,
    title: 'Ellemagazine writes about us',
  },
];
