import { useState } from "react";
import Random from "./utils/Random";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { user } from "./Types/user";

function App() {
  const studentsInitialState = Random();
  const teachers: user[] = [
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

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.droppableId === result.source.droppableId) {
      if (result.destination.droppableId === "students-left") {
        const items = reorder(
          students.columnLeft,
          result.source.index,
          result.destination.index
        );

        setStudents({ ...students, columnLeft: items as never });
      } else {
        const items = reorder(
          students.columnRight,
          result.source.index,
          result.destination.index
        );

        setStudents({ ...students, columnRight: items as never });
      }
    } else {
      if (result.source.droppableId === "students-left") {
        const [removed] = students.columnLeft.splice(result.source.index, 1);
        students.columnRight.splice(result.destination.index, 0, removed);

        setStudents({
          ...students,
          columnLeft: students.columnLeft,
          columnRight: students.columnRight,
        });
      } else {
        const [removed] = students.columnRight.splice(result.source.index, 1);
        students.columnLeft.splice(result.destination.index, 0, removed);

        setStudents({
          ...students,
          columnLeft: students.columnLeft,
          columnRight: students.columnRight,
        });
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <div className="container">
          <div className="students">
            <Droppable droppableId="students-left">
              {(provided) => (
                <div
                  className="students__left"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {students.columnLeft.map((student, index) => (
                    <Draggable
                      key={student.name}
                      draggableId={student.name}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          key={student.name}
                          className={`student`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <img
                            src={
                              student.img
                                ? student.img
                                : "https://www.laguiadelvaron.com/wp-content/uploads/2019/08/historia-del-meme-gato-en-mesa-www.laguiadelvaron-3.jpg"
                            }
                            alt=""
                          />
                          <p>{student.name}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="students-right">
              {(provided) => (
                <div
                  className="students__right"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {students.columnRight.map((student, index) => (
                    <Draggable
                      key={student.name}
                      draggableId={student.name}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          key={student.name}
                          className={`student`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <img
                            src={
                              student.img
                                ? student.img
                                : "https://www.laguiadelvaron.com/wp-content/uploads/2019/08/historia-del-meme-gato-en-mesa-www.laguiadelvaron-3.jpg"
                            }
                            alt=""
                          />
                          <p>{student.name}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div className="teachers">
            {teachers.map((teacher) => (
              <div className={`teacher ${teacher.name}`} key={teacher.name}>
                <img
                  src={
                    teacher.img
                      ? teacher.img
                      : "https://www.laguiadelvaron.com/wp-content/uploads/2019/08/historia-del-meme-gato-en-mesa-www.laguiadelvaron-3.jpg"
                  }
                  alt=""
                />
                <p>{teacher.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
