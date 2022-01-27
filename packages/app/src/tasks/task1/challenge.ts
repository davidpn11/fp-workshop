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
export let challenge1b: (n: number) => number;
export let challenge1c: (n: number) => number;
export let challenge1d: (n: number) => string;

/**Given students and score, return an array of lastName for all students above the given score */
export let challenge2a: (students: Student[], score: number) => string[];

/** Given students list and names of names, move all the students whos lastName is in names to graduated, that is, move graduated to true. Return the initial list of students*/
export let challenge2b: (students: Student[], names: string[]) => Student[];

/**
 * Solutions
 */

challenge1a = flow(add1, add1, add1, add1, mult2, add1);
challenge1b = flow(add1, add1, add1, add1, mult2, mult2);
challenge1c = flow(add1, add1, add1, mult2, mult2, add1);
challenge1d = flow(add1, add1, add1, mult2, mult2, add1, multNeg1, String);

const filterStudentsByScore = (score: number) => (students: Student[]) =>
  students.filter(s => s.score > score);

const graduateStudent = (student: Student): Student => ({
  ...student,
  graduated: true,
});

challenge2a = (students, score) => {
  const filteredStudents = pipe(students, filterStudentsByScore(score));
  return filteredStudents.map(fs => fs.lastName);
};

challenge2b = (students, names) => {
  return students.map(s =>
    names.includes(s.lastName) ? graduateStudent(s) : s,
  );
};
