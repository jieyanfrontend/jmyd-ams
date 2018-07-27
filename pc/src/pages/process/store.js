import { observable, action, computed } from 'mobx';
class Store {
    @observable visible = {
        edit: false,
        file_b: false,
        file_c:false,
        file_e:false,
        partition:false
    }
    @action
    setVisible(type){
        this.visible = Object.assign({}, this.visible, type);
    }
    @observable loading = false;
    @action
    setLoading(res){
        this.loading = res;
    }
  @observable process_list = [];
  @action
  setProcessList(list){
    this.process_list = list;
  }
  @computed
  get list(){
      let allFileTypes = [];
      this.process_list.map(file => {
          allFileTypes.push(file.file_type);
          // allFileIds.push(file.file_id);
      });
      return {
        file_types: Array.from(new Set(allFileTypes)),
          // file_ids: Array.from(new Set(fileIds))
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