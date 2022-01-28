import {isSameDay} from 'date-fns';
import {string} from 'fp-ts';
import * as A from 'fp-ts/lib/Array';
import * as E from 'fp-ts/lib/Either';
import {pipe} from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import * as R from 'fp-ts/lib/Record';
import {MenuItem, Order, PromotionType, Restaurant} from './types';

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

export let challenge2a: (restaurant: Restaurant, date: Date) => Order[];

export let challenge2b: (
  restaurant: Restaurant,
  minimumPrice: number,
) => string[];

export let challenge2c: (restaurant: Restaurant) => Record<string, Order>;

export let challenge2d: (restaurant: Restaurant) => boolean;

export let challenge2e: (
  restaurant: Restaurant,
  orderIds: string[],
) => E.Either<string, number>;

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

challenge2a = (resto, date) => {
  return pipe(
    resto.orderHistory,
    R.filter(o => isSameDay(o.orderDate, date)),
    R.collect((k, v) => v),
  );
};

challenge2b = (resto, minimumPrice) => {
  return pipe(
    resto.orderHistory,
    R.filterMap(o =>
      o.totalPrice > minimumPrice ? O.some(o.totalPrice) : O.none,
    ),
    R.collect((k, v) => `${k}-${v}`),
  );
};

challenge2c = resto => {
  const promoIds = pipe(resto.promotions.map(p => p.id));
  console.log({promoIds});
  return pipe(
    resto.orderHistory,
    R.filter(o => promoIds.includes(o.promotionId || '')),
  );
};

challenge2d = resto => {
  const orderSum = pipe(
    resto.orderHistory,
    R.reduce({num: 0, total: 0}, (acc, curr) => {
      return {
        num: acc.num + 1,
        total: acc.total + curr.totalPrice,
      };
    }),
  );

  return (
    orderSum.num === resto.earnings.orderNumber &&
    orderSum.total === resto.earnings.totalEarnings
  );
};

challenge2e = (resto, orderIds) => {
  const eitherList = pipe(
    orderIds.map(id =>
      pipe(
        resto.orderHistory,
        R.lookup(id),
        O.fold(
          () => E.left(id),
          o => E.right(o.totalPrice),
        ),
      ),
    ),
  );

  return pipe(
    eitherList,
    A.findFirst(e => E.isLeft(e)),
    O.fold(
      () =>
        pipe(
          eitherList,
          A.reduce(0, (acc, curr) => {
            if (E.isRight(curr)) return acc + curr.right;

            return acc;
          }),
          E.right,
        ),
      le => le,
    ),
  );
};
