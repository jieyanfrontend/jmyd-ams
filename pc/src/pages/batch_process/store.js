import { observable, action } from 'mobx';
class Store {
  @observable efficientCode = [];
  @observable titles = [];
  @observable taskList = [];
  @observable visible = false;
  @observable task_params = {};
  @action
  setVisible = visible => {
    this.visible = visible;
  };
  @action
  changeTaskParams(params){
    this.task_params = params;
  }
}
let store = new Store();
export default store;