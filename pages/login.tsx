import Link from "next/link";
import { useState } from "react";
import Meta from "@/components/layout/meta";
import { LoadingDots } from "@/components/shared/icons";
import Image from "next/image";

export default function Login() {
  const [signInClicked, setSignInClicked] = useState(false);
  const [noSuchAccount, setNoSuchAccount] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <Meta title="Sign in to Gitbook" />
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Gitbook Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </Link>
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className="text-sm text-gray-500">
            Use your email address to sign in.
          </p>
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setSignInClicked(true);
            alert(email);
          }}
          className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
        >
          <div>
            <label htmlFor="email" className="block text-xs text-gray-600">
              EMAIL ADDRESS
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="panic@thedis.co"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => {
                setNoSuchAccount(false);
                setEmail(e.target.value);
              }}
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
          </div>
          <button
            disabled={signInClicked}
            className={`${
              signInClicked
                ? "cursor-not-allowed border-gray-200 bg-gray-100"
                : "border-gitblue bg-gitblue text-white hover:bg-white hover:text-gitblue"
            } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
          >
            {signInClicked ? (
              <LoadingDots color="#808080" />
            ) : (
              <p>Send magic link</p>
            )}
          </button>
          {noSuchAccount ? (
            <p className="text-center text-sm text-red-500">
              No such account.{" "}
              <Link href="/register" className="font-semibold text-red-600">
                Sign up
              </Link>{" "}
              instead?
            </p>
          ) : (
            <p className="text-center text-sm text-gray-600">
              Dont have an account?{" "}
              <Link href="/register" className="font-semibold text-gitblue">
                Sign up
              </Link>{" "}
              for free.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
