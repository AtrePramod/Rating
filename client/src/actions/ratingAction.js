import axios from 'axios'
import Swal from 'sweetalert2'


export const registerUser = (user) => async dispatch => {

    dispatch({ type: 'USER_REGISTER_REQUEST' })
    try {
        const res = await axios.post("/api/v1/user/register", user)

        if (res.data.success) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "User created successful!",
                showConfirmButton: false,
                timer: 1500
            });
        }

        dispatch({ type: 'USER_REGISTER_SUCCESS' })
    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAIL', payload: error })

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