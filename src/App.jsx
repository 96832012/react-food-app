import { useEffect } from "react";
import Header from "./Components/Layouts/Header";
import Meals from "./Components/Meals";
import "./App.css";
import CartWrapper from "./Components/CartWrapper";

function App() {
  useEffect(() => {
    console.log("App is rendering");
  });

  return (
    <>
      <CartWrapper />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
