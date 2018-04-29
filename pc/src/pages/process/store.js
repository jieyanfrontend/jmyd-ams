import { observable, action, computed } from 'mobx';
class Store {
  @observable process_list = [];
  @observable filesList = [];
  @action
  setFilesList(list){
    this.filesList = list;
  }
  @computed
  get list(){
      let allWf_ids = [],
          allTitles = [],
          allCreators = [];
      this.filesList.map(file => {
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
}
export default new Store();