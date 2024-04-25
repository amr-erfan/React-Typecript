import { Provider } from "react-redux"
import CounterView from "./counter/CounterView"
import { store } from "./store/store"
function App() {

  return (
    <>
    <Provider store={store} >
      <CounterView/>
    </Provider>
</>
  )
}

export default App
