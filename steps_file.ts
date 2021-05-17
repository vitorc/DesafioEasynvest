const { actor } = require('codeceptjs');
import ex from 'codeceptjs-expectwrapper';

export = function () {
    return actor({
        async createNewUser(userData:object) {}, ...ex});
}
