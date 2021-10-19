import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website',
         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nesciunt officia fugiat cumque animi, dignissimos porro culpa, hic mollitia quos velit explicabo dolorum perferendis, consectetur id sequi enim dolore aspernatur!',
         author: 'mario',
         id: 1,
        },
        {title: 'Welcome party!',
         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nesciunt officia fugiat cumque animi, dignissimos porro culpa, hic mollitia quos velit explicabo dolorum perferendis, consectetur id sequi enim dolore aspernatur!',
         author: 'lugui',
         id: 2
        },
        {title: 'Unknown',
         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nesciunt officia fugiat cumque animi, dignissimos porro culpa, hic mollitia quos velit explicabo dolorum perferendis, consectetur id sequi enim dolore aspernatur!',
         author: 'yoshi',
         id: 3
        },
        {title: 'Random',
         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nesciunt officia fugiat cumque animi, dignissimos porro culpa, hic mollitia quos velit explicabo dolorum perferendis, consectetur id sequi enim dolore aspernatur!',
         author: 'yoshi',
         id: 4
        }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    const[name, setName] = useState('luigi')

    useEffect(()=> {
        console.log('use effect ran')
        console.log(name)
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs!" handleDelete={handleDelete}/>
            <button onClick={() => setName('mario')}>Change Name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;