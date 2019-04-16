export const ActionLogin = isLogin => ({
    type: 'LogIn',
    isLogin
})
const login = (state = {}, action) => {
    console.log(action, state)
    switch (action.type) {
        case 'LogIn':
            let a = {
                ...state,
                isLogin: action.isLogin,
            }
            console.log(a)
            return a
        default:
            return state
    }
}

export default login
