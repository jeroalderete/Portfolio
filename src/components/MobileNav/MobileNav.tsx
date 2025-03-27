"use client"
import { NotebookPen } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ArrowLeft,
  ArrowRight,
  CircleUserRound,
  Menu,
  Store,
  UserCheck,
  UserPlus,
  UsersRound,
} from "lucide-react";
import React from "react";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.css";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import logoGuruia from "@/assets/logo-guruia.svg";
import Image from "next/image";

interface Props {
  title: string;
  href: string;
  description: string;
}

function MobileNav() {
  const [activeMenu, setActiveMenu] = useState("main");


  const componentsUser = [
    {
      title: "Dashboard",
      href: "/dashboard",
      description: "description1",
    },
    {
      title: "View Profile",
      href: `/user/`,
      description: "description2",
    },
  ];

  const components: Props[] = [
    {
      title: "Courses",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal excelent dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Online Diplomas",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Books",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Guides",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "PDF",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Audiobooks",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

  function DropdownItem(props: any) {
    return (
      <a
        href={props.href}
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  function DropdownWithoutIcon(props: any) {
    return (
      <a
        href={props.href} // Establecer href utilizando la propiedad href del componente
        className="menu-item bg-black "
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <nav className="xl:hidden ml-6 pt-5 b">
      <Sheet>
        <SheetTrigger className="align-middle ">
          <Menu size={30} />
        </SheetTrigger>
        <SheetContent
          className="flex flex-col gap-6 bg:black md:hidden w-[100%] "
        // side={"left"}
        >
          <div className="dropdown bg-black">
            <CSSTransition
              in={activeMenu === "main"}
              timeout={500}
              classNames="menu-primary"
              unmountOnExit
            >
              <div className="menu">
                <div className="mb-4">
                  <DropdownWithoutIcon href={"/"}>
                    <Image
                      src={"https://res.cloudinary.com/dvrc38ei4/image/upload/v1724639017/logosinfd_sm8z1b.png"}
                      alt="logo de guruia"
                      width={80}
                      height={20}
                    ></Image>
                  </DropdownWithoutIcon>
                </div>
                <Separator className="mb-4 bg-gray-300" />

                <div className='flex flex-col gap-10 pt-5 text-[1.2rem]'>

                  <DropdownWithoutIcon href="/experience">
                    <div className='flex gap-3'>
                      <NotebookPen />
                      <p>Experience</p>
                    </div>
                  </DropdownWithoutIcon>

                  <DropdownWithoutIcon href="/about">
                    <div className='flex gap-3'>
                      <NotebookPen />
                      <p>About</p>
                    </div>
                  </DropdownWithoutIcon>

                  <DropdownWithoutIcon href="/projects">
                    <div className='flex gap-3'>
                      <NotebookPen />
                      <p>Projects</p>
                    </div>
                  </DropdownWithoutIcon>

                  <DropdownWithoutIcon href="/contact">
                    <div className='flex gap-3'>
                      <NotebookPen />
                      <p>Contact</p>
                    </div>
                  </DropdownWithoutIcon>

                </div>
                <div>

                </div>

              </div>
            </CSSTransition>

            {/* segunda paginas */}
            <CSSTransition
              in={activeMenu === "settings"}
              timeout={500}
              classNames="menu-secondary"
              unmountOnExit
            >
              <div className="menu">
                <DropdownItem goToMenu="main" leftIcon={<ArrowLeft />}>
                  <h2>Back</h2>
                </DropdownItem>
                asdasd
              </div>
            </CSSTransition>

            <CSSTransition
              in={activeMenu === "animals"}
              timeout={500}
              classNames="menu-secondary"
              unmountOnExit
            // onEnter={calcHeight}
            >
              <div className="menu">
                <DropdownItem goToMenu="main" leftIcon={<ArrowLeft />}>
                  <h2>Back</h2>
                </DropdownItem>
                <DropdownWithoutIcon href="/shop?q=all&category=Courses&price=all&averageRating=all&sort=newest&page=1&shopCategory=Books&language=all">
                  Courses
                </DropdownWithoutIcon>
                <DropdownWithoutIcon href="/shop?q=all&category=Online-Diplomas&price=all&averageRating=all&sort=newest&page=1&shopCategory=Books&language=all">
                  Online Diplomas
                </DropdownWithoutIcon>
                <DropdownWithoutIcon href="/shop?q=all&category=Books&price=all&averageRating=all&sort=newest&page=1&shopCategory=Books&language=all">
                  Books
                </DropdownWithoutIcon>
                <DropdownWithoutIcon href="/shop?q=all&category=Guides&price=all&averageRating=all&sort=newest&page=1&shopCategory=Offers&language=all">
                  Guides
                </DropdownWithoutIcon>
                <DropdownWithoutIcon href="/shop?q=all&category=PDF&price=all&averageRating=all&sort=newest&page=1&shopCategory=Offers&language=all">
                  Pdf
                </DropdownWithoutIcon>
                <DropdownWithoutIcon href="/shop?q=Audio-Books&category=all&price=all&averageRating=all&sort=newest&page=1&shopCategory=Audiobooks&language=all">
                  Audiobooks
                </DropdownWithoutIcon>
              </div>
            </CSSTransition>

            <CSSTransition
              in={activeMenu === "dashboard"}
              timeout={500}
              classNames="menu-secondary"
              unmountOnExit
            // onEnter={calcHeight}
            >
              <div className="menu">
                <DropdownItem goToMenu="main" leftIcon={<ArrowLeft />}>
                  <h2>Back</h2>
                </DropdownItem>
                <DropdownWithoutIcon href="/dashboard">
                  DASHBOARD
                </DropdownWithoutIcon>
                <DropdownWithoutIcon href="/setting">
                  SETTINGS
                </DropdownWithoutIcon>
                <DropdownWithoutIcon href="/inbox">INBOX</DropdownWithoutIcon>
                <Separator />
                <h2 className="py-2 font-medium text-secondary">BUYER</h2>
                <DropdownWithoutIcon href="/new-proposal">
                  NEW PROPOSAL
                </DropdownWithoutIcon>
                <DropdownWithoutIcon href="/buyer-proposals">
                  MY PROPOSAL
                </DropdownWithoutIcon>
                <DropdownWithoutIcon href="/orders">ORDERS</DropdownWithoutIcon>
                <DropdownWithoutIcon href="/balance">
                  MY BALANCE AND INVOICES
                </DropdownWithoutIcon>
                <DropdownWithoutIcon href="/favorites">
                  MY FAVORITES
                </DropdownWithoutIcon>
                <Separator />
                <h2 className="py-2 text-secondary">SELLER</h2>
                <DropdownWithoutIcon href="/add-service">
                  POST A SERVICE
                </DropdownWithoutIcon>
                <DropdownWithoutIcon href="/services">
                  MY SERVICES
                </DropdownWithoutIcon>
                <DropdownWithoutIcon href="/my-proposals">
                  MY PROPOSALS
                </DropdownWithoutIcon>
                <DropdownWithoutIcon href="/appointments">
                  APPOINTMENTS
                </DropdownWithoutIcon>
                <DropdownWithoutIcon href="/job-board">
                  THERAPISTS WANTED
                </DropdownWithoutIcon>
              </div>
            </CSSTransition>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
