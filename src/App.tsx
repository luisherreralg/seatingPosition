import { useState } from "react";
import Random from "./utils/Random";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { table } from "console";

function App() {
  const studentsInitialState = Random();
  const teachers = [
    {
      name: "Profe1",
      img: "https://planb.mx/wp-content/uploads/2022/04/FB_IMG_1621909877113-1.jpg",
    },
    {
      name: "Profe2",
      img: "https://www.laguiadelvaron.com/wp-content/uploads/2019/08/historia-del-meme-gato-en-mesa-www.laguiadelvaron-3.jpg",
    },
    {
      name: "Alejandro",
      img: "https://media.istockphoto.com/id/502295596/photo/funny-awkward-moose-eating.jpg?s=612x612&w=0&k=20&c=3iklofsMm6z6vs7a0b_yJDd0gGMOnhb84tWwn126ktw=",
    },
    {
      name: "Profe3",
      img: "https://i.kym-cdn.com/photos/images/facebook/001/309/269/10a.png",
    },
  ];

  const [students, setStudents] = useState(studentsInitialState);

  const reorder = (list: Array<any>, startIndex: number, endIndex: number) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { source, destination } = result;
        if (
          !destination ||
          (source.index === destination.index &&
            source.droppableId === destination.droppableId)
        )
          return;
        setStudents((prevStudent) =>
          reorder(prevStudent, source.index, destination.index)
        );
      }}
    >
      <div className="App-container">
        <Droppable droppableId="students-left">
          {(droppableProvided) => (
            <ul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className="App"
            >
              {students.map((student, index) => {
                return (
                  <Draggable
                    key={student.name}
                    draggableId={student.name}
                    index={index}
                  >
                    {(draggableProvided) => (
                      <li
                        {...draggableProvided.draggableProps}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                        className={`student student-${index + 1}`}
                      >
                        <p>{`${student.name}`}</p>
                        <img src={student.img} alt={`${student.name}`} />
                      </li>
                    )}
                  </Draggable>
                );
              })}

              {teachers.map((teacher, index) => {
                return (
                  <li
                    key={teacher.name}
                    className={`teacher teacher-${index + 1}`}
                  >
                    <p>{`${teacher.name}`}</p>
                    <img src={teacher.img} alt={`${teacher.name}`} />
                  </li>
                );
              })}

              {new Array(10).fill(0).map((_status, index) => {
                return (
                  <li key={index} className={`table table-${index + 1}`} />
                );
              })}
              {droppableProvided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
