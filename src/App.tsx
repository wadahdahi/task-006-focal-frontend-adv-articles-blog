import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store";
import Header from "./components/constant-components/Header";
import { Outlet } from "react-router";
import Footer from "./components/constant-components/Footer";

const App: React.FC = () => {
  console.log("App is rendering");
  return (
    <Provider store={store}>
      <div className="min-h-screen">
        <Header logo="/images/logo/w-design-logo.png" />
        <main>
          <Outlet />
        </main>
        <Footer logo="/images/logo/w-design-logo.png" />
      </div>
    </Provider>
  );
};

export default App;
