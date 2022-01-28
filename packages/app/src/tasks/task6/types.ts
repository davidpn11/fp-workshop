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

export const promosArray: Promotion[] = [
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
    budget: {totalAmount: 50, consumedAmount: 0},
  },
  {
    id: 'promo2',
    type: 'FREE_ITEM',
    item: {
      name: 'Soda Pop',
      price: 1.5,
    },
  },

  {
    id: 'promo5',
    type: 'TOP_PLACEMENT',
  },
  {
    id: 'promo6',
    type: 'FREE_ITEM',
    item: {
      name: 'Fried Gyoza',
      price: 5.5,
    },
  },
];

export const deletedPromosArray: Promotion[] = [
  {
    id: 'promo1',
    type: 'TOP_PLACEMENT',
  },
  {
    id: 'promo2',
    type: 'FREE_ITEM',
    item: {
      name: 'Fries',
      price: 3.5,
    },
  },
];

export const date1 = new Date(2020, 5, 20);
export const date2 = new Date(2020, 5, 23);
export const date3 = new Date(2020, 6, 3);
export const date4 = new Date(2020, 6, 18);
export const date5 = new Date(2020, 6, 24);

export const ordersArray1: Order[] = [
  {customerId: '1', orderDate: date1, promotionId: 'promo1', totalPrice: 20.5},
  {customerId: '2', orderDate: date2, promotionId: 'promo2', totalPrice: 50.5},
];

export const ordersArray2: Order[] = [
  {customerId: '2', orderDate: date1, totalPrice: 30.5},
  {customerId: '1', orderDate: date3, promotionId: 'promo1', totalPrice: 20.5},
  {customerId: '2', orderDate: date2, promotionId: 'promo2', totalPrice: 50.5},
];

export const ordersArray3: Order[] = [
  {customerId: '1', orderDate: date1, totalPrice: 30.5},
  {customerId: '1', orderDate: date3, promotionId: 'promo1', totalPrice: 20.5},
  {customerId: '2', orderDate: date2, promotionId: 'promo2', totalPrice: 50.5},
  {customerId: '2', orderDate: date2, promotionId: 'promo2', totalPrice: 50.5},
  {customerId: '3', orderDate: date5, totalPrice: 40},
];

export const orderedRecordList: Order[] = [
  {customerId: '1', orderDate: date1, promotionId: 'promo1', totalPrice: 20.5},
  {customerId: '2', orderDate: date2, promotionId: 'promo2', totalPrice: 50.5},
  {customerId: '3', orderDate: date3, totalPrice: 44.7},
  {customerId: '4', orderDate: date4, totalPrice: 30.5},
  {customerId: '4', orderDate: date5, promotionId: 'promo2', totalPrice: 130.5},
];

export const ordersRecord = {
  id1: {
    customerId: '1',
    orderDate: date1,
    promotionId: 'promo1',
    totalPrice: 20.5,
  },
  id5: {
    customerId: '4',
    orderDate: date5,
    promotionId: 'promo2',
    totalPrice: 130.5,
  },
  id3: {
    customerId: '3',
    orderDate: date3,
    totalPrice: 44.7,
  },
  id2: {
    customerId: '2',
    orderDate: date2,
    promotionId: 'promo2',
    totalPrice: 50.5,
  },
  id4: {
    customerId: '4',
    orderDate: date4,
    totalPrice: 30.5,
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
