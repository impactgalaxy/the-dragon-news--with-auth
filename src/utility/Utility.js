const getValueFromLocalStore = (id) => {
    const parseValue = JSON.parse(localStorage.getItem(id)) || [];
    return parseValue;
}
const setValueToLocalStore = (id, comment) => {
    const valueFromLs = getValueFromLocalStore(id);
    console.log(valueFromLs);
    valueFromLs.push(comment);
    localStorage.setItem(id, JSON.stringify(valueFromLs));
}
export { setValueToLocalStore, getValueFromLocalStore };