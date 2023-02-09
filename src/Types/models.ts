export type Student = {
  name: string;
  img: string;
};

export type Columns = {
  columnLeft: { id: 1; student: Student };
  columnRight: { id: 2; student: Student };
};
