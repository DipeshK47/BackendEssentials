// asyncHandler with PROMISE METHOD

const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}
export {asyncHandler}



// asyncHandler with TRY CATCH METHOD     -     Both are same

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

// export {asyncHandler}