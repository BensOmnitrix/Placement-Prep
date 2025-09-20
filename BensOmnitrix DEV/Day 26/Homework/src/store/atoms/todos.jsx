import {atom, selector } from "recoil"

export const titleAtom = atom({
    key: "titleAtom",
    default: ""
})
export const descriptionAtom = atom({
    key: "descriptionAtom",
    default: ""
})

export const todoAtom = atom({
    key: "todoAtom",
    default: []
})

export const filterAtom = atom({
    key: "filterAtom",
    default: ""
})

export const filterSelector = selector({
    key: "filterSelector",
    get: ({get}) => {
        const todos = get(todoAtom);
        const filter = get(filterAtom);

        const temp = [];

        todos.map((todo) => {
            if(todo["title"].includes(filter)){
                temp.push(todo);
            }
        })

        return temp;
    }
})