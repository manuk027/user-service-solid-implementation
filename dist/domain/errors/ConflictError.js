export class ConflictError extends Error {
    constructor(message) {
        super(message);
        this.name = "ConflictError";
        Object.setPrototypeOf(this, ConflictError.prototype);
    }
}
//# sourceMappingURL=ConflictError.js.map