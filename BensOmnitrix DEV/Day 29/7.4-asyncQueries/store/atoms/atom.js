import { atom, selector } from "recoil";
import axios from "axios"

export const notificationsAtom = atom({
    key: "notificationAtom",
    default: selector({
        key: "notificationAtomSelector",
        get: ({get}) => {
            const res = axios.get("https://sum-server-100xDevs/notification");
            return res.data;
        }
    })
})

export const totalNotificationSelector = atom({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotification = get(notificationsAtom);
        const totalNotification = 0;
        Object.entries(allNotification).map(([key,value]) => {
            totalNotification += value;
        })
    }
})