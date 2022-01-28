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
