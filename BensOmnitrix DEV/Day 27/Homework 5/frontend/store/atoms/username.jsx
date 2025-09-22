import { atom } from "recoil";

export const usernameAtom = atom({
    key: "usernameAtom",
    default: ""
})

export const publicGistsAtom = atom({
    key: "publicGistsAtom",
    default: ""
})

export const publicReposAtom = atom({
    key: "publicReposAtom",
    default: ""
})

export const followersAtom = atom({
    key: "followersAtom",
    default: ""
})

export const followingAtom = atom({
    key: "followingAtom",
    default: ""
})

export const locationAtom = atom({
    key: "locationAtom",
    default: ""
})

export const nameAtom = atom({
    key: "nameAtom",
    default: ""
})

export const starredAtom = atom({
    key: "starredAtom",
    default: ""
})

export const languagesAtom = atom({
    key: "languagesAtom",
    default: {}
})

export const avatarAtom = atom({
    key: "avatarAtom",
    default: ""
})