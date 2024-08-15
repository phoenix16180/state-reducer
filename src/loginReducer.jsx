export const INITIAL_STATE  = {
    loginStatus: false,
}

export const loginReducer = (state, action) => {
    switch (action.type) {
        case 'login': {
            return { ...state, loggedIn: true }
        }
        case 'logout': {
            return { ...state, loggedIn: false }
        }
        default: {
            throw new Error('not an action')
        }
    }
}