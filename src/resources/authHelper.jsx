const isLoggedIn = () => {
    return localStorage.getItem("ietta_access_token") != null ? true: false
}
export default isLoggedIn;
export const storeToken = (key, value) => {
    localStorage.setItem(key, value);
    window.location.reload();
}
export const removeToken = (key) =>{
    localStorage.removeItem(key);
    window.localStorage.reload();
}