export const registerRatingReducer = (state = {}, action) => {

    switch (action.type) {
        case "REGISTER_REQUEST":
            return {
                loading: true
            }
        case "REGISTER_SUCCESS":
            return {
                loading: false,
                success: true
            }
        case "REGISTER_FAIL":
            return {
                loading: false,
                success: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getAllRating = (state = {}, action) => {
    switch (action.type) {
        case "GETALLRATING_REQUEST":
            return {
                loading: true
            }
        case "GETALLRATING_SUCCESS":
            return {
                success: true,
                loading: false,
                Ratings: action.payload
            }
        case "GETALLRATING_FAIL":
            return {
                success: false,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
