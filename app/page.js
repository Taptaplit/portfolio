import { Typewriter } from "nextjs-simple-typewriter";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-poppins)]">
      <div className="px-20 py-20 h-screen flex items-center">
        <div className="glass w-full h-full flex flex-col justify-center items-center px-20">
          <p className="font-medium text-2xl mb-12">WELCOME TO MY PORTFOLIO</p>
          <h1 className="text-7xl font-medium text-white">
            I am{" "}
            <span className="text-blue-500">
              <Typewriter
                words={["Vismay Patel.", "a Coder.", "an Innovator.", "an Engineer."]}
                loop={true}
                typeSpeed={110}
                deleteSpeed={70}
                delaySpeed={2500}
              />
            </span>
          </h1>
          <div className="flex mt-6 space-x-6">
            <a href="https://github.com/Taptaplit"><div className="p-2 bg-slate-700 border-slate-500 border-2 rounded-md">
              <img className="w-10" src="/github.png"/>
            </div></a>
            <a href="https://devpost.com/pateltaptaplit"><div className="p-2 bg-slate-700 border-slate-500 border-2 rounded-md">
              <img className="w-10" src="/devpost.png"/>
            </div></a>
            <a href="https://www.linkedin.com/"><div className="p-2 bg-slate-700 border-slate-500 border-2 rounded-md">
              <img className="w-10" src="/linkedin.png"/>
            </div></a>
          </div>
        </div>
      </div>
      <div className="h-screen px-20 py-20">
        <h1>h1</h1>
      </div>
    </div>
  );
}
