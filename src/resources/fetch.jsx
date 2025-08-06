/**
 * @name Fetch
 * @param {string} URL http url where to send request.
 * @param {string} method GET | POST. Default method is GET.
 * @param {FormData} formData Optional data to sent along with request.
 * @returns returns promise that must be resolved.
 */
function Fetch(URL, method="get", formData=null, contentType="form", responseType = "json"){
    method = method.toLowerCase();
    let headers = {"Authorization": `${localStorage.getItem("ietta_access_token")}`}
    if (contentType === "json"){
      headers = {...headers, "Content-Type": "application/json"}
    }
    let request = fetch(URL,{
      method:method,
      body:formData,
      mode:"cors",
      headers:headers
    }).then(
      response => {
        if(responseType === "json")
         return response.json()
        else if(responseType === "zip")
          return response.blob()
      }
    )
    return request;
}
export default Fetch;
