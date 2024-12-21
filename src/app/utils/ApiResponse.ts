class ApiResponse{
    public statusCode: number;
    public message: string;
    public data: any;
    public success: boolean;
    constructor(statusCode: number, data: any, message: string, success=true){
        this.statusCode = statusCode,
        this.message= message,
        this.data= data,
        this.success= success
    }
}

export default ApiResponse