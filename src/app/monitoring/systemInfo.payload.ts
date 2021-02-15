export class SystemInfo {
    serverStatus: string;
    dbName: string;
    dbStatus: string;
    diskSpace: string;

    constructor(serverStatus: string, dbName: string, dbStatus: string, diskSpace: string) {
        this.serverStatus = serverStatus;
        this.dbName = dbName;
        this.dbStatus = dbStatus;
        this.diskSpace = diskSpace;
    }
}