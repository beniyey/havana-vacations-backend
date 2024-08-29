export class ServerError extends Error {
    status

    constructor(message, status) {
        super(message)
        this.status = status
    }
}