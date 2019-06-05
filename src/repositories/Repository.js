export const ErrorFunction = (error, callerThis) => {

    // if has error
    if (error.response) {
        if (error.response.status === 422) {
            let errors = error.response.data.errors
            for (let x in errors) {
                callerThis.$toaster.error(x + ' ' + errors[x][0])
            }
        }

        // 401 error
        if (error.response.status === 401) {
            callerThis.$router.pushpush({name: 'login'})
        }

    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
    } else {

    // Something happened in setting up the request that triggered an Error
    }
}