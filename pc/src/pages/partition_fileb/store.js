import { observable, action} from 'mobx';
class Store{
@observable partitionData=[];
@action
    setDataPartition(value){
    this.partitionData = value;
}

}
export default new Store()