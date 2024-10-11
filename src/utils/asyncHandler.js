const asyncHandler = (requestHandler) => {

    return async (req, res, next) => {
        Promise
            .resolve(requestHandler(req, res, next))
            .catch((err) => {
                console.log(err)
            })
    }
}

export default asyncHandler