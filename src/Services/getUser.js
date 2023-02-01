const API_ROUTE = process.env.REACT_APP_API_ROUTE

export const getUserInfo = async () => {
    //Fetch user
    const res = await fetch(`${API_ROUTE}/user`)
    const data = await res.json();
    //Await y fetch a restricciones
    const restrictionsRes = await fetch(`${API_ROUTE}/user/${data.data.id_usuario}/restrictions`);
    const restrictionsData = await restrictionsRes.json();
    //Export hacia cardUser
    const exportData = [data.data, restrictionsData.data[0]]
    return exportData
}
