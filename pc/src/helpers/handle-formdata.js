let handleFormData = (data) => {
    let ret = new FormData();
    Object.keys(data).map(k => {
        ret.append(k, data[k]);
    });
    return ret;
};
export default handleFormData;