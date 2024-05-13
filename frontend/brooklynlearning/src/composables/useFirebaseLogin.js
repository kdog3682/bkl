import {ExpirationalStorage, LocalStorage} from "/home/kdog3682/2024-javascript/js-toolkit/LocalStorage.js"
export {
    useFirebaseLogin,
}
import {getDocument} from "/home/kdog3682/@bkl/frontend/src/services/firebaseService.js"
import {setStorage} from "/home/kdog3682/@bkl/frontend/src/services/storage.js"

function mounted() {
    const data = storage.get('user')
    if (data) {
        // if the data expired ... it would be null.
        const {user, status} = useFirebaseLogin()
        user.value = data
        status.value = 'loggedIn'
    }
}

function useFirebaseLogin() {

    const user = ref(null)
    const username = ref('')
    const password = ref('')
    const rememberMe = ref(true)
    const status = ref('')

    async function login() {
        const data = await getDocument('users', username.value)

        if (data) {
            if (password.value == user.password) {
                status.value = 'loggedIn'
                user.value = data
                if (rememberMe.value) {
                    storage.set('user', data)
                }
                return true
            } else {
                status.value = 'invalidPassword'
            }
        } else {
            status.value = 'invalidUsername'
        }
    }

    return {
        username,
        password,
        rememberMe,
        status,
        user,
        login,
    }
}

