import { DataContextProvider } from "./Context/dataContext";
import Me from "./Context/Me";
function App() {


  return (
<DataContextProvider>
  <Me/>
</DataContextProvider>
  )
}

export default App
