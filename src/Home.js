import { useState } from "react";

import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {
    const [updateFlag, setUpdateFlag] = useState(false);
    const {posts, isLoading, error} = useFetch('http://localhost:8000/posts', updateFlag);
    

    return (
        <div className="blog">
            {error && <h3>errror to fetch...</h3>}
            {isLoading && <h3>Loading...</h3>}
            {posts && <BlogList blog={posts} updateFlag={updateFlag} setUpdateFlag={setUpdateFlag}/>}
        </div>
    );
}

export default Home;