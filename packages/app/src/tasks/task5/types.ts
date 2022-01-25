export type Budget = {
  totalAmount: number;
  consumedAmount: number;
};

export type Item = {
  name: string;
  price: number;
};

export type PromotionType = 'TOP_PLACEMENT' | 'FREE_ITEM';
export type PromotionTP = {
  id: string;
  type: 'TOP_PLACEMENT';
  budget?: Budget;
};

export type PromotionFI = {
  id: string;
  type: 'FREE_ITEM';
  item: Item;
  budget?: Budget;
};

export type EligibilityValue = {
  isEligible: boolean;
  reasons: string[];
};

export type Eligibility = {
  TOP_PLACEMENT: EligibilityValue;
  FREE_ITEM: EligibilityValue;
};

export type Promotion = PromotionTP | PromotionFI;

export type MenuItem = {
  id: string;
  name: string;
  price: number;
};

export type Order = {
  customerId: string;
  orderDate: Date;
  promotionId?: string;
  totalPrice: number;
};

export type Earnings = {
  orderNumber: number;
  totalEarnings: number;
};

export type Restaurant = {
  name: string;
  address: string;
  promotions: Promotion[];
  orderHistory: Record<string, Order>;
  earnings: Earnings;
  eligibility: Eligibility;
};

export const menuItems1: MenuItem[] = [
  {
    id: '1',
    name: 'Soda Pop',
    price: 1.5,
  },
  {
    id: '2',
    name: 'Fish Taco',
    price: 4.9,
  },
  {
    id: '3',
    name: 'Poutine',
    price: 8.2,
  },
  {
    id: '4',
    name: 'Bacon Burger',
    price: 10.5,
  },
  {
    id: '5',
    name: 'Peperonni Pizza',
    price: 18.2,
  },
];

export const menuItems2: MenuItem[] = [
  {
    id: '1',
    name: 'Fried Gyoza',
    price: 6.5,
  },
  {
    id: '2',
    name: 'Poutine',
    price: 8.2,
  },
  {
    id: '3',
    name: 'Chicken Fingers',
    price: 7,
  },
  {
    id: '5',
    name: 'Ice cream',
    price: 5.5,
  },
  {
    id: '6',
    name: 'Large Fries',
    price: 3.5,
  },
];

export const date1 = new Date(2020, 5, 20);
export const date2 = new Date(2020, 5, 23);
export const date3 = new Date(2020, 6, 3);
export const date4 = new Date(2020, 6, 18);
export const date5 = new Date(2020, 6, 24);

const orders1 = {
  id1: {
    customerId: '1',
    orderDate: date1,
    promotionId: 'promo1',
    totalPrice: 20.5,
  },
  id2: {
    customerId: '2',
    orderDate: date2,
    promotionId: 'promo2',
    totalPrice: 50.5,
  },
  id3: {
    customerId: '3',
    orderDate: date3,
    totalPrice: 44.7,
  },
  id4: {
    customerId: '4',
    orderDate: date4,
    totalPrice: 30.5,
  },
  id5: {
    customerId: '4',
    orderDate: date5,
    promotionId: 'promo2',
    totalPrice: 130.5,
  },
};

const orders2 = {
  id7: {
    customerId: '10',
    orderDate: date1,
    promotionId: 'promo2',
    totalPrice: 100.5,
  },
  id8: {
    customerId: '13',
    orderDate: date2,
    promotionId: 'promo2',
    totalPrice: 120.5,
  },
  id9: {
    customerId: '8',
    orderDate: date3,
    totalPrice: 44.7,
  },
  id10: {
    customerId: '9',
    orderDate: date4,
    totalPrice: 30.5,
  },
};

export const resto1: Restaurant = {
  name: 'Anghethi',
  address: '222 Stonebridge Dr',
  promotions: [
    {
      id: 'promo1',
      type: 'TOP_PLACEMENT',
      budget: {totalAmount: 100, consumedAmount: 25},
    },
    {
      id: 'promo2',
      type: 'FREE_ITEM',
      item: {
        name: 'Fries',
        price: 3.5,
      },
    },
  ],
  orderHistory: orders1,
  earnings: {
    orderNumber: 5,
    totalEarnings: 276.7,
  },
  eligibility: {
    TOP_PLACEMENT: {
      isEligible: true,
      reasons: [],
    },
    FREE_ITEM: {
      isEligible: true,
      reasons: [],
    },
  },
};

export const resto2: Restaurant = {
  name: 'Edo Japan',
  address: '170 St NW',
  promotions: [
    {
      id: 'promo1',
      type: 'FREE_ITEM',
      item: {
        name: 'Fries',
        price: 3.5,
      },
    },
  ],
  orderHistory: orders2,
  earnings: {
    orderNumber: 4,
    totalEarnings: 306.2,
  },
  eligibility: {
    TOP_PLACEMENT: {
      isEligible: false,
      reasons: ['COMPETITION'],
    },
    FREE_ITEM: {
      isEligible: true,
      reasons: [],
    },
  },
};

export const resto3: Restaurant = {
  name: 'Thien Vietnm',
  address: '3rd Av N',
  promotions: [],
  orderHistory: orders2,
  earnings: {
    orderNumber: 4,
    totalEarnings: 306.2,
  },
  eligibility: {
    TOP_PLACEMENT: {
      isEligible: true,
      reasons: [''],
    },
    FREE_ITEM: {
      isEligible: true,
      reasons: [],
    },
  },
};

export const resto4: Restaurant = {
  name: 'Blufish',
  address: 'Bannatyne Ave ',
  promotions: [],
  orderHistory: orders1,
  earnings: {
    orderNumber: 5,
    totalEarnings: 376.7,
  },
  eligibility: {
    TOP_PLACEMENT: {
      isEligible: false,
      reasons: ['COMPETITION'],
    },
    FREE_ITEM: {
      isEligible: false,
      reasons: ['CITY_NOT_ELIGIBLE'],
    },
  },
};

export const resto5: Restaurant = {
  name: "Trifon's Pizza",
  address: 'Broad St',
  promotions: [
    {
      id: 'promo1',
      type: 'FREE_ITEM',
      item: {
        name: 'Fries',
        price: 3.5,
      },
    },
    {
      id: 'promo2',
      type: 'TOP_PLACEMENT',
      budget: {totalAmount: 200, consumedAmount: 0},
    },
  ],
  orderHistory: {...orders1, ...orders2},
  earnings: {
    orderNumber: 9,
    totalEarnings: 682.9,
  },
  eligibility: {
    TOP_PLACEMENT: {
      isEligible: false,
      reasons: ['COMPETITION'],
    },
    FREE_ITEM: {
      isEligible: true,
      reasons: [],
    },
  },
};
