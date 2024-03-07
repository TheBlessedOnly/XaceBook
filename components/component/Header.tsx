/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export function Header() {
  return (
    <header className="h-16 border-b bg-blue-700">
      <div className="container flex items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2 text-xl font-semibold" href="#">
          <FlagIcon className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
<div className="flex-1 flex items-center justify-center gap-4 md:gap-6">
  <div className="relative w-full max-w-xs flex justify-center items-center mt-2 ">
    
    <input
      className="w-full bg-white shadow-none appearance-none rounded-xl placeholder-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:placeholder-gray-200 outline-none p-2"   
      type="search"
    />
    <div className="flex justify-center items-center">
    <button
      className="absolute right-3 h-10 w-10 flex items-center justify-center rounded-full border border-gray-200 bg-blue-600 text-gray-500 shadow-sm transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 peer-disabled:opacity-70 dark:border-gray-800 dark:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 "
    >
      <SearchIcon className="absolute left-3 h-10 w-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 stroke-white" />
    </button>
    </div>
  </div>
</div>
        <div className="relative inline-block text-sm">
          <div className="flex items-center gap-2 rounded-full w-10 h-10 overflow-hidden border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 peer-disabled:opacity-70 dark:border-gray-800  dark:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
            <img
              alt="Avatar"
              className="rounded-full object-cover object-center"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="peer-disabled:pointer-events-none">JD</span>
            <ChevronDownIcon className="w-4 h-4 peer-disabled:cursor-not-allowed translate-y-1" />
          </div>
          <div className="z-10 py-1 w-40 mx-2 rounded-lg shadow-lg border border-gray-200 bg-white divide-y divide-gray-200 top-full right-0 absolute min-w-[180px] max-h-60 overflow-auto rounded-t-xl dark:border-gray-800 dark:bg-gray-950 dark:divide-gray-800 dark:top-full dark:rounded-t-xl dark:z-10 dark:shadow-lg ">
            <div>
              <UserIcon className="w-4 h-4 mr-2 inline-block" />
              Profile
            </div>
            <div>
              <CogIcon className="w-4 h-4 mr-2 inline-block" />
              Settings
            </div>
            <div />
            <div>
              <LogOutIcon className="w-4 h-4 mr-2 inline-block" />
              Logout
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


function FlagIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ChevronDownIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function CogIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  )
}


function LogOutIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}
