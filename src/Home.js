import { useState } from "react";

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
        }
    ]);
    return ( 
        <div className="home">
            {blogs.map = (blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            )}
        </div>
    );
}
 
export default Home;