import {Blog} from '@/types';
import LatestBlogCard from '../ui/LatestBlogCard';
import BlogCard from '../ui/BlogCard';

const LatestBlogs = ({blogs}:{blogs: Blog[]}) => {

    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-center text-4xl my-5'>Latest Blogs from <span className='text-red-500'>Blogiz</span></h1>
            <p className='text-xl text-gray-400 text-center w-2/4 mx-auto'>Bangladesh, to <i>the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common. On the southern coast, the Sundarbans, an ---</i></p>
            <div className='grid grid-cols-2 gap-4 my-5'>
                {
                    blogs.slice(0, 2).map(blog=><LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard> )
                }
            </div>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    blogs.slice(2, 5).map(blog=><BlogCard key={blog.id} blog={blog}></BlogCard> )
                }
            </div>
        </div>
    );
};

export default LatestBlogs;