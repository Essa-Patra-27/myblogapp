"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
// import HomeSlider from "@/components/HomeSlider/HomeSlider";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
// import categorieSlider from "@/components/Categories/categorieSlider";
import CategoriesSlider from "@/components/Categories/categoriesSlider";
import BlogsSlider from "@/components/blogcards/BlogsSlider";

export default function Home() {
  return (
    <main>
     <Navbar/>
     <HomeSlider/>
     {/* <categorieSlider/> */}
     <CategoriesSlider/>
     <BlogsSlider/>
<h1>this is a app</h1>
<h1>--FOOTER--</h1>
      <h1>this is blog app</h1>
    </main>
  )
}
