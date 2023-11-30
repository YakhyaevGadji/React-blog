import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar/>
                <main className="main">
                   <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/create" element={<Create/>}/>
                        <Route path="/blogs/:id" element={<BlogDetails/>}/>
                        <Route path="*" element={<NotFound/>}/>
                   </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;