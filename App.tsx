import { ThemeProvider } from "styled-components/native";
import { Teams } from "./src/screens/Teams";
import theme from "@theme/index";
import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";

export default function App(){
  const [fontsLoadead] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return(
    <ThemeProvider theme={theme}>
      {!fontsLoadead ? <Teams /> : <Loading />}
    </ThemeProvider>
  )
}