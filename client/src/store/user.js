import { observable, action } from 'mobx';

export default class UserStore {
    profile = observable.box(null);

    constructor(root) {
        this.root = root;
    }

    updateProfile = action((profile) => {
        this.profile = profile;
    });
}
