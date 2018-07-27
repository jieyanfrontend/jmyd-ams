import {action, observable } from 'mobx'

class Store {
    @observable loading = false;
    @action
    setLoading(res){
        this.loading = res;
    }
}

export default new Store();