import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import deleteBlog from "./deleteBlog";

const BlogDetails = () => {

    const {id} = useParams();
    const {posts: blog, isLoading, error} = useFetch('http://localhost:8000/posts/' + id);
    console.log(blog);
    const usenavigate = useNavigate();

    const afterDelete = () => {
        usenavigate('/');
    };

    // const deleteBlog = () => {
    //     fetch('http://localhost:8000/posts/' + id, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         usenavigate('/');
    //     });
    // };
    
    return (
        <div className="blog-body">
            {isLoading && <div>Loading</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p className="auther">Written bay: {blog.author}</p>
                    <div>{blog.body}</div>
                    
                </article>
            )}
            <button onClick={() => {deleteBlog(id, afterDelete)}}>Delete</button>
        </div>
    )
};

export default BlogDetails;