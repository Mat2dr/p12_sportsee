/**
 * Model to create an User basic info
 * @class
 * @property {number} id user's id
 * @property {string} firstName Firstname of the user
 * @property {string} lastName Lastname of the user
 * @property {number} score Daily score
 * @property {object} keyData keydata of the user (calories, proteins, carbohydrates, lipids)
 */
class UserAverageSession {
    constructor(data) {
        this.sessions = data.sessions
    }
}

export default UserAverageSession