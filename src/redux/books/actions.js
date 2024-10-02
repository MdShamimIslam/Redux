import { LOADED } from "./actionTypes"

export const loaded = (books) => {
    return {
        type: LOADED,
        payload: books
    }
}