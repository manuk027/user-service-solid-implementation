export class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = "UnauthorizedError";
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
//# sourceMappingURL=UnauthorizedError.js.map