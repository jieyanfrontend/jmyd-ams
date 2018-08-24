import {action, observable } from 'mobx'

class Store {
    @observable loading = false;
    @action
    setLoading(res){
        this.loading = res;
    }
    @observable isDisabledBtn = false;
    @action
    changeBtn(type){
        this.isDisabledBtn = type
    }
    @observable isDisabledBtn = false;
    @action
    changeBtn(type){
        this.isDisabledBtn = type
    }
}

export default new Store();