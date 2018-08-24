import { observable, action, autorun} from 'mobx';
class Store {
    @observable type = '批开停开机';
    @action
    changeType(type){
        this.type = type;
    }
    @observable isDisabledBtn = false;
    @action
    changeBtn(type){
        this.isDisabledBtn = type
    }
    @observable loading = false;
    @action
    setLoading(res) {
        this.loading = res;
    }
    @observable wf_id = {
    }
    @action
    setWf_id(wf_if){
        this.wf_id = wf_if;
    }
    @observable inputValue = {
        word1Input: '',
        word2Input: '',
        word3Input: '',
        word4Input: '',
        word5Input: '',
        word6Input: '',
        word7Input: '',
        word8Input: '',
        word9Input: '',
    };
    @action
    setInputValue(value){
        this.inputValue = Object.assign({},this.inputValue,value);
    }
}

export default new Store();