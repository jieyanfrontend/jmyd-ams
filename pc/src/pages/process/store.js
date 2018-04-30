import { observable, action, computed } from 'mobx';
class Store {
    @observable visible = {
        edit: false,
    }
    @action
    setVisible(type){
        this.visible = Object.assign({}, this.visible, type);
    }
  @observable process_list = [];
  @action
  setProcessList(list){
    this.process_list = list;
  }
  @computed
  get list(){
      let allWf_ids = [],
          allTitles = [],
          allCreators = [];
      this.process_list.map(file => {
        allWf_ids.push(file.wf_id);
        allTitles.push(file.title);
        allCreators.push(file.creator);
      });
      return {
        wf_id: Array.from(new Set(allWf_ids)),
        title: Array.from(new Set(allTitles)),
        creator: Array.from(new Set(allCreators)),
      }
  }
  @observable selectedItem = {

}
    @action
    setSelectedItem(item){
      this.selectedItem = item;
    }
}
export default new Store();