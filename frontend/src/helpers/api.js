export const onSubmit = (data) => alert(JSON.stringify(data));

export const sendGetRequest = (url, action, update= null, thunk ) => dispatch => {
    return fetch(url, {
        })
        .then((response) => response.json())
        .then((response) => dispatch(action(response)))
        .then(() => !!update ? dispatch(thunk()) : false)
        .catch((err) => {
            console.log(err);
            throw new Error(err)
        });
}





