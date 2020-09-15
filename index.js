const baseUrl = 'https://5f60907d90cf8d0016557f3a.mockapi.io/api/v1/users/';

/* getUsersList code here */
const getUsersList = () =>
    fetch(baseUrl).then((response) => response.json());


/* getUserById code here */
const getUserById = (userId) =>
    fetch(`${baseUrl}/${userId}`).then((response) => response.json());


/* createUser code here */
const createUser = (user) =>
    fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charser= utf-8",
        },
        body: JSON.stringify(user),
    });


/* updateUser code here */
const updateUser = (id, updatedUserData) =>
    fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charser= utf-8",
        },
        body: JSON.stringify(updatedUserData),
    });


/* deleteUser code here */
const deleteUser = (id) =>
    fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
    });
export { getUsersList, getUserById, createUser, updateUser, deleteUser }