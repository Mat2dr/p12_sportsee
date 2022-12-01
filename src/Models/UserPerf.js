/**
 * Model to create an User basic info
 * @class
 * @property {object} data Perf of the user
 * @property {object} kind Kind of perf
 */
class UserPerf {
    constructor(data) {
        this.data = data.data;
        this.kind = data.kind;
    }
}

export default UserPerf