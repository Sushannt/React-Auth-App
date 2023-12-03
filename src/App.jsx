import { AppStateProvider } from "./contexts/AppStateContext";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <AppStateProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<SignInPage />} />
        </Routes>
      </Router>
    </AppStateProvider>
  );
}

export default App;
