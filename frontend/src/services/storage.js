import {LocalStorage} from "/home/kdog3682/2024-javascript/js-toolkit/LocalStorage.js"

const localStorage = new LocalStorage()
const setStorage = localStorage.set.bind(localStorage)
const getStorage = localStorage.get.bind(localStorage)

export {
    setStorage,
    getStorage,
}
