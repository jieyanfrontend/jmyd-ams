import { observable } from 'mobx'
class Store {
  @observable a = 0;

  //process
  @observable loading = false;//表格获取数据loading
  @observable params = {};//地址栏参数
  @observable process_list = [];//process list
  @observable wf_id;//效率100编号
  //create file b
  @observable create_b = {
    visible: false,
    type: '批开停开机',
    loading: false
  };
  @observable create_b_check = {
    visible: false
  }
}
export default new Store();