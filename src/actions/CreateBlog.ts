"use server";
import {Blog} from '@/types';



export const createBlog =async(data : Blog) => {
    const res = await fetch("http://localhost:5000/blogs",{
        method : "POST", 
        headers:{
            "content-type": "application/JSON",
        },
        body : JSON.stringify(data),
        cache: "no-store",
    });

    const blogInfo = res.json();
    return blogInfo;
};

export default createBlog;