"use client";
import React from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function SignupPage() {

    const router = useRouter();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })


    const onSignup = async () => {
        try {
            const response = await axios.post("/api/users/signup", user);
            router.push("/login");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
        }
    }

    return (

        <div className="flex justify-center items-center h-screen bg-background">


            <div className="w-full max-w-md p-8 bg-card rounded-lg shadow-lg">

                <img src="https://cdn.icon-icons.com/icons2/1860/PNG/512/fooddome_118034.png" width={40}
                     height={40}
                     className="mb-10 mx-auto" alt={"logo"}></img>


                <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>

                <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                        id="username"
                        className={"my-3"}
                        type="text"
                        placeholder="Enter your username"
                        value={user.username}
                        onChange={(e) => setUser({...user, username: e.target.value})}
                    />
                </div>

                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        className={"my-3"}
                        placeholder="Enter your email"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                </div>

                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        className={"my-3"}
                        placeholder="Enter your password"
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                </div>

                <Button onClick={onSignup} className="w-full my-5">
                    Sign Up
                </Button>

                <div className="mt-4 text-center text-sm text-muted-foreground">

                    Already have an account?{" "}

                    <Link href={"/login"}>Visit login page</Link>

                </div>

            </div>

        </div>

    )

}