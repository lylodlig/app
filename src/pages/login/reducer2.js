export const ChangeContent = text => ({
    type: 'ChangeContent',
    text
})
const reducer = (state = {title: "Title", content: "内容"}, action) => {
    console.log("content Reducer", action, state)
    switch (action.type) {
        case 'ChangeContent':
            return {
                ...state,
                content: action.text
            }
        default:
            return state
    }
}

export default reducer
