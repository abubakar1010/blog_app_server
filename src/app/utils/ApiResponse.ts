class ApiResponse<T>{
    public statusCode: number;
    public message: string;
    public data: T;
    public success: boolean;
    constructor(statusCode: number, message: string, data: T, success=true){
        this.statusCode = statusCode,
        this.message= message,
        this.data= data,
        this.success= success
    }
}

export default ApiResponse