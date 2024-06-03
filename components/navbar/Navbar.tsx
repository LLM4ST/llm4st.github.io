import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {HERO_TITLE} from "@/constants";

function MenuIcon(props: any) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

const Navbar = () => {

    return (
        <nav className="sticky top-0 bg-gray-900 shadow z-50 lg:flex">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
                <div className="flex items-center">
                    <div className="-ml-2 mr-6 flex items-center">
                        <Link href="#">
                            <span className="font-bold text-white">{HERO_TITLE}</span>
                        </Link>
                    </div>
                    <div className="hidden lg:flex space-x-4">
                        <Link
                            href="#intro"
                            className="font-bold text-white hover:bg-yellow-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm"
                        >
                            INTRO
                        </Link>
                        <Link
                            href="#cfp"
                            className="font-bold text-white hover:bg-yellow-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm"
                        >
                            CFP
                        </Link>
                        <Link
                            href="#key-dates"
                            className="font-bold text-white hover:bg-yellow-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm"
                        >
                            KEY DATES
                        </Link>
                        <Link
                            href="#schedule"
                            className="font-bold text-white hover:bg-yellow-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm"
                        >
                            SCHEDULE
                        </Link>
                        <Link
                            href="#speakers"
                            className="font-bold text-white hover:bg-yellow-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm"
                        >
                            SPEAKERS
                        </Link>
                        <Link
                            href="#organizers"
                            className="font-bold text-white hover:bg-yellow-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm"
                        >
                            ORGANIZERS
                        </Link>
                        <Link
                            href="#program-committee"
                            className="font-bold text-white hover:bg-yellow-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm"
                        >
                            PROGRAM COMMITTEE
                        </Link>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full text-white">
                                <MenuIcon className="h-6 w-6" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <div className="grid gap-4 py-6">
                                <Link
                                    href="#intro"
                                    className="font-bold flex w-full items-center py-2 text-lg hover:bg-yellow-500 hover:text-gray-900"
                                    prefetch={false}
                                >
                                    INTRO
                                </Link>
                                <Link
                                    href="#cfp"
                                    className="font-bold flex w-full items-center py-2 text-lg hover:bg-yellow-500 hover:text-gray-900"
                                    prefetch={false}
                                >
                                    CFP
                                </Link>
                                <Link
                                    href="#key-dates"
                                    className="font-bold flex w-full items-center py-2 text-lg hover:bg-yellow-500 hover:text-gray-900"
                                    prefetch={false}
                                >
                                    KEY DATES
                                </Link>
                                <Link
                                    href="#schedule"
                                    className="font-bold flex w-full items-center py-2 text-lg hover:bg-yellow-500 hover:text-gray-900"
                                    prefetch={false}
                                >
                                    SCHEDULE
                                </Link>
                                <Link
                                    href="#speakers"
                                    className="font-bold flex w-full items-center py-2 text-lg hover:bg-yellow-500 hover:text-gray-900"
                                    prefetch={false}
                                >
                                    SPEAKERS
                                </Link>
                                <Link
                                    href="#organizers"
                                    className="font-bold flex w-full items-center py-2 text-lg hover:bg-yellow-500 hover:text-gray-900"
                                    prefetch={false}
                                >
                                    ORGANIZERS
                                </Link>
                                <Link
                                    href="#program-committee"
                                    className="font-bold flex w-full items-center py-2 text-lg hover:bg-yellow-500 hover:text-gray-900"
                                    prefetch={false}
                                >
                                    PROGRAM COMMITTEE
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
