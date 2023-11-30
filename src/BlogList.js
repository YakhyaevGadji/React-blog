import { Link } from "react-router-dom";
import deleteBlog from "./deleteBlog";

const BlogList = (parm) => {
    
    console.log(parm);
    const blogs = parm.blog.map((post) => {
        

        return (
            <div className="post-preview" key={post.id}>
                <Link to={`/blogs/${post.id}`}>
                    <h2>{post.title}</h2>
                    <p>{post.author}</p>
                </Link>
                
                <button onClick={() => {deleteBlog(post.id, parm.setUpdateFlag(!parm.updateFlag))}} className="btn-delete">Delete</button>
            </div>
        );
    });

    return (
        <div className="blog">
            {blogs}
        </div>
    );
};

export default BlogList;