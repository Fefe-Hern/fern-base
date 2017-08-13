
class DatabaseController {
    constructor() {
        this.db = require('Database');
    }

    authenticate() {
        this.db.authenticate();
    }
}