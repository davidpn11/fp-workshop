import {flow, identity, pipe} from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import * as R from 'fp-ts/lib/Record';
import * as A from 'fp-ts/lib/Array';
import * as E from 'fp-ts/lib/Either';
import {MenuItem, PromotionType, Restaurant} from './types';

export let challenge1a: (
  menuItem: MenuItem[],
  minimumPrice: number,
) => MenuItem[];

export let challenge1b: (
  menuItem: MenuItem[],
  itemName: string,
) => O.Option<string>;

export let challenge1c: (restaurants: Restaurant[]) => string[];

export let challenge1d: (restaurants: Restaurant[]) => {
  restoNames: string[];
  totalBudget: number;
};

export let challenge1e: (
  restaurant: Restaurant,
) => E.Either<string[], PromotionType[]>;

/**
 * Solutions
 */

challenge1a = (items, minimumPrice) => {
  return pipe(
    items,
    A.filter(i => i.price > minimumPrice),
    A.reverse,
  );
};

//Challenge 1a other implementation
challenge1a = (items, minimumPrice) => {
  return pipe(
    items,
    A.reverse,
    A.takeLeftWhile(i => i.price > minimumPrice),
  );
};

challenge1b = (items, name) => {
  return pipe(
    items,
    A.findFirst(i => i.name === name),
    O.map(a => a.id),
  );
};

challenge1c = restos =>
  pipe(
    restos,
    A.filter(r =>
      pipe(
        r.promotions,
        A.findFirst(a => a.type === 'FREE_ITEM'),
        O.isSome,
      ),
    ),
    A.map(({name}) => name),
  );

challenge1d = restos =>
  pipe(
    restos,
    A.filter(r =>
      pipe(
        r.promotions,
        A.findFirst(a => a.type === 'TOP_PLACEMENT'),
        O.isSome,
      ),
    ),
    A.reduce({restoNames: [] as string[], totalBudget: 0}, (acc, curr) => ({
      restoNames: [...acc.restoNames, curr.name],
      totalBudget:
        acc.totalBudget +
        pipe(
          curr.promotions,
          A.findFirst(a => a.type === 'TOP_PLACEMENT'),
          O.fold(
            () => 0,
            p => (p.budget ? p.budget.totalAmount : 0),
          ),
        ),
    })),
  );

challenge1e = resto => {
  const hasPromoType = (type: PromotionType) =>
    pipe(
      resto.promotions,
      A.findFirst(r => r.type === type),
      O.isSome,
    );

  const eligibility = pipe(
    resto.eligibility,
    R.filterMapWithIndex((k, el) =>
      !el.isEligible || hasPromoType(k) ? O.some(el.reasons) : O.none,
    ),
  );

  if (
    pipe(
      eligibility,
      R.every(el => A.isEmpty(el)),
    )
  ) {
    const promoTypes: PromotionType[] = ['TOP_PLACEMENT', 'FREE_ITEM'];
    return E.right(promoTypes);
  }

  return pipe(
    eligibility,
    R.collect((k, val) => val),
    A.flatten,
    E.left,
  );
};
