import {flow, pipe} from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';

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

export let challenge1a: (r?: Restaurant) => O.Option<Budget>;
export let challenge1b: (r?: Restaurant) => number;
export let challenge1c: (r?: Restaurant) => string;

//@ts-ignore
// challenge1a = (r: Restaurant) => {
//   return pipe(
//     r,
//     O.fromNullable,
//     O.map(({promotion}) =>
//       pipe(
//         promotion,
//         O.fromNullable,
//         O.map(({budget}) => budget),
//         O.fromNullable,
//         O.flatten,
//       ),
//     ),
//     O.flatten,
//   );
// };

// const cha1a: (p: Promotion | undefined) => O.Option<Budget> = flow(
//   O.fromNullable,
//   O.map(({budget}) => budget),
//   O.chain(a => (a ? O.some(a) : O.none)),
// );

// const c1b: (p: Partial<{budget:Budget}>) => O.Option<Budget> = flow(
//   O.fromNullable,
//   O.map(({budget}) => budget),
//   O.chain(a => (a ? O.some(a) : O.none)),
// );

// const extractPromotion: (r?: Restaurant) => O.Option<Budget> = flow(
//   O.fromNullable,
//   O.map(({promotion}) => promotion),
//   O.chain(cha1a),
//   // O.getOrElse(() => undefined)
// );

// challenge1a = a => {
//   console.log({a});
//   return extractPromotion(a);
// };

// const prces = (p: Promotion | undefined) => (budget: O.Option<Budget>) =>
//   pipe(
//     budget,
//     O.fold(
//       () => 'Nothing',
//       b =>
//         `You have a ${p?.type} with $${b.totalAmount - b.consumedAmount} left`,
//     ),
//   );

// challenge1b = r => {
//   return pipe(
//     r,
//     O.fromNullable,
//     O.map(({promotion}) => promotion),
//     O.chain(a =>
//       pipe(
//         a,
//         O.fromNullable,
//         O.map(({budget}) => budget),
//         O.chain(a => (a ? O.some(a) : O.none)),
//       ),
//     ),
//     prces(r?.promotion),
//   );
// };

// console.log('c1a', challenge1a(resto1));
