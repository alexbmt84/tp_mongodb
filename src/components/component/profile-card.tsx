import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import {JSX, SVGProps} from "react"

export function ProfileCard(props: { username: string, email: string }) {
  return (
      <Card className="w-full max-w-md mx-auto mb-28">
        <CardHeader className="bg-muted/20 p-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder-user.jpg"/>
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <h2 className="text-2xl font-bold">{props.username}</h2>
              <p className="text-muted-foreground">@{props.username}</p>
              <p className="text-muted-foreground">{props.email}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 grid gap-4">
          <div className="grid gap-2">
            <p className="text-muted-foreground">
              {props.username} is a passionate software engineer with a strong background in full-stack web development.
              He loves
              building innovative applications that solve real-world problems.
            </p>
          </div>
          <Separator/>
          <div className="grid gap-2 text-muted-foreground grid-cols-2">
            <div>
              <span className="font-medium">Location:</span>
            </div>
            <div>
              <span>San Francisco, CA</span>
            </div>
            <div>
              <span className="font-medium">Social:</span>
            </div>
            <div className="flex items-center gap-2">
              <Link href="#" className="hover:text-primary" prefetch={false}>
                <GithubIcon className="w-5 h-5"/>
              </Link>
              <Link href="#" className="hover:text-primary" prefetch={false}>
                <TwitterIcon className="w-5 h-5"/>
              </Link>
              <Link href="#" className="hover:text-primary" prefetch={false}>
                <LinkedinIcon className="w-5 h-5"/>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
  )
}

function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
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


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
