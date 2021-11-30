export const onSubmit = (data) => alert(JSON.stringify(data));

export const sendGetRequest = (url, action, update= null, thunk ) => dispatch => {
    return fetch(url, {
        // mode: 'cors',
        // credentials: "include",
        // headers: [
        //     ["Content-Type", "application/json"],
        //     ["Content-Type", "text/plain"]
        // ],
        // referrerPolicy: 'no-referrer',
    })
        .then((response) => response.json())
        .then((response) => dispatch(action(response)))
        .then(() => !!update ? dispatch(thunk()) : false)
        .catch((err) => {
            console.log(err);
            throw new Error(err)
        });
}

export const sendPostRequest = (url, action, data, update= null, thunk ) => dispatch => {
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((response) => dispatch(action(response)))
        .then(() => !!update ? dispatch(thunk()) : false)
        .catch((err) => {
            console.log(err);
            throw new Error(err)
        });
}


