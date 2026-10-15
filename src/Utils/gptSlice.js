import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice(
    {
        name: 'gpt',
        initialState: {
            showGptPage : false,
            gptMovies: null,
        },
        reducers: {
                    toggleShowGptPage : (state) => {
                       state.showGptPage = !state.showGptPage;
                    },
                    addGptMovies: (state, action) => {
                        state.gptMovies = action.payload;
                    }
                }
    }
)

export const { toggleShowGptPage,addGptMovies } = gptSlice.actions;


export default gptSlice.reducer;