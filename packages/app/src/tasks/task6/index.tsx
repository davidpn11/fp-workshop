import {ord} from 'fp-ts';
import {flow, identity} from 'fp-ts/lib/function';
import React from 'react';
import {TaskSystem} from '../../components/TaskSystem';
import {TaskPage} from '../style';
import Challenge1Markdown from './challenge1.md';
import Challenge2Markdown from './challenge2.md';
import {
  eqOrder,
  eqPromotion,
  ordOrder,
  ordPromotions,
  removeDeletedPromotions,
  recordToOrderList,
  filterDuplicatedOrder,
} from './challenges';
import {
  promosArray,
  deletedPromosArray,
  ordersArray1,
  ordersArray2,
  ordersArray3,
  date1,
  date2,
  date3,
  date5,
  ordersRecord,
  orderedRecordList,
} from './types';
import * as A from 'fp-ts/lib/Array';

const challenge1a1: Challenge = {
  id: 'Challenge 1.a (1)',
  input: {promo1: promosArray[0], promo2: deletedPromosArray[0]},
  inputType: 'json',
  paramsType: 'spread',
  expectedOutput: true,
  outputType: 'primitive',
  status: 'neutral',
  handler: eqPromotion.equals,
};

const challenge1a2: Challenge = {
  id: 'Challenge 1.a (2)',
  input: {promo1: promosArray[1], promo2: promosArray[2]},
  inputType: 'json',
  paramsType: 'spread',
  expectedOutput: false,
  outputType: 'primitive',
  status: 'neutral',
  handler: eqPromotion.equals,
};

const challenge1a3: Challenge = {
  id: 'Challenge 1.a (3)',
  input: {promo1: promosArray[1], promo2: deletedPromosArray[1]},
  inputType: 'json',
  paramsType: 'spread',
  expectedOutput: true,
  outputType: 'primitive',
  status: 'neutral',
  handler: eqPromotion.equals,
};

const challenge1b: Challenge = {
  id: 'Challenge 1.b',
  input: {promotions: promosArray, deletedPromotions: deletedPromosArray},
  inputType: 'json',
  paramsType: 'spread',
  expectedOutput: [
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
  ],
  outputType: 'json',
  status: 'neutral',
  handler: removeDeletedPromotions,
};

const challenge1c: Challenge = {
  id: 'Challenge 1.c',
  input: promosArray,
  inputType: 'json',
  expectedOutput: [
    {
      id: 'promo1',
      type: 'TOP_PLACEMENT',
      budget: {
        totalAmount: 100,
        consumedAmount: 25,
      },
    },
    {
      id: 'promo5',
      type: 'TOP_PLACEMENT',
    },
    {
      id: 'promo2',
      type: 'FREE_ITEM',
      item: {
        name: 'Fries',
        price: 3.5,
      },
      budget: {
        totalAmount: 50,
        consumedAmount: 0,
      },
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
      id: 'promo6',
      type: 'FREE_ITEM',
      item: {
        name: 'Fried Gyoza',
        price: 5.5,
      },
    },
  ],
  outputType: 'json',
  status: 'neutral',
  handler: flow(A.sort(ordPromotions)),
};

const challenge2a1: Challenge = {
  id: 'Challenge 2.a (1)',
  input: {order1: ordersArray1[0], order2: ordersArray2[0]},
  inputType: 'json',
  paramsType: 'spread',
  expectedOutput: false,
  outputType: 'primitive',
  status: 'neutral',
  handler: eqOrder.equals,
};

const challenge2a2: Challenge = {
  id: 'Challenge 2.a (2)',
  input: {order1: ordersArray1[0], order2: ordersArray2[1]},
  inputType: 'json',
  paramsType: 'spread',
  expectedOutput: false,
  outputType: 'primitive',
  status: 'neutral',
  handler: eqOrder.equals,
};

const challenge2a3: Challenge = {
  id: 'Challenge 2.a (3)',
  input: {order1: ordersArray1[1], order2: ordersArray2[2]},
  inputType: 'json',
  paramsType: 'spread',
  expectedOutput: true,
  outputType: 'primitive',
  status: 'neutral',
  handler: eqOrder.equals,
};

const challenge2b: Challenge = {
  id: 'Challenge 2.b',
  input: ordersArray3,
  inputType: 'json',
  expectedOutput: [
    {
      customerId: '1',
      orderDate: date1,
      totalPrice: 30.5,
    },
    {
      customerId: '1',
      orderDate: date3,
      promotionId: 'promo1',
      totalPrice: 20.5,
    },
    {
      customerId: '2',
      orderDate: date2,
      promotionId: 'promo2',
      totalPrice: 50.5,
    },
    {
      customerId: '3',
      orderDate: date5,
      totalPrice: 40,
    },
  ],
  outputType: 'json',
  status: 'neutral',
  handler: filterDuplicatedOrder,
};

const challenge2c: Challenge = {
  id: 'Challenge 2.c',
  input: ordersRecord,
  inputType: 'json',
  expectedOutput: orderedRecordList,
  outputType: 'json',
  status: 'neutral',
  handler: recordToOrderList,
};

const challengeSet1: ChallengeSet = {
  title: 'Challenge 1.a',
  markdown: Challenge1Markdown.markdown,
  challenges: [
    challenge1a1,
    challenge1a2,
    challenge1a3,
    challenge1b,
    challenge1c,
  ],
};

const challengeSet2: ChallengeSet = {
  title: 'Challenge 2.a',
  markdown: Challenge1Markdown.markdown,
  challenges: [
    challenge2a1,
    challenge2a2,
    challenge2a3,
    challenge2b,
    challenge2c,
  ],
};

const task6: TaskType = {
  title: 'task6',
  sets: [challengeSet1, challengeSet2],
  currentSet: challengeSet1,
};

export function Task6() {
  return (
    <TaskPage>
      <TaskSystem task={task6} />
    </TaskPage>
  );
}
