"use client";

import { HomePage } from "@/components/component/home-page";
import axios from "axios";
import { useRouter } from "next/navigation";
import {RestaurantList} from "@/components/component/tables-container";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {FacebookIcon, GaugeIcon, LinkedinIcon, RocketIcon, TwitterIcon, UsersIcon} from "lucide-react";

export default function Home() {

  const router = useRouter();

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
        <div className="flex flex-col min-h-dvh">
          <header className="bg-background sticky top-0 z-50 w-full border-b">
              <div className="container flex h-16 items-center justify-between px-4 md:pl-10 md:pr-2">
              <Link href="/" className="flex items-center" prefetch={false}>
                <img src="https://cdn.icon-icons.com/icons2/1860/PNG/512/fooddome_118034.png" width={40} height={40}
                     className="mr-5" alt={"logo"}></img>
                <span className="sr-only">Table Goat</span>
              </Link>
              <nav className="hidden lg:flex gap-4">
                <Link
                    href="/"
                    className="text-sm font-medium text-foreground hover:underline underline-offset-4"
                    prefetch={false}
                >
                  Home
                </Link>
                <Link
                    href={"/tables"}
                    className="text-sm font-medium text-foreground hover:underline underline-offset-4"
                    prefetch={false}
                >
                  Tables
                </Link>
                <Link
                    href={"/contact"}
                    className="text-sm font-medium text-foreground hover:underline underline-offset-4"
                    prefetch={false}
                >
                  Contact
                </Link>
                <Link
                    href={"/profile"}
                    className="text-sm font-medium text-foreground hover:underline underline-offset-4"
                    prefetch={false}
                >
                  Profile
                </Link>
              </nav>
              <div className="ml-auto">
                <Button onClick={logout}>Logout</Button>
              </div>
            </div>
          </header>
          <main className="flex-1">
            <section className="py-12 md:py-24 lg:py-24">
              <RestaurantList/>
            </section>
            <section className="bg-muted py-12 md:py-24 lg:py-32">
              <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-16 md:px-6">
                <div className="flex flex-col items-start space-y-4">
                  <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">Don't miss any chance to miss the best discounts</h2>
                  <p className="text-muted-foreground md:text-xl">
                    Sign up for our newsletter and be the first to know about our latest updates, industry insights, and
                    exclusive offers.
                  </p>
                  <form className="w-full max-w-md">
                    <div className="flex gap-2">
                      <Input type="email" placeholder="Enter your email" className="flex-1"/>
                      <Button type="submit">Subscribe</Button>
                    </div>
                  </form>
                </div>
                <div className="flex justify-center">
                  <img
                      src="https://images.unsplash.com/photo-1468072114808-903e572b8ead?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      width={500}
                      height={400}
                      alt="Newsletter Image"
                      className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>
          </main>
          <footer className="bg-background border-t">
            <div
                className="container flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:gap-0 md:py-12 md:px-6">
              <div className="flex items-center gap-4">
                <Link href="#" className="flex items-center" prefetch={false}>
                  <img src="https://cdn.icon-icons.com/icons2/1860/PNG/512/fooddome_118034.png" width={40} height={40}
                       className="mr-5" alt={"logo"}></img>
                  <span className="sr-only">Table Goat</span>
                </Link>
                <p className="text-sm text-muted-foreground">&copy; 2024 Table Goat. All rights reserved.</p>
              </div>
              <nav className="flex gap-4">
                <Link
                    href="#"
                    className="text-sm font-medium text-foreground hover:underline underline-offset-4"
                    prefetch={false}
                >
                  Privacy
                </Link>
                <Link
                    href="#"
                    className="text-sm font-medium text-foreground hover:underline underline-offset-4"
                    prefetch={false}
                >
                  Terms
                </Link>
                <Link
                    href="#"
                    className="text-sm font-medium text-foreground hover:underline underline-offset-4"
                    prefetch={false}
                >
                  Contact
                </Link>
              </nav>
              <div className="flex gap-4">
                <Link href="#" aria-label="Twitter" prefetch={false}>
                  <TwitterIcon className="h-6 w-6 text-foreground hover:text-primary transition-colors"/>
                </Link>
                <Link href="#" aria-label="Facebook" prefetch={false}>
                  <FacebookIcon className="h-6 w-6 text-foreground hover:text-primary transition-colors"/>
                </Link>
                <Link href="#" aria-label="LinkedIn" prefetch={false}>
                  <LinkedinIcon className="h-6 w-6 text-foreground hover:text-primary transition-colors"/>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </main>
  );
}
