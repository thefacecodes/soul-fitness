import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthLoading from "../screens/AuthLoading";
import OnboardStack from "../screens/OnboardStack";
import MainAppStack from "./MainAppStack";

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: MainAppStack,
      Auth: OnboardStack,
    },
    {
      initialRouteName: "AuthLoading",
    }
  )
);
