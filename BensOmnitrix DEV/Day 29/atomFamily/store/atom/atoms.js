import {atomFamily} from "recoil"

const TODOS = [
  { id: 1, text: "Finish React project", completed: false },
  { id: 2, text: "Buy groceries", completed: true },
  { id: 3, text: "Read 20 pages of a book", completed: false },
  { id: 4, text: "Go for a run", completed: false },
  { id: 5, text: "Call a friend", completed: true },
  { id: 6, text: "Clean the room", completed: false },
  { id: 7, text: "Practice coding problems", completed: false },
  { id: 8, text: "Cook dinner", completed: true },
  { id: 9, text: "Meditate for 10 minutes", completed: false },
  { id: 10, text: "Write journal entry", completed: false },
];



export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: id => {
        return TODOS.find(x => x.id === Number(id))
    }
})