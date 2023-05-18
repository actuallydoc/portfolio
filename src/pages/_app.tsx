import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React, { useEffect } from "react";
import "@/styles/globals.css";

export const ThemeContext = React.createContext("light");


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  // Get theme from local storage if it's there
  const [darkTheme, setDarkTheme] = React.useState("light");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setDarkTheme(theme);
    }

  }, []);

  return (

    <SessionProvider session={session}>
      <ThemeContext.Provider value={darkTheme}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </SessionProvider>
  );
};

export default MyApp;
