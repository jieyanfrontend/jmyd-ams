import { observable, action} from 'mobx';
class Store{
@observable partitionData=[];
@action
    setDataPartition(value){
    this.partitionData = value;
}
    @observable isDisabledBtn = false;
    @action
    changeBtn(type){
        this.isDisabledBtn = type
    }
    @observable loading = false;
    @action
    setLoading(res){
        this.loading = res;
    }

}
export default new Store()