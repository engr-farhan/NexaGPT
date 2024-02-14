import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  accessToken: "mfarhan",
  showAvatar: true,
};

// const GPTSlice = createSlice({
//   name: "gpt",
//   initialState: InitialState,
//   reducers: {
//     setAuth(state, action) {
//       const { accessToken } = action.payload;
//       state.accessToken = accessToken;
//     },
//     clearAuth(state, action) {
//       state = InitialState;
//     },
//     toggleShowAvatar(state) {
//       state.showAvatar = !state.showAvatar;
//     },
//   },
// });


const GPTSlice = createSlice({
  name: "gpt",
  initialState: InitialState,
  reducers: {
    initialState: InitialState,

    // setAuth(state, action) {
    //   const { accessToken } = action.payload;
    //   state.accessToken = accessToken;
    // },
    // clearAuth(state, action) {
    //   state = InitialState;
    // },
    // toggleShowAvatar(state) {
    //   state.showAvatar = !state.showAvatar;
    // },

    setAuth(state, action) {
      // const id = uuidv4();

      // const newToken = {
      //   id: id,
      //   content: "",
      // };
      const { accessToken } = action.payload;
         state.accessToken = accessToken;
      updateTokenLocalStorage([accessToken]);
    },
    updateToken(state, action) {
      const { accessToken } = action.payload;
      // const indexToUpdate = state.findIndex((item) => item.id === id);
      // if (indexToUpdate !== -1) {
      // const { accessToken } = action.payload;
      state.accessToken = accessToken;
      // }
      updateTokenLocalStorage([accessToken]);
    },
    clearAuth(state, action) {
      const { accessToken } = action.payload;

      // const id = action.payload;
      // const indexToRemove = state.findIndex((item) => item.id === id);
      // if (indexToRemove !== -1) {
        state.accessToken= "";
      // }
      updateTokenLocalStorage([accessToken]);
    },
    toggleShowAvatar(state) {
        state.showAvatar = !state.showAvatar;
      }
  }
});

function updateTokenLocalStorage(accessToken) {
  localStorage.setItem("accessToken", accessToken);
}

export const gptAction = GPTSlice.actions;
export default GPTSlice;
