"use client";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SignupPage() {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

      const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            router.push("/");
            
        } catch (error:any) {
            console.log("Login failed", error.message);
            
        }finally {
            setLoading(false);
        }
    }


    return (
            <div className="flex items-center justify-center min-h-screen bg-background">

                <Card className="w-full max-w-md p-6 md:p-8 border-none bg-card rounded-lg shadow-lg">

                    <CardHeader>

                        <img src="https://cdn.icon-icons.com/icons2/1860/PNG/512/fooddome_118034.png" width={40}
                             height={40}
                             className="mb-10 mx-auto" alt={"logo"}></img>

                        <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>

                        <CardDescription className={"text-center"}>Enter your email and password to access your account.</CardDescription>

                    </CardHeader>

                    <CardContent className="space-y-4">

                        <div className="space-y-2">

                            <Label htmlFor="email">Email</Label>

                        <Input 
                            id="email" 
                            type="email" 
                            placeholder="Email" 
                            className="rounded-md" 
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value})}
                            required
                        />

                    </div>

                    <div className="space-y-2">

                        <Label htmlFor="password">Password</Label>

                        <Input 
                            id="password" 
                            type="password" 
                            className="rounded-md" 
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}
                            placeholder="password"
                            required 
                        />

                    </div>

                    </CardContent>

                    <CardFooter>

                    <div className="flex flex-col w-full">

                        <Button 
                            onClick={onLogin}
                            className="w-full rounded-md mb-5 mt-3"
                        >
                            Sign In
                        </Button>


                        <div className="mt-4 text-center text-sm text-muted-foreground w-full">

                            Already have an account?{" "}

                            <Link href={"/signup"} className={"text-center mx-auto"}>Signup</Link>

                        </div>

                    </div>

                    </CardFooter>

                </Card>

            </div>
    )

}