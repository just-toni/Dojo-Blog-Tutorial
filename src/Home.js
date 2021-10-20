import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    const[name, setName] = useState('luigi')

    useEffect(()=> {
        fetch("http://localhost:8000/blogs")
        .then
    }, []);

    return ( 
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs!" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;