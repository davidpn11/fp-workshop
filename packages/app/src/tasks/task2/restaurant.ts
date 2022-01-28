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

/**
 * Solutions
 */

challenge1a = resto => {
  return pipe(
    resto,
    O.fromNullable,
    O.map(r =>
      pipe(
        r.promotion,
        O.fromNullable,
        O.map(p => p.budget as Budget),
        O.fromNullable,
        O.flatten,
      ),
    ),
    O.flatten,
  );
};

challenge1b = resto => {
  return pipe(
    resto,
    challenge1a,
    O.map(b => b.totalAmount),
    O.getOrElse(() => 0),
  );
};

challenge1c = resto => {
  const promoO = pipe(
    resto,
    O.fromNullable,
    O.map(({promotion}) => pipe(promotion, O.fromNullable)),
    O.flatten,
  );

  const promoType = pipe(
    promoO,
    O.map(p => p.type),
    O.getOrElse(() => ''),
  );
  return pipe(
    promoO,
    O.map(p => p.budget as Budget),
    O.fold(
      () => 'Click here to sign in',
      b =>
        `You have a ${promoType} with $${
          b.totalAmount - b.consumedAmount
        } remaining`,
    ),
  );
};
