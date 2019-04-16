export const ActionLogin = isLogin => ({
    type: 'LogIn',
    isLogin
})
const reducer = (state = false, action) => {
    console.log("login Reducer",action, state)
    switch (action.type) {
        case 'LogIn':
            // let a = {
            //     ...state,
            //     isLogin: action.isLogin,
            // }
            return true
        default:
            return state
    }
}

export default reducer
