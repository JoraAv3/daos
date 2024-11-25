
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import { TelegramProvider } from "./Providers/User";
import { SDKProvider } from "@telegram-apps/sdk-react";
import Events from "./pages/Events";

function App() {
  return (
    <SDKProvider>
      <TelegramProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="events" element={<Events />} />
            </Route>
          </Routes>
        </Router>
      </TelegramProvider>
    </SDKProvider>
  );
}

export default App;
