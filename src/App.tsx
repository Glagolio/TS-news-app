import React from "react";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <div>
      <SharedLayout />
      <NewsPage />
    </div>
  );
}

export default App;
