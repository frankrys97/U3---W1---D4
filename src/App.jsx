import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar.jsx";
import MyFooter from "./components/MyFooter.jsx";
import Welcome from "./components/Welcome.jsx";
// import AllBooks from "./components/AllBooks.jsx";
// import AllBooks2 from "./components/AllBooks2.jsx";
// import SingleBook from "./components/SingleBook.jsx";
// import fantasy from "./books/fantasy.json";
// import horror from "./books/horror.json";
import BookList from "./components/BookList.jsx";
import CarouselHome from "./components/MyCarousel.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <MyNavbar />
      </header>
      <main>
        <CarouselHome />
        {/* <SingleBook book={fantasy[0]} /> */}
        <Welcome brand="EpiBooks" />
        {/* <AllBooks /> */}
        {/* <AllBooks2 /> */}
        <BookList />
      </main>
      <MyFooter name="EpiBooks"> </MyFooter>
    </div>
  );
}

export default App;
