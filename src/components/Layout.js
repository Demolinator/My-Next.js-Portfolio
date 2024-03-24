import React from "react";
import ParticlesContainer from "./ParticlesContainer";

const Layout = ({children, className=""}) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}>
            <div aria-hidden="true" className="absolute inset-y-16 inset-x-0 w-16 rounded-full animate-blob rotate-45 bg-gradient-to-b from-primaryDark dark:from-primary dark:to-purple-600 to-purple-600 blur-3xl mx-auto scale-y-150 sm:scale-y-50 dark:blur-3xl opacity-100 -z-10"></div>
            <div aria-hidden="true" className="absolute inset-y-16 inset-x-0 w-16 rounded-full animate-blob -rotate-45 bg-gradient-to-b from-primaryDark dark:from-primary dark:to-purple-600 to-purple-600 blur-3xl mx-auto scale-y-150 sm:scale-y-50 dark:blur-3xl opacity-100 -z-10"></div>
            {children}
        </div>
    )
}
 
export default Layout;