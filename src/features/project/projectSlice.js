import { createSlice } from "@reduxjs/toolkit";
/**
 * @name projectSlice
 * @returns returns actions and the reducer for projectSlice.
 */
export const projectSlice = createSlice({
    name: 'project',
    initialState: {
        projectName: '',
        projectTags: [],
        projectFiles: [],
        fileSelected: '',
        projectList: [],
    },
    reducers: {
        changeDetails: (state, action) => {
            state.projectName = action.payload.name
            state.projectTags = action.payload.tags
            state.projectFiles = action.payload.files
        },
        changeFileName: (state, action) => {
            state.fileSelected = action.payload.fileName;
            state.currentPageNo = 0;
        },
        addFile: (state, action) => {
            state.projectFiles.push(action.payload.uploadedFile)
        },
        addTags: (state, action) => {
            state.projectTags = action.payload
        },
        clearProjectDetails: (state) => {
            state.projectName = ''
            state.projectTags = []
            state.projectFiles = []
            state.fileSelected = ''
        },
        setProjectList: (state, action) => {
            state.projectList = action?.payload;
        }
    }
})

export const {
    changeDetails,
    changeFileName,
    addFile,
    addTags,
    clearProjectDetails,
    setProjectList } = projectSlice.actions
export default projectSlice.reducer
