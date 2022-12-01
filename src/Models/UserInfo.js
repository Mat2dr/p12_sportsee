/**
 * Model to create an User basic info
 * @class
 * @property {number} id user's id
 * @property {string} firstName Firstname of the user
 * @property {string} lastName Lastname of the user
 * @property {number} score Daily score
 * @property {object} keyData keydata of the user (calories, proteins, carbohydrates, lipids)
 */
class UserInfo {
    constructor(data) {
        this.userId = data.id
        this.firstName = data.userInfos.firstName
        this.lastName = data.userInfos.lastName
        this.age = data.userInfos.age
        this.score = data.todayScore
        this.keyData = data.keyData
    }
}

export default UserInfo