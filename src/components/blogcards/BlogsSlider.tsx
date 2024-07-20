import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CategoryCard from './BlogCard';
import BlogCard from './BlogCard';

function BlogsSlider() {
    // function CategoriesSlider() {


    const Blogs = [
        {
            name: "Blog 1",
            path: "#",
            bgcolor: "pink",
        },
        {
            name: "Blog 2",
            path: "#",
            bgcolor: "pink",
        },
        {
            name: "Blog 3",
            path: "#",
            bgcolor: "pink",

        },
        {
            name: "Blog 4",
            path: "#",
            bgcolor: "pink",
        },
        {
            name: "Blog 5",
            path: "#",
            bgcolor: "pink",
        },
        {
            name: "Blog 6",
            path: "#",
            bgcolor: "pink",
        },
        {
            name: "Blog 7",
            path: "#",
            bgcolor: "pink",
        }
    ]

return (
    <div>
        <h1 style={{
            fontSize: "20px",
            fontWeight: "",

            margin: "10px 5px",

        }}>Latest Blogs</h1>

        <Swiper
            slidesPerView={1}
            spaceBetween={1}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                '@0.75': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '@1.00': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                '@1.50': {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {
                Blogs.map((blog) => {
                    return (
                        <SwiperSlide>
                            <BlogCard {...blog} />
                        </SwiperSlide>
                    )

                })}



        </Swiper>
    </div>
)

}
export default BlogsSlider