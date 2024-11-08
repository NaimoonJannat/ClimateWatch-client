// import React from 'react';
import PageBanner from '../Shared/PageBanner/PageBanner';
import img from '../../assets/banner/blogs_banner.jpg'
import BlogsCard from './BlogsCard';
import useBlogs from "../Shared/Hooks/useBlogs";


const Blogs = () => {
    const [blogs] = useBlogs()
     console.log(blogs) 
    return (
        <div >
            <PageBanner image={img} />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-7xl mx-auto ">

                {
                    blogs.map((blog, index) => (
                        <BlogsCard
                            key={index}
                            blogCards={blog}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;