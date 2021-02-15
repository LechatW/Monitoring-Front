export class HttpTraceInfo {
    method: string;
    date: string;
    timeTaken: string;
    status: string;
    uri: string;

    constructor(method: string, date: string, timeTaken: string, status: string, uri: string) {
        this.method = method;
        this.date = date;
        this.timeTaken = timeTaken;
        this.status = status;
        this.uri = uri;
    }
}