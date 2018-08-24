import { observable, action, computed} from 'mobx';
class Store{
    @observable file_ids = [];
    @action
    setFileIds(value){
        this.file_ids = value;
    }
    @observable datas = [];
    @action
    setData(value){
        this.datas = value;
    }
    @computed
    get getData(){
        return this.datas;
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
    @observable resTableC = {};
    @action
    setTable(value) {
        this.resTableC = value
    }
    @computed
    get getResTableC() {
        return this.resTableC
    }
    // @computed
    // get fileIds(){
    //     let allFile_ids = [];
    //     this.file_ids.map(file => {
    //         allFile_ids.push(file.file_id);
    //     });
    //     return {
    //         file_ids: Array.from(new Set(allFile_ids))
    //     }
    // }
}
export default new Store()