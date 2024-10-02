import { Provider } from "react-redux";
import "./App.css";
import BookList from "./components/BookList";
import Form from "./components/Form";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div className="order-2 xl:-order-1">
            <Header />
            <BookList />
          </div>
         <Form/>
        </div>
      </main>
    </Provider>
  );
}

export default App;
