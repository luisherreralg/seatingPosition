import { Student } from "../Types/models";
import { JimenaGonzuConstrain } from "./SeatsConstrains";
import { studentsData } from "./studentsData";

export default function getRandomStudents() {
  const students: Student[] = studentsData;

  let randomStudents = shuffle(students);

  randomStudents = JimenaGonzuConstrain(randomStudents);

  const splittedStundets = splitStudents(randomStudents);

  return splittedStundets;
}

const splitStudents = (students: Student[]) => {
  const splittedStundets = {
    columnLeft: students.slice(10),
    columnRight: students.slice(0, 10),
  };
  return splittedStundets;
};

const shuffle = (randomStudents: Student[]) => {
  // Random with Fisher–Yates shuffle Algorithm
  // Is the best way to randomize an array
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

  // How it works:
  // 1. We start from the end of the array
  // 2. We get a random number between 0 and the current index
  // 3. We swap the current element with the element at the random index

  // 5. We repeat the process until the current index is 0

  for (let i = randomStudents.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomStudents[i], randomStudents[j]] = [
      randomStudents[j],
      randomStudents[i],
    ];
  }
  return randomStudents;
};
