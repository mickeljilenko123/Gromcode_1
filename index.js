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
getUserById(1);

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
createUser();

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
updateUser();

// /* deleteUser code here */
const deleteUser = (userId) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
    })
};

export { getUsersList, getUserById, createUser, updateUser, deleteUser };