import Image from "next/image";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center p-6">
        <div className="flex flex-col h-full w-full md:flex-row md:h-[70%] lg:w-[80%] 2xl:w-[60%] shadow-2xl rounded-md">
          {/* Left side with image */}
          <div className="w-full h-1/3 md:h-full md:w-1/2 relative flex justify-center items-center ">
            <Image
              src="/loginBg.png"
              fill
              className="object-cover"
              alt="Login Background"
            />
          </div>

          {/* Right side with login form */}
          {/* Always takes full width on small screens */}
          <div className="md:h-full md:w-1/2 bg-white flex flex-col p-10 gap-4">
            <h1 className="text-2xl font-bold ">Welcome</h1>
            <p className="mb-4 text-sm text-gray-600 lg:text-left">
              Log into your account or create a new one using social buttons
            </p>

            <button className="flex gap-4 px-4 py-2 ring-1 ring-orange-100 rounded-md text-gray-700 hover:bg-orange-300 text-sm">
              <Image
                src="/google.png"
                alt="Google Sign-in"
                className="mr-2"
                width={20}
                height={20}
              />
              Sign in with Google
            </button>

            <button className="flex gap-4 px-4 py-2 ring-1 ring-blue-100 rounded-md text-sm text-gray-700 hover:bg-orange-300">
              <Image
                src="/facebook.png"
                alt="Facebook Sign-in"
                className="mr-2"
                width={20}
                height={20}
              />
              Sign in with Facebook
            </button>
            {/* Help Link */}
            <a href="#" className="text-sm text-blue-600 hover:underline ">
              Have a problem? Contact us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
