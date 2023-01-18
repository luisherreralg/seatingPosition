import { user } from "../Types/user";

const randomPosition = () => {
  return Math.floor(Math.random() * 3);
};

export const danielConstrain = (randomStudents: user[]) => {
  // ! Que Daniel ursula esté entre la posicion 0 y 3 o  10 y 13
  // (Tres primeras posiciones de las dos columenas pegadas al proyector)
  const danielIndex = randomStudents.findIndex(
    (student) => student.name === "Daniel Ursúa"
  );

  if (danielIndex > 3 && danielIndex < 10) {
    const daniel = randomStudents.splice(danielIndex, 1);
    randomStudents.splice(0 + randomPosition(), 0, daniel[0]);
  } else if (danielIndex > 10) {
    const daniel = randomStudents.splice(danielIndex, 1);
    randomStudents.splice(10 + randomPosition(), 0, daniel[0]);
  }

  return randomStudents;
};

export const ryanGonzuConstrain = (randomStudents: user[]) => {
  // ! Evitar que Ryan Leary esté junto a Gonzalo Díez
  const ryanIndex = randomStudents.findIndex(
    (student) => student.name === "Ryan Leary"
  );
  const gonzaloIndex = randomStudents.findIndex(
    (student) => student.name === "Gonzalo Díez"
  );

  if (ryanIndex === gonzaloIndex - 1 || ryanIndex === gonzaloIndex + 1) {
    const ryan = randomStudents.splice(ryanIndex, 1);
    randomStudents.splice(ryanIndex + Math.random() * 12, 0, ryan[0]);
  }

  return randomStudents;
};

export const covaConstrain = (randomStudents: user[]) => {
  // ! Que Daniel ursula esté entre la posicion 0 y 3 o  10 y 13
  // (Tres primeras posiciones de las dos columenas pegadas al proyector)
  const covaIndex = randomStudents.findIndex(
    (student) => student.name === "Covadonga Millan"
  );

  if (covaIndex > 3 && covaIndex < 10) {
    const cova = randomStudents.splice(covaIndex, 1);
    randomStudents.splice(0 + randomPosition(), 0, cova[0]);
  } else if (covaIndex > 10) {
    const cova = randomStudents.splice(covaIndex, 1);
    randomStudents.splice(10 + randomPosition(), 0, cova[0]);
  }

  return randomStudents;
};
