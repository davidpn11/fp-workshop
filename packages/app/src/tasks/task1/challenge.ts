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

export const students: Student[] = [
  {
    firstName: 'david',
    lastName: 'david',
    score: 100,
    graduated: true,
  },
  {
    firstName: 'pedro',
    lastName: 'pena',
    score: 10,
    graduated: true,
  },
];

export let challenge1a: (n: number) => number;
export let challenge1b: (n: number) => number;
export let challenge1c: (n: number) => number;
export let challenge1d: (n: number) => string;

export let challenge2a: (students: Student[], score: number) => string[];
export let challenge2b: (students: Student[], names: string[]) => Student[];

challenge2a = (students, score) => {
  console.log(students);
  console.log(score);
  // const newS = students.filter(s => s.score < score);
  // console.log(newS);
  // return newS.map(a => a.lastName);
  return [];
};
