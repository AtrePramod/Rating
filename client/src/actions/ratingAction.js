import axios from 'axios'
import Swal from 'sweetalert2'


export const registerRating = (sendData) => async (dispatch) => {

    dispatch({ type: 'REGISTER_REQUEST' })
    try {
        const res = await axios.post("/api/v1/rating/new", sendData)
        if (res.data.success) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
        dispatch({ type: 'REGISTER_SUCCESS', payload: res.data })
    } catch (error) {
        dispatch({ type: 'REGISTER_FAIL', payload: error })
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

export const getAllrating = () => async (dispatch) => {
    try {
        dispatch({ type: "GETALLRATING_REQUEST" })
        const response = await axios.get("/api/v1/rating/all")
        localStorage.setItem('rating', JSON.stringify(response.data.Ratings))

        dispatch({ type: 'GETALLRATING_SUCCESS', payload: response.data.Ratings })

    } catch (error) {
        dispatch({ type: 'GETALLRATING_FAIL', payload: error })

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
