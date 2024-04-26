export {
    useFirebaseLogin,
}
import {getDocument} from "/home/kdog3682/@bkl/frontend/src/services/firebase.js"
import {setStorage} from "/home/kdog3682/@bkl/frontend/src/services/storage.js"

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
                    setStorage('user', data)
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
