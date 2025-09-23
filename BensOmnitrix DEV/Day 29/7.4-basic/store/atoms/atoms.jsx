import {atom, selector} from "recoil"

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 12
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 104
})

export const meSeletor = selector({
    key: "meSelector",
    get: ({get}) => {
        const getNetworkAtom = get(networkAtom);
        const getJobsAtom = get(jobsAtom);
        const getNotificationAtom = get(notificationsAtom);
        const getMessagingAtom = get(messagingAtom);

        return getNetworkAtom + getJobsAtom + getNotificationAtom + getMessagingAtom;
    }
})