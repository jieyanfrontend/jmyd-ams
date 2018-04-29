import { observable, action, computed } from 'mobx';
let allFileTypes = [
  '',
  'A类文件',
  'B类文件',
  'C类文件',
  'D类文件',
  'E类文件',
];
class Store {
  @observable process_list = [];
  @observable file_type = '0';
  @observable keyword = '';
  @action
  setFileType(file_type){
    this.file_type = file_type;
  }
  @action
  setProcessList(list){
    this.process_list = list;
  }
  @computed
  get file_types(){
    let fileTypes = this.process_list.map(item =>  {
      return {
        type: item.file_type,
        name: allFileTypes[item.file_type]
      }
    });
    return new Set(fileTypes);
  }
}
export default new Store();