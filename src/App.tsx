import TCanvas from "@components/TCanvas"
import styled from "styled-components/macro"
//https://codesandbox.io/s/react-spring-typescript-968b1?file=/src/components/AnimatedRoutes.tsx

export const App = () => {
   return (
      <>
         <TCanvas />
      </>
   )
}

const Header = styled.header`
   position: absolute;

   color: white;
`
export default App
