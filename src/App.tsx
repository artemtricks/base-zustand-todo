import { Suspense } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Complited from "./pages/Complited";
import Task from "./components/Tasks";
import MainHeader from "./components/Header";
import { Layout } from "antd";
import MainForm from "./pages/MainForm";
import { Provider } from "react-redux";
import { store } from "./services/store";

const App = () => {
  return (
    <Layout>
      <div>
        <MainHeader />
        <Routes>
          <Route path="" element={<Home />} />
          <Route
            path="/form"
            element={
              <Suspense fallback={<div>Идет загрузка...</div>}>
                <MainForm />
              </Suspense>
            }
          />
          {/* <Route
            path="task/:id"
            element={
              <Suspense fallback={<div>Идет загрузка...</div>}>
                <Task />
              </Suspense>
            }
          /> */}
          <Route path="/complited" element={<Complited />} />
          <Route
            path="*"
            element={
              <Suspense
                fallback={<div className="container">Идет загрузка...</div>}
              >
                <div>Нет такой страницы</div>
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Layout>
  );
};

const AppWithRouts = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default AppWithRouts;
