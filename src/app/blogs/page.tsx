"use client"
import BlogCard from '@/components/ui/BlogCard';
import { useGetBogsQuery } from '@/redux/api/BaseApi';
import {Blog} from '@/types';


const BlogsPage = () => {
    // const rest = await fetch("http://localhost:5000/blogs",{
    //     cache: "no-store",
    // });
    // const blogs = await rest.json();

const {data: blogs, isLoading, isError, error} = useGetBogsQuery("");
// console.log(blogs);

    return (
        <div className='w-[90%] mx-auto'>
              <h1 className='text-center text-4xl my-5'>All Blogs from <span className='text-red-500'>Blogiz</span></h1>
              <p className='text-xl text-gray-400 text-center w-2/4 mx-auto'>Bangladesh, to <i>the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common. On the southern coast, the Sundarbans, an ---</i></p>
              <div className='grid grid-cols-3 gap-4 my-5'>
                {
                   blogs?.map((blog : Blog)=> (
                   <BlogCard key={blog.id} blog={blog}> </BlogCard>
                ))}
              </div>
        </div>
    );
};

export default BlogsPage;