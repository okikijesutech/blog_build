import "./App.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BlogContainer from "../../conatiners/blogConatiner/BlogContainer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <BlogContainer />
      <Footer />
    </>
  );
}

export default App;
