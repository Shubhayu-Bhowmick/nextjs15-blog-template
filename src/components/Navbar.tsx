import React from "react";
import { auth, signIn, signOut } from "../../auth";
import Link from "next/link";
//import { LogOut, User } from "lucide-react";
import { Menu, User, LogOut, LogIn } from "lucide-react";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="relative">
      <nav className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold">
                MiniBlog
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {session && session?.user ? (
                <>
                  <Link
                    href={`/blog/create`}
                    className="px-3 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    Create Post
                  </Link>
                  <Link
                    href={`/profile`}
                    className="px-3 py-2 border-2 border-transparent hover:border-black transition-colors duration-200"
                  >
                    <User size={20} className="inline-block mr-1" />
                    Profile
                  </Link>

                  <form
                    action={async () => {
                      "use server";
                      await signOut({ redirectTo: "/" });
                    }}
                  >
                    <button className="px-3 py-2 border-2 border-transparent hover:border-black transition-colors duration-200">
                      <LogOut size={20} className="inline-block mr-1" />
                      Logout
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <form
                    action={async () => {
                      "use server";
                      await signIn("github");
                    }}
                  >
                    <button className="px-3 py-2 border-2 border-transparent hover:border-black transition-colors duration-200">
                      <LogIn size={20} className="inline-block mr-1" />
                      Login
                    </button>
                  </form>
                </>
              )}
            </div>
            <details className="md:hidden">
              <summary className="list-none p-2">
                <Menu size={24} />
              </summary>
              <div className="absolute left-0 right-0 bg-white border-b-2 border-black">
                <div className="px-2 pt-4 pb-3 space-y-1 sm:px-3">
                  {session && session?.user ? (
                    <>
                      <Link
                        href="/blog/create"
                        className="block px-3 py-2 hover:bg-black hover:text-white transition-colors duration-200"
                      >
                        Create Post
                      </Link>
                      <Link
                        href="/profile"
                        className="block px-3 py-2 border-2 border-transparent hover:border-black transition-colors duration-200"
                      >
                        <User size={20} className="inline-block mr-1" />
                        Profile
                      </Link>
                      <form
                        action={async () => {
                          "use server";
                          await signOut({ redirectTo: "/" });
                        }}
                      >
                        <button className="block px-3 py-2 border-2 border-transparent hover:border-black transition-colors duration-200">
                          <LogOut size={20} className="inline-block mr-1" />
                          Logout
                        </button>
                      </form>
                    </>
                  ) : (
                    <>
                      <form
                        action={async () => {
                          "use server";
                          await signIn("github");
                        }}
                      >
                        <button className="block px-3 py-2 border-2 border-transparent hover:border-black transition-colors duration-200">
                          <LogIn size={20} className="inline-block mr-1" />
                          Login
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </details>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
