let BASE_URL = "http://127.0.0.1:5000";
let ACCOUNTS = "/accounts";
let PROJECTS = "/projects";
let FILES = "/files";
let PROFILE_INFO = "/profileInfo";
let apiRoutes = {
    SIGNUP: BASE_URL + ACCOUNTS + "/signup",
    LOGIN: BASE_URL + ACCOUNTS + "/login",
    PROJECT: BASE_URL + PROJECTS + "/project",
    FILE: BASE_URL + FILES + "/file",
    IMG: BASE_URL + PROFILE_INFO + "/get_profile?img=" + localStorage.getItem("ietta_access_token"),
    STATS: BASE_URL + PROFILE_INFO + "/get_stats",
    ADD_TAGS: BASE_URL + PROJECTS + "/add_tags",
    UPDATE_ANNOTATIONS: BASE_URL + FILES + "/update_annotations",
    IMPORT_EXPORT: BASE_URL + PROJECTS + "/import_export",
    DELETE_PROJECT: BASE_URL + PROJECTS + "/delete_project",
}

export default apiRoutes;