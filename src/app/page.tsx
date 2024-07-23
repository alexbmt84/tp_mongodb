"use client";

import {HomePage} from "@/components/component/home-page";
import axios from "axios";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

type User = {
    _id: number;
    username: string;
    email: string;
}
export default function Home() {

    const router = useRouter();
    const [data, setData] = useState<User | null>(null)

    useEffect(() => {
        getUserDetails()
    }, []);

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        setData(res.data.data)
    }

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)

        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <HomePage logoutProps={logout} username={data?.username}/>
        </main>
    );
}
