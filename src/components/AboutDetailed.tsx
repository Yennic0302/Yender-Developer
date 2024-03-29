import type { Dispatch, SetStateAction } from "react";
import Books from "../icons/AboutIcons/Books";
import Code from "../icons/AboutIcons/Code";
import Emoji from "../icons/AboutIcons/Emoji";
import Languages from "../icons/AboutIcons/Languages";
import Person from "../icons/AboutIcons/Person";
import Work from "../icons/AboutIcons/Work";
import Close from "../icons/Close";
import Css from "../icons/tecnologies/Css";
import Express from "../icons/tecnologies/Express";
import Html from "../icons/tecnologies/Html";
import Javascript from "../icons/tecnologies/Javascript";
import Nestjs from "../icons/tecnologies/Nestjs";
import NextJs from "../icons/tecnologies/NextJs";
import Nodejs from "../icons/tecnologies/Nodejs";
import PostgresSQL from "../icons/tecnologies/PostgresSQL";
import Prisma from "../icons/tecnologies/Prisma";
import ReactIcon from "../icons/tecnologies/ReactIcon";
import Redux from "../icons/tecnologies/Redux";
import SocketIo from "../icons/tecnologies/SocketIo";
import Tailwind from "../icons/tecnologies/Tailwind";
import Typescript from "../icons/tecnologies/Typescript";
import ExpirienceTimeline from "./ExpirienceTimeline";
import StudiesTimeline from "./StudiesTimeline";
import TecnologyLevel from "./TecnologyLevel";

