import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('Haisenberg');
    const [isPeding, setIsPeding] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {title: title, content: content, author: author};
        setIsPeding(true);
        
        setTimeout(() => {
            fetch('http://localhost:8000/posts', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('Create a new blog!');
                setIsPeding(false);
                setTitle('');
                setContent('');
                setAuthor('Haisenberg');
                navigate('/');
            });
        }, 300)
        
        
    };

    return (
        <div className="create">
            <h2>Add a new Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post title</label>
                <input onChange={(e) => {setTitle(e.target.value)}} value={title} type="text" required/>

                <label>Post content</label>
                <input onChange={(e) => {setContent(e.target.value)}} value={content} type="text"/>

                <label>Author</label>
                <select onChange={(e) => {setAuthor(e.target.value)}} value={author}>
                    <option value="Tom Crus">Tom Crus</option>
                    <option value="Haisenberg">Haisenberg</option>
                    <option value="Sloult Gudman">Sloult Gudman</option>
                </select>

                {isPeding && <button disabled>adding post...</button>}
                {!isPeding && <button type="submit">Add New Post</button>}
                
            </form>
        </div>
    );
}

export default Create;