import {isSameDay, isEqual, isAfter, isBefore} from 'date-fns';
import * as A from 'fp-ts/lib/Array';
import * as E from 'fp-ts/lib/Either';
import {pipe} from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import * as R from 'fp-ts/lib/Record';
import * as Eq from 'fp-ts/lib/Eq';
import * as Ord from 'fp-ts/lib/Ord';
import {Eq as eqString, Ord as ordString} from 'fp-ts/lib/string';
import {Eq as eqNumber, Ord as ordNumber} from 'fp-ts/lib/number';
import {Budget, Order, Promotion} from './types';

export let eqPromotion: Eq.Eq<Promotion>;

export let removeDeletedPromotions: (
  promotions: Promotion[],
  deletedPromotions: Promotion[],
) => Promotion[];

export let ordPromotions: Ord.Ord<Promotion>;

export let eqOrder: Eq.Eq<Order>;
export let ordOrder: Ord.Ord<Order>;

export let filterDuplicatedOrder: (orders: []) => Order[];

export let recordToOrderList: (orderRecord: Record<string, Order>) => Order[];

/**
 * Solutions
 */

eqPromotion = {
  equals: (p1, p2) => {
    if (p1.type !== p2.type) return false;

    if (p1.type === 'FREE_ITEM' && p2.type === 'FREE_ITEM')
      return p1.id === p2.id && p1.item.name === p2.item.name;

    return p1.id === p2.id;
  },
};

removeDeletedPromotions = (promotions, deletedPromotions) => {
  const promoDiff = A.difference(eqPromotion);
  return pipe(promotions, promoDiff(deletedPromotions));
};

ordPromotions = {
  ...eqPromotion,
  compare: (p1, p2) => {
    const getTotalAmount = (b?: Budget) =>
      pipe(
        b,
        O.fromNullable,
        O.map(({totalAmount}) => totalAmount),
        O.getOrElse(() => 0),
      );
    if (p1.type === 'TOP_PLACEMENT' && p2.type === 'FREE_ITEM') {
      return -1;
    }
    if (p1.type === 'FREE_ITEM' && p2.type === 'TOP_PLACEMENT') {
      return 1;
    }

    if (getTotalAmount(p1.budget) > getTotalAmount(p2.budget)) {
      return -1;
    } else {
      return 0;
    }
  },
};

eqOrder = {
  equals: (order1, order2) => {
    return (
      eqString.equals(order1.customerId, order2.customerId) &&
      isEqual(order1.orderDate, order2.orderDate)
    );
  },
};

ordOrder = {
  ...eqOrder,
  compare: (order1, order2) => {
    if (isAfter(order2.orderDate, order1.orderDate)) {
      return -1;
    }
    if (isBefore(order2.orderDate, order1.orderDate)) return 1;

    return 0;
  },
};

filterDuplicatedOrder = orders => {
  return pipe(orders, A.uniq(eqOrder));
};

recordToOrderList = orderRecord => {
  return pipe(
    orderRecord,
    R.collect(ordString)((k, v) => v),
    A.sort(ordOrder),
  );
};
