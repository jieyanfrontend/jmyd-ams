import { observable } from 'mobx';
class Store {
  @observable process_list = [];
}
export default new Store();