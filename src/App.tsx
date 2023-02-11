import Navigation from "./components/Navigation"
import { FetchProvider } from "./context/dataContext"

function App() {
  return (
    <FetchProvider>
      <Navigation/>
    </FetchProvider>
  )
}

export default App
