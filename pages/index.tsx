import type { NextPage } from 'next'
import Image from 'next/image';
import Layout from '../components/Layout'
import { ImageLoader } from '../types/params';

export const myLoader = ({ src }: ImageLoader)=>{
  return `${src}`;
}

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="pt-40 px-40">
        <div className="w-full items-center flex justify-between h-[70vh]">
          <div className="hidden 2xl:block absolute w-[115vw] h-[100vh] -top-[60vh] -left-[10vw] -z-10 -rotate-[12deg] bg-gradient-to-br from-purple-500  via-indigo-500 to-sky-500"></div>
          <div>
            <p className="text-8xl font-medium">Hey, I Am</p>
            <p className="mt-2 text-9xl font-medium text-[#3592EF]">Taptaplit</p>
            <p className="mt-6 text-3xl">#Freelancer <span className="ml-2">#Fullstack-Developer</span></p>
            <p className="w-[500px] mt-2 text-gray-600">I am a freelancer and fullstack developer that has worked for Tech Optimum and was co-ceo of a Perseverance Tutoring. I have over 5 years of coding experince with profeciency in over 10 languages/frameworks.</p>
            <button className="mt-8 bg-[#3592EF] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Work With Me</button>
          </div>
          <div className="w-[30vw] h-[70vh] relative overflow-hidden mr-2">
            <Image loader={myLoader} src="/person.svg" layout="fill" objectFit="contain"></Image>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
