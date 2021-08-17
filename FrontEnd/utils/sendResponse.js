
const sendResponse = ({res, statusCode, message, data, error}) => {

    res.status(statusCode);
    if(error){
       return res.json({
           message,
           error
       });
    }
    return res.json({
        message,
        data
    });
    
}


module.exports = sendResponse;