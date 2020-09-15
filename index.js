const baseUrl = 'https://5f60907d90cf8d0016557f3a.mockapi.io/api/v1/tasks/';

/* getUsersList code here */
const getUsersList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(res => console.log(res))
};

getUsersList();

/* getUserById code here */
const getUserById = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`)
        .then(response => response.json())
        .then(res => console.log(res))
}
getUserById(2);

// /* createUser code here */
const createUser = data => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
};


// /* updateUser code here */
const updateUser = (taskId, data) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
};


// /* deleteUser code here */
const deleteUser = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    })
};

export { getUsersList, getUserById, createUser, updateUser, deleteUser };