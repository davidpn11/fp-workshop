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
