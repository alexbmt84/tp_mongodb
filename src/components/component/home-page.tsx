"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { JSX, MouseEventHandler, SVGProps } from "react"
import { useRouter } from "next/navigation"

export function HomePage(props: { logoutProps: MouseEventHandler<HTMLButtonElement> | undefined, username: string | undefined }) {

  const router = useRouter();

  const redirectTables = () => {
    router.push("/tables")
  }

  const redirectContact = () => {
    router.push("/contact")
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-background sticky top-0 z-50 w-full border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center" prefetch={false}>
            <img src="https://cdn.icon-icons.com/icons2/1860/PNG/512/fooddome_118034.png" width={40} height={40} className="mr-5" alt={"logo"}></img>
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
            <Button onClick={props.logoutProps}>Logout</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <h1 className={"text-center font-bold text-5xl mb-16 mt-24"}>Welcome back, {props.username}</h1>

        <section className="bg-gradient-to-r from-primary to-primary/90 py-12 md:py-24 lg:py-32 lg:mt-28">
          <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Find your next favorite table
              </h1>
              <p className="text-lg text-primary-foreground/90 md:text-xl">
                Discover our top spots and get discounts on the best tables near you.
              </p>
              <div className="flex gap-4">
                <Button onClick={redirectContact}>Learn More</Button>
                <Button variant="outline" className="text-primary-foreground text-black" onClick={redirectTables}>
                  Book a table
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500} height={400} alt="Hero Image" className="rounded-lg shadow-lg"/>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:gap-12 md:px-6">
            <div className="space-y-2">
              <RocketIcon className="h-8 w-8 text-primary"/>
              <h3 className="text-xl font-bold">Innovative Dining</h3>
              <p className="text-muted-foreground">
                Our chefs use cutting-edge culinary techniques to deliver innovative dishes that will delight your taste
                buds and elevate your dining experience.
              </p>
            </div>
            <div className="space-y-2">
              <GaugeIcon className="h-8 w-8 text-primary"/>
              <h3 className="text-xl font-bold">Unparalleled Experience</h3>
              <p className="text-muted-foreground">
                Enjoy lightning-fast booking and unparalleled reliability with our high-performance reservation system,
                ensuring you get the best table every time.
              </p>
            </div>
            <div className="space-y-2">
              <UsersIcon className="h-8 w-8 text-primary"/>
              <h3 className="text-xl font-bold">Dedicated Service</h3>
              <p className="text-muted-foreground">
                Our dedicated team is committed to providing personalized service, ensuring your dining experience is
                seamless and memorable every step of the way.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div className="flex flex-col items-start space-y-4">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">Stay Ahead of the Curve</h2>
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
                  src="https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <img src="https://cdn.icon-icons.com/icons2/1860/PNG/512/fooddome_118034.png" width={40} height={40} className="mr-5" alt={"logo"}></img>
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
              <TwitterIcon className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Facebook" prefetch={false}>
              <FacebookIcon className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn" prefetch={false}>
              <LinkedinIcon className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function GaugeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function RocketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}