import store from '../store';
class Handler {
  changeSelectType = value => {
    store.changeType(value);
  };
  createB = () => {
    let { getFieldsValue, getFieldsError } = this.props.form;
    let canCreate = !hasErrors(getFieldsError());
    let allTypes = this.allTypes;
    if (canCreate) {
      let values = getFieldsValue();
      let { word1, word2, word3, word4, word5, word6, word7, word8, word9, } = values;
      let { inputValue } = store;
      let { word1Input, word2Input, word3Input, word4Input, word5Input, word6Input, word7Input, word8Input, word9Input } = inputValue;
      let type = store.type;
      let operation_type = allTypes[type].operation_type;
      let { dataSource } = allTypes[type];
      let id = this.props.id;
      let that = this;
      store.setLoading(true);
      store.changeBtn(true);
      request({
        url: '/api/create_file_b',
        data: {
          operation_type,
          id,
          word1: word1 ? word1 : "",
          word2: word2 === 2 ? word2Input : word2,
          word3: word3 === 3 ? word3Input : word3,
          word4: word4 === 4 ? word4Input : word4,
          word5: word5 ? word5 : "",
          word6: word6 ? word6 : "",
          word7: word7 ? word7 : "",
          word8: word8 ? word8 : "",
          word9: word9 ? word9 : "",
        },
        // postType: 'formdata',
        success: res => {
          this.props.setVisible(false);
          messageSuccess(res);
          that.fetchProcessList();
        },
        fail: res => {
          // this.warning(res);
          this.props.setVisible(false);
        },
        complete: () => {
          this.props.setVisible(false);
          store.changeBtn(false);
          store.setLoading(false);
          that.fetchProcessList();
          store.changeType('批开停开机');
        }
      });
    } else {
      // this.warning(warnAlert);
    }
  };
  fetchProcessList = () => {
    request({
      url: '/api/get_file_list',
      data: {
        id: this.props.id,
        keyword: '',
        file_type: '',
      },
      success: ({ table }) => {
        store2.setProcessList(table);
      },
    });
  };
  warning = (res) => {
    Modal.warning({
      title: '警告',
      content: res.msg
    })
  };
  openNotification = (type) => {
    notification[type]({
      message: '操作提示',
      description: '已存在该类文件，请确认无误后操作'
    })
  }
}
export  default new Handler();