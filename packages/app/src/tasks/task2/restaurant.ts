import {flow, pipe} from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import {challenge2b} from '../task1/challenge';

type Budget = {
  totalAmount: number;
  consumedAmount: number;
};
type Promotion = {
  type: 'TOP_PLACEMENT' | 'FREE_ITEM';
  budget?: Budget;
};

type Restaurant = {
  name: string;
  address: string;
  promotion?: Promotion;
};

export const resto1 = {
  name: 'Anghethi',
  address: '222 Stonebridge Dr',
} as Restaurant | undefined;

export const resto2 = {
  name: 'Blufish',
  address: '111 Main St',
  promotion: {
    type: 'TOP_PLACEMENT',
    budget: {
      totalAmount: 100,
      consumedAmount: 10,
    },
  },
} as Restaurant | undefined;

export const resto3 = {
  name: 'Thien Vietnan',
  address: '3rd Av N',
  promotion: {
    type: 'FREE_ITEM',
  },
} as Restaurant | undefined;

/**
 * Create a function that gets a Restaurant checks if has a Promotion with a budget, returning that budget as an Option<Budget>.
 */
export let challenge1a: (r?: Restaurant) => O.Option<Budget>;

/**
 * Create a function that gets a `Restaurant` checks if has a Promotion with a budget. If yes, returns the `totalAmount` value, Else, returns 0.
 */
export let challenge1b: (r?: Restaurant) => number;

/** Create a function that gets a Restaurant checks if has a Promotion with a budget. If it has return, "You have a PROMOTION_TYPE with $BUDGET_REMAINING remaining". If not, return “Click here to sign in"
 */
export let challenge1c: (r?: Restaurant) => string;
