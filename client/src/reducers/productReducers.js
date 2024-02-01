export const getProductReducer = (state = {}, action) => {

    switch (action.type) {
        case "GETPRODUCT_REQUEST":
            return {
                loading: true,
            }
        case "GETPRODUCT_SUCCESS":
            return {
                loading: false,
                success: true,
                products: action.payload
            }
        case "GETPRODUCT_FAIL":
            return {
                loading: false,
                success: false,
                error: action.payload
            }
        default:
            return state;
    }
}
