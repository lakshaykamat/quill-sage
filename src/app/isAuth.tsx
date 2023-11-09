
"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { isAuthenticated } from "./lib/isAuth";


export default function isAuth(Component: any) {
  return async function IsAuth(props: any) {
    const auth =  isAuthenticated;
console.log(true && auth)

    useEffect(() => {
      if (!auth) {
        return redirect("/login");
      }
    }, []);


    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}