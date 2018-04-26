import { observable, action } from 'mobx';
class Store{
  @observable user = '';
}
let globalStore = new Store();
export default globalStore;