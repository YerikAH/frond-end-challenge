import Main from "./components/Main"
import Navigation from "./components/Navigation"
import { FetchProvider } from "./context/dataContext"

function App() {
  return (
    <FetchProvider>
      <>
        <Navigation/>
        <Main />
      </>
    </FetchProvider>
  )
}

export default App
