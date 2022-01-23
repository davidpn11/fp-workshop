import { filter, map } from 'fp-ts/lib/Array';
import {flow, pipe} from 'fp-ts/lib/function';

const add = (x: number) => (y: number) => x + y;
const mult = (x: number) => (y: number) => x * y;

//Use the following methods to complete the challenges

const add1 = add(1);
const mult2 = mult(2);
const multNeg1 = mult(-1);

export type Student = {
  firstName: string;
  lastName: string;
  score: number;
  graduated: boolean;
};

export let challenge1a: (n: number) => number;
challenge1a = flow(add1, add1, mult2, mult2, add1);
export let challenge1b: (n: number) => number;
challenge1b = flow(add1, add1, mult2, mult2, mult2)
export let challenge1c: (n: number) => number;
challenge1c = flow(add(7), mult2, add(-1))
export let challenge1d: (n: number) => string;
challenge1d = flow(challenge1c, multNeg1, n => n.toString());

export let challenge2a: (students: Student[], score: number) => string[];
challenge2a = (students, score) => pipe(students, filter(s => s.score >= score), map(s => s.lastName))
export let challenge2b: (students: Student[], names: string[]) => Student[];
challenge2b = (stus, names) => pipe(stus, map(s => ({...s, graduated: names.includes(s.lastName)})))
