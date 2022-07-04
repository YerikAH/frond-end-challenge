import Content from "./components/Content";
import Nav from "./components/Nav";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <>
      <LanguageProvider>
        <ThemeProvider>
          <Nav />
          <Content />
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
