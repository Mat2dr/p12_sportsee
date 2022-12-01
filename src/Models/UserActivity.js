/**
 * Model to create an User basic info
 * @class
 * @property {object} sessions Sessions of the user
 */
class UserActivity {
    constructor(data) {
        this.sessions = data.sessions
    }
}

export default UserActivity