export default function AboutDetailed({
  setShowAbout,
}: {
  setShowAbout: Dispatch<SetStateAction<boolean>>;
}) {
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const header = document.querySelector(".header");

    if (e.currentTarget.scrollTop > 0) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  };
  return (
    <div
      onScroll={handleScroll}
      className="appear-modal fixed overflow-auto top-0 left-0  w-screen h-screen transition-all bg-[--modal-bg] backdrop-blur-md z-[100]"
    >
      <section className="flex relative flex-col text-[--card-text] w-full h-max main-container">
        <nav className="w-full sticky top-0  flex justify-end p-2 px-6 sm:px-12 lg:px-24 z-50 transition-all header">
          <span onClick={() => setShowAbout(false)}>
            <Close style="size-11 cursor-pointer hover:scale-[1.3] transition-all" />
          </span>
        </nav>
        <article className="flex flex-wrap flex-col py-6 md:py-0 md:flex-row px-2 sm:px-12 lg:px-24 w-full gap-8">
          <article className="flex  justify-center ">
            <div className="flex flex-col gap-y-6">
              <img
                src="/profile-picture.jpg"
                className="w-[20rem] h-[25rem] object-cover object-center rounded-lg overflow-hidden"
                alt="profile-picture"
              />
              <div className="flex flex-col text-lg gap-2">
                <h3 className="font-semibold">
                  Name:
                  <span className="font-normal text-[--card-semi-text]">
                    {" "}
                    Yender Rodriguez
                  </span>
                </h3>
                <h3 className="font-semibold">
                  Ocupation:
                  <span className="font-normal text-[--card-semi-text]">
                    {" "}
                    Web Developer
                  </span>
                </h3>
                <h3 className="font-semibold">
                  Age:
                  <span className="font-normal text-[--card-semi-text]">
                    {" "}
                    21
                  </span>
                </h3>
                <h3 className="font-semibold">
                  Location:
                  <span className="font-normal text-[--card-semi-text]">
                    {" "}
                    Caracas, Venezuela
                  </span>
                </h3>
                <h3 className="font-semibold">
                  Experience Years:
                  <span className="font-normal text-[--card-semi-text]">
                    {" "}
                    +2
                  </span>
                </h3>
              </div>
            </div>
          </article>
          <article className="flex-1 flex flex-col h-full gap-y-14 pb-20 md:pb-0 md:h-[90vh] md:overflow-auto px-2">
            <div className="flex flex-col gap-y-4">
              <h2 className="text-2xl text-[--card-text] font-bold flex items-center gap-2">
                <span>
                  <Person style="size-8" />
                </span>
                About me
              </h2>
              <p className="text-[--card-semi-text]  text-balance">
                Interesed in figure out how to solve problems of an efficient
                way, focused in little details and in a good performance in my
                work, my expirience helps me out analizing the problems from
                many points of view and provide different solutions using the
                tools that are within my reach.
              </p>
            </div>
            <div className="flex flex-col gap-y-6">
              <h2 className="text-2xl text-[--card-text] font-bold flex items-center gap-2 ">
                <span>
                  <Languages style="size-8" />
                </span>
                Languages
              </h2>
              <h3 className="font-semibold">
                Spanish:
                <span className="font-normal text-[--card-semi-text]">
                  {" "}
                  Native Language
                </span>
              </h3>
              <h3 className="font-semibold">
                English:
                <span className="font-normal text-[--card-semi-text]">
                  {" "}
                  Basic
                </span>
              </h3>
            </div>

            <div className="flex flex-col gap-y-6">
              <h2 className="text-2xl text-[--card-text] font-bold flex items-center gap-2">
                <span>
                  <Work style="size-8" />
                </span>
                Experience
              </h2>
              <ExpirienceTimeline />
            </div>
            <div className="flex flex-col gap-y-6">
              <h2 className="text-2xl text-[--card-text] font-bold flex items-center gap-2">
                <span>
                  <Books style="size-8" />
                </span>
                Studies
              </h2>
              <StudiesTimeline />
            </div>
            <div className="flex flex-col gap-y-6">
              <h2 className="text-2xl text-[--card-text] font-bold flex items-center gap-2">
                <span>
                  <Code style="size-8" />
                </span>
                Tecnologies
              </h2>
              <div className="flex flex-wrap gap-4 ">
                <div className="flex items-center gap-x-2 border-[2px] px-5 rounded-full py-[0.1rem] border-green-400 text-green-400 font-normal text-lg text-[--main-text]">
                  <div className="size-2 bg-green-400 rounded-full"></div> Basic
                </div>
                <div className="flex items-center gap-x-2  border-[2px] px-5 rounded-full py-[0.1rem] border-yellow-400 text-yellow-400 font-normal text-lg text-[--main-text]">
                  <div className="size-2 bg-yellow-400 rounded-full"></div>{" "}
                  Intermidiate
                </div>
                <div className="flex items-center gap-x-2 border-[2px] px-5 rounded-full py-[0.1rem] border-red-500 text-red-500 font-normal text-lg text-[--main-text]">
                  <div className="size-2 bg-red-500 rounded-full"></div>{" "}
                  Advanced
                </div>
              </div>
              <div className="flex flex-wrap gap-14 py-6 justify-center ">
                <TecnologyLevel level="Intermidiate">
                  <Html style="size-16" />
                </TecnologyLevel>

                <TecnologyLevel level="Basic">
                  <Css style="size-16" />
                </TecnologyLevel>
                <TecnologyLevel level="Intermidiate">
                  <Tailwind style="size-16" />
                </TecnologyLevel>

                <TecnologyLevel level="Intermidiate">
                  <Javascript style="size-16" />
                </TecnologyLevel>
                <TecnologyLevel level="Basic">
                  <Typescript style="size-16" />
                </TecnologyLevel>

                <TecnologyLevel level="Intermidiate">
                  <ReactIcon style="size-16" />
                </TecnologyLevel>

                <TecnologyLevel level="Intermidiate">
                  <NextJs style="size-16" />
                </TecnologyLevel>
                <TecnologyLevel level="Basic">
                  <Redux style="size-16" />
                </TecnologyLevel>

                <TecnologyLevel level="Intermidiate">
                  <Nodejs style="size-16" />
                </TecnologyLevel>

                <TecnologyLevel level="Basic">
                  <Nestjs style="size-16" />
                </TecnologyLevel>

                <TecnologyLevel level="Intermidiate">
                  <Express style="size-16" />
                </TecnologyLevel>
                <TecnologyLevel level="Intermidiate">
                  <SocketIo style="size-16" />
                </TecnologyLevel>

                <TecnologyLevel level="Basic">
                  <Prisma style="size-16" />
                </TecnologyLevel>
                <TecnologyLevel level="Basic">
                  <PostgresSQL style="size-16" />
                </TecnologyLevel>
              </div>
            </div>
            <div>
              <h2 className="text-2xl text-[--card-text] font-bold flex items-center gap-2">
                <span>
                  <Emoji style="size-8" />
                </span>
                Personal Skills
              </h2>
              <ul className="text-[--card-semi-text] ">
                <li className="text-lg">
                  <span className="text-[--card-text] text-6xl">.</span> Fast
                  learner
                </li>
                <li className="text-lg">
                  <span className="text-[--card-text] text-6xl">.</span>{" "}
                  Emotional control
                </li>
                <li className="text-lg">
                  <span className="text-[--card-text] text-6xl">.</span> Polite
                </li>
                <li className="text-lg">
                  <span className="text-[--card-text] text-6xl">.</span> Good
                  listener
                </li>
                <li className="text-lg">
                  <span className="text-[--card-text] text-6xl">.</span>{" "}
                  Attention to detail
                </li>
              </ul>
            </div>
          </article>
        </article>
      </section>
    </div>
  );
}
