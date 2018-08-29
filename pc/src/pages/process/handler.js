import store from './store'
import request from '../../helpers/request'
class Handler {
  canCreateFile = (num) => {
    let { file_types } = store.list;
    return file_types.indexOf(num) !== -1;
};
canCreateFileB = () => {
    let { process_list } = store;
    let canCreateFile = true;
    process_list.forEach(v => {
        if (v.file_name.indexOf("B类对比文件") !== -1) {
            return canCreateFile = false;
        }
        if (!canCreateFile) {
            this.openModalAutoDestroy()
        }
    })
};
openModalAutoDestroy = () => {
    const modal = Modal.warning({
        title: '操作提示',
        content: '已存在该类文件，请确认无误后操作',
        zIndex: 1001
    });
}
fetchProcessList = ({form }) => {
    store.loading = true;
    let { getFieldsValue } = form;
    let values = getFieldsValue();
    let file_type = values.type;
    request({
        url: '/api/get_file_list',
        data: {
            id: store.params.id,
            keyword: '',
            file_type: file_type
        },
        success: ({ table }) => {
            store.process_list = table || [];
        },
        fail: (res) => {
            this.warning(res);
        },
        complete: () => {
            store.loading = false;
        }
    })
};
warning = (res) => {
    Modal.warning({
        title: '警告',
        content: res.msg
    })
};

goBack = (e) => {
    e.preventDefault();
    history.push('/batch_process');
};
setEditVisible = (bool) => {
    store.setVisible({
        edit: bool
    });
};
setPartitionVisible = (bool) => {
    store.setVisible({
        partition: bool
    })
};
setFileBVisible = (bool) => {
    store.setVisible({
        file_b: bool
    })
};
setFileBCheckVisible = (bool) => {
    store.setVisible({
        file_b_check: bool
    });

};
setFileCVisible = (bool) => {
    store.setVisible({
        file_c: bool
    });
    // this.setState({
    //     myCKey: Math.random()
    // })
};
setFileEVisible = (bool) => {
    store.setVisible({
        file_e: bool
    });
    // this.setState({
    //     myEKey: Math.random()
    // })
};
patitionFileB = () => {
    store.setVisible({
        partition: true
    })
};
fileBItem = () => {
    if (this.canCreateFile(2)) {
        this.openModalAutoDestroy()
    }
    store.setVisible({
        file_b: true
    })
};
fileBCheckItem = () => {
    let { process_list } = store;
    let canCreateFile = true;
    process_list.forEach(v => {
        if (v.file_name.indexOf("B类对比文件") !== -1) {
            return canCreateFile = false;
        }
    })
    if (!canCreateFile) {
        this.openModalAutoDestroy()
    }
    store.setVisible({
        file_b_check: true
    })
};
fileCItem = () => {
    if (this.canCreateFile(3)) {
        this.openModalAutoDestroy()
    }
    store.setVisible({
        file_c: true
    })
};
fileEItem = () => {
    if (this.canCreateFile(5)) {
        this.openModalAutoDestroy()
    }
    store.setVisible({
        file_e: true
    })
};
editItem = (item) => {

};
deleteItem = (item) => {
    
};
//导出A类文件
exportFileA = (file_id) => {
    let { params } = store.match;
    let { id } = params;
    exportFile({
        url: '/api/get_file',
        data: {
            id: id,
            file_id: file_id,
        }
    })
}
}
export default new Handler();