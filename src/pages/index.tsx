import AboutCard from "@/components/Cards/AboutCard";
import ContactCard from "@/components/Cards/ContactCard";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ProjectLayout from "@/components/Projects/ProjectLayout";
import { type GetServerSideProps, type NextPage } from "next";
import { type Session } from "next-auth";
import { type GetSessionParams, getSession } from "next-auth/react";
// import { Session } from "next-auth";
// import { useSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
// import Link from "next/link";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from "./_app";
import TechnologyCard from "@/components/Cards/TechnologyCard";

const Home: NextPage<{ userSession: Session }> = ({ userSession }) => {

  // Function to display the text character by character
  function typeWriter(text: string, element: HTMLElement) {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < text.length) {
        element.textContent += text.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the typing speed by changing the interval (in milliseconds)
  }
  const [animateContact, setAnimateContact] = React.useState<boolean>(false)
  const [animateAbout, setAnimateAbout] = React.useState<boolean>(false)
  const [animateTypeWritter] = React.useState<boolean>(false)

  const darkTheme = React.useContext(ThemeContext);

  useEffect(() => {
    typeWriter("Welcome to my website", document.getElementById("typed-text") as HTMLElement);
  }, [animateTypeWritter])
  useEffect(() => {
    if (userSession) {
      toast.success(`Welcome ${userSession?.user?.name as string}!`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  })
  return (
    <>

      <Head>
        <title>Doc&apos;s Portfolio</title>
        <meta name="ActuallyDoc" content="@Doc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-ful">
        <div className="sm:w-full h-full w-full bg-white   md:min-h-screen bg-gradient-to-b from-[#1e1629] to-[#242038]">
          <div className="w-full shadow-xl">
            <Navbar animateAbout={setAnimateAbout} animateContact={setAnimateContact} />
          </div>
          <div>
            <div className="">
              <div className="typewriter">
                <h1 className="text-white text-4xl font-bold text-center mt-10">
                  <span id="typed-text"></span>
                </h1>
              </div>
              <div className="lg:flex space-x-5 mt-10">
                <div>
                  <AboutCard animate={animateAbout} />
                </div>
                <div>
                  <ContactCard animate={animateContact} />
                </div>
                <div>
                  <TechnologyCard />
                </div>
              </div>
              <div>
                <div className="site-divider"></div>
              </div>
              <div>
                <div >
                  <h1 className="text-slate-400 text-4xl my-5 font-bold text-center mt-10">Project&rsquo;s</h1>
                </div>
                <div>
                  <div>
                    <ProjectLayout />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Footer />
            </div>
          </div>

        </div>
        <ToastContainer />
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context: GetSessionParams | undefined) => {
  const userSession = await getSession(context);
  // console.log(userSession?.user.name);
  //Maybe fetch the user data here idk
  // if (!userSession) {
  //   return {
  //     redirect: {
  //       destination: "/api/auth/signin",
  //       permanent: false,
  //     },
  //   };
  // }
  return {
    props: { userSession },
  };
}