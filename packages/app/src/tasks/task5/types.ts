type Budget = {
  totalAmount: number;
  consumedAmount: number;
};

type Item = {
  name: string;
  price: number;
};

type PromotionTP = {
  id: string;
  type: 'TOP_PLACEMENT';
  budget?: Budget;
};

type PromotionFI = {
  id: string;
  type: 'FREE_ITEM';
  item: Item;
  budget?: Budget;
};

type EligibilityValue = {
  isEligible: boolean;
  reasons: string[];
};

type Eligibility = {
  TOP_PLACEMENT: EligibilityValue;
  FREE_ITEM: EligibilityValue;
};

type Promotion = PromotionTP | PromotionFI;

export type MenuItem = {
  id: string;
  name: string;
  price: number;
};

type Order = {
  id: string;
  customerId: string;
  orderDate: Date;
  promotionId?: string;
  items: MenuItem[];
  totalPrice: number;
};

type Earnings = {
  orderNumber: number;
  totalEarnings: number;
};

type Restaurant = {
  name: string;
  address: string;
  promotions: Promotion[];
  orderHistory: Order[];
  earnings: Record<number, Earnings>;
  eligibility?: Eligibility;
};

const restaurant: Restaurant = {
  name: 'Anghethi',
  address: '222 Stonebridge Dr',
  promotions: [
    {
      id: 'promo1',
      type: 'TOP_PLACEMENT',
      budget: {totalAmount: 100, consumedAmount: 25},
    },
  ],
  orderHistory: [],
  earnings: {
    1: {
      orderNumber: 2,
      totalEarnings: 30,
    },
    2: {
      orderNumber: 2,
      totalEarnings: 30,
    },
    3: {
      orderNumber: 2,
      totalEarnings: 30,
    },
    6: {
      orderNumber: 2,
      totalEarnings: 30,
    },
  },
  eligibility: undefined,
};
