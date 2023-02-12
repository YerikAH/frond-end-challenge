import Footer from "./components/Footer"
import Main from "./components/Main"
import Navigation from "./components/Navigation"
import { FetchProvider } from "./context/dataContext"

function App() {
  return (
    <FetchProvider>
      <>
        <Navigation/>
        <Main />
        <Footer />
      </>
    </FetchProvider>
  )
}

export default App
