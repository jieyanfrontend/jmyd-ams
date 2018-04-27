import { observable, action, computed } from 'mobx';
class Store {
  @observable visible = {
    create: false,
    edit: false
  };
  @action
  setVisible(type){
    this.visible = Object.assign({}, this.visible, type);
  }
  @observable fileAList = [];
  @action
  setFileAList(list){
    this.fileAList = list;
  }
  @computed get list(){
    let allWf_ids = [],
      allTitles = [],
      allCreators = [];
    this.fileAList.map(file => {
      allWf_ids.push(file.wf_id);
      allTitles.push(file.title);
      allCreators.push(file.creator);
    });
    return {
      wf_ids: Array.from(new Set(allWf_ids)),
      titles: Array.from(new Set(allTitles)),
      creators: Array.from(new Set(allCreators))
    }
  }
  @observable selectedItem = {
    //editType: 'edit'
  };
  @action
  setSelectedItem(item){
    this.selectedItem = item;
  }
}

let store = new Store();
export default store;