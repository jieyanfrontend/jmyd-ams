import { observable, action } from 'mobx';
class Store {
  @observable type = '批开停开机';
  @action
  changeType(type){
    this.type = type;
  }

}
export default new Store();