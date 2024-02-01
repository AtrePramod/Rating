import axios from 'axios'
import Swal from 'sweetalert2'

export const getAllProduct = () => async (dispatch) => {

    dispatch({ type: 'GETPRODUCT_REQUEST' })
    try {
        const response = await axios.get("/api/v1/product/all")
        localStorage.setItem('products', JSON.stringify(response.data.products))

        dispatch({ type: 'GETPRODUCT_SUCCESS', payload: response.data.products })
    } catch (error) {
        dispatch({ type: 'GETPRODUCT_FAIL', payload: error })

        if (!error.response.data.success) {
            Swal.fire({
                position: "top",
                icon: "error",
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
}