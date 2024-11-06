class apiResponse {
    constructor(statusCode, Data, message = "Success") {
        this.statusCode = statusCode;
        this.Data = Data;
        this.message = message;
        this.success = statusCode < 400;
    }
}

export default { apiResponse }