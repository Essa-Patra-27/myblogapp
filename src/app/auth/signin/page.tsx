"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

import '../auth.css'

export default function Signup() {
    return (
        <div className="authout">
            <Navbar />
            <div className="authin">
                <div className="left">

                </div>
                <div className="right">
                <form style={{
                        display:'flex',
                        flexDirection:'column',
                    }}>

                        <div className="forminput_cont">
                            <label>Email</label>
                            <input type="email" placeholder="Enter you Email" />
                        </div>
                        <div className="forminput_cont">
                            <label>Password</label>
                            <input type="text" placeholder="Enter your password" />
                        </div>


                        <button type="submit" className="main_button">Register</button>
                        <p className="authlink">Don't have an account?
                            <Link href={"/auth/signup"}>login</Link></p>
                    </form>
                </div>
            </div>


        </div>
    )
}