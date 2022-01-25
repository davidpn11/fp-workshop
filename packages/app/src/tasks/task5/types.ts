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
  id: string;
  customerId: string;
  orderDate: Date;
  promotionId?: string;
  items: MenuItem[];
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
  orderHistory: Order[];
  earnings: Record<number, Earnings>;
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
      id: 'promo1',
      type: 'FREE_ITEM',
      item: {
        name: 'Fries',
        price: 3.5,
      },
    },
  ],
  orderHistory: [],
  earnings: {
    // 1: {
    //   orderNumber: 2,
    //   totalEarnings: 30,
    // },
    // 2: {
    //   orderNumber: 2,
    //   totalEarnings: 30,
    // },
    // 3: {
    //   orderNumber: 2,
    //   totalEarnings: 30,
    // },
    // 6: {
    //   orderNumber: 2,
    //   totalEarnings: 30,
    // },
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
  orderHistory: [],
  earnings: {},
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
  orderHistory: [],
  earnings: {},
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
  orderHistory: [],
  earnings: {},
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
      id: 'promo1',
      type: 'TOP_PLACEMENT',
      budget: {totalAmount: 200, consumedAmount: 0},
    },
  ],
  orderHistory: [],
  earnings: {},
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
