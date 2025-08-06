import { createSlice } from "@reduxjs/toolkit";
/**
 * @name pageSlice
 * @returns returns actions and the reducer for pageSlice - To know the page name while navigation.
 */
export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        currentPage: '',
        currentPageContent: '',
        currentPageAnnotations: '',
        annotationChanges: false,
    },
    reducers: {
        changeCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setCurrentPageContent: (state, action) => {
            state.currentPageContent = action?.payload
        },
        setCurrentPageAnnotations: (state, action) => {
            state.currentPageAnnotations = action?.payload
        },
        changesMade: (state, action) => {
            state.annotationChanges = action?.payload
        },
        resetEditor: (state) => {
            state.currentPage = ''
            state.currentPageContent = ''
            state.currentPageAnnotations = ''
            state.annotationChanges = false
        }
    }
})

export const {
    changeCurrentPage,
    setCurrentPageAnnotations,
    setCurrentPageContent,
    changesMade,
    resetEditor } = pageSlice.actions
export default pageSlice.reducer
