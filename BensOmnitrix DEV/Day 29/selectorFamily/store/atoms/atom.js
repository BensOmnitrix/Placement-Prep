import {atomFamily,selectorFamily} from "recoil";

export const todoFamily = atomFamily({
    key: "todoFamily",
    default: selectorFamily({
        key: "todoFamilySelector",
        get: (id) => async ({get}) => {
            const response = await fetch("somelink");
            const data = await response.json();
            return data;
        }
    })
})