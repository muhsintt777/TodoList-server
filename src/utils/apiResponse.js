export class ApiResponse {
  constructor({ data = null, message = "successfull", errorType = null }) {
    this.message = message;
    this.data = data;
    this.errorType = errorType;
    this.isSuccess = !Boolean(errorType);
  }
}
