// import { View, Text } from "react-native";
// import React, { useContext, useEffect, useReducer } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebaseConfig";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const StateContext = useContext();

// const initial = {
//   isAuthenticated: false,
//   user: null,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload,
//       };
//     case "LOGOUT":
//       return {
//         ...state,
//         isAuthenticated: false,
//         user: null,
//       };
//     default:
//       return state;
//   }
// };

// const AppContext = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initial);
//   const sharedState = { state, dispatch };

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         AsyncStorage.setItem("userToken", JSON.stringify(user));
//         dispatch({ type: "LOGIN", payload: user });

//         // ...
//       } else {
//         // User is signed out
//         AsyncStorage.removeItem("userToken");
//         dispatch({ type: "LOGOUT" });
//         // ...
//       }
//     });
//   }, [AsyncStorage]);

//   return (
//     <StateContext.Provider value={sharedState}>
//       {children}
//     </StateContext.Provider>
//   );
// };

// export default AppContext;
