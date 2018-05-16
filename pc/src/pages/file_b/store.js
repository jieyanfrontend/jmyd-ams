import { observable, action } from 'mobx';
class Store {
  @observable type = '批开停开机';
  @action
  changeType(type){
    this.type = type;
  }
 @observable wf_id = {
 }
 @action
  setWf_id(wf_if){
    this.wf_id = wf_if;
 }
 @observable inputValue='';
  @action
    setInputValue(value){
        this.inputValue = value;
    }
}
export default new Store();