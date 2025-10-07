import { ThemeProvider } from "styled-components";
import { Teams } from "./src/screens/Teams";
import theme from "@theme/index";

export default function App(){
  return(
    <ThemeProvider theme={theme}>
      <Teams />
    </ThemeProvider>
  )
}