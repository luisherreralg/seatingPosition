import { user } from "../Types/user";
import { danielConstrain } from "./SeatsConstrains";

export default function Random() {
  const students: user[] = [
    {
      name: "Antonio Jesús Ruiz",
      img: "https://ca.slack-edge.com/T0SJKHBFZ-U043A0XAJ4Q-dea68d6f29a4-512",
    },
    {
      name: "Carlos Ruiz",
      img: "https://ca.slack-edge.com/T0SJKHBFZ-U044854PPLK-fd6ad1a7e82e-512",
    },
    {
      name: "Ariadna Frias",
      img: "https://ca.slack-edge.com/T0SJKHBFZ-U045V7YMD7F-b1768b11ca1e-512",
    },
    {
      name: "Covadonga Millan",
      img: "https://ca.slack-edge.com/T0SJKHBFZ-U0468NU0SQZ-44c42d04428c-512",
    },
    {
      name: "Leandro Lupano",
      img: "https://ca.slack-edge.com/T0SJKHBFZ-U0475D6KZV0-9c24c871a42a-512",
    },
    {
      name: "Rocío Ricciardiello",
      img: "https://ca.slack-edge.com/T0SJKHBFZ-U02NYSWV928-09d453fc9e58-512",
    },
    {
      name: "Joaquin Bezanilla",
      img: "https://a.pinatafarm.com/312x296/ae7f8ccd22/sad-thumbs-up-cat.jpg/m/522x0",
    },
    {
      name: "Fabio Di Noia",
      img: "https://ca.slack-edge.com/T0SJKHBFZ-U04892VF3K7-4249aa3f0d30-512",
    },
    {
      name: "Daniel Ursúa",
      img: "https://ca.slack-edge.com/T0SJKHBFZ-U048NH40602-3e8cde9ef8eb-512",
    },
    {
      name: "Jimena Nuñez",
      img: "https://www.idlememe.com/wp-content/uploads/2021/10/beluga-cat-meme-idlememe-5-300x169.jpg",
    },
    {
      name: "Fernando Tarraga",
      img: "https://ca.slack-edge.com/T0SJKHBFZ-U048WNHK3JB-1552d7b39531-512",
    },
    // ! POR SI LUIS SE VUELVE  A UNIR
    // {
    //   name: "Luis Periañez",
    //   img: "https://ca.slack-edge.com/T0SJKHBFZ-U049Z1UBH0F-d25af0c83bfe-512",
    // },
    {
      name: "Ryan Leary",
      img: "https://ca.slack-edge.com/T0SJKHBFZ-U04A51Q7HFV-1996b5aed933-512",
    },
    {
      name: "Gonzalo Díez",
      img: "https://ca.slack-edge.com/T0SJKHBFZ-U04A38YQBAR-4e3fc8172750-512",
    },
    {
      name: "Jesus Enrique Jimenez",
      img: "https://ca.slack-edge.com/T0SJKHBFZ-U04AAKBF8JH-c4f2ab45561f-512",
    },
    {
      name: "Silvia Oliva",
      img: "https://ca.slack-edge.com/T0SJKHBFZ-U04A6NX6A6A-a263ed4e9013-512",
    },
    {
      name: "Elena Bragado",
      img: "https://i.ytimg.com/vi/Zr-qM5Vrd0g/maxresdefault.jpg",
    },
    {
      name: "Ivan Dúran",
      img: "https://ca.slack-edge.com/T0SJKHBFZ-U04ALQ7DJUS-99ca420aeb75-512",
    },
    {
      name: "Mariano Quiroga",
      img: "https://ca.slack-edge.com/T0SJKHBFZ-U03RN0LLEBT-d2301df19d2a-512",
    },
    {
      name: "Joseba Ibarlucea",
      img: "https://i.kym-cdn.com/photos/images/newsfeed/001/471/100/0e5.jpg",
    },
    {
      name: "Santiago Fernandez",
      img: "https://ca.slack-edge.com/T0SJKHBFZ-U04CSBWBWL9-f47a5fdcb35f-512",
    },
  ];

  let randomStudents = students.sort(() => Math.random() - 0.5);



  const splittedStundets = {
    columnLeft: randomStudents.slice(10),
    columnRight: randomStudents.slice(0, 10),
  };

  return splittedStundets;
}
