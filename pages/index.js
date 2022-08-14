import Link from "next/link";
import AppLayout from "../components/layoutes/AppLayout";
import Links from "../components/Links";
import Started from "../components/Started";

export default function Home() {
  return (
    <AppLayout>

      <section className="max-w-8xl mx-auto px-4 lg:px-1.5 mt-16">
        <h1 className='text-hero-sm md:text-7xl xl:text-10xl mb-4 text-center lg:text-left'>
          <span className="bg-text-gradeint bg-clip-text text-transparent">
          Fewer Wells.<br/>
          </span>
          More Production.
        </h1>
        <p className='text-4xl lg:text-headline-lg text-center lg:text-left mb-5 lg:w-3/4'>
        AcreTech AI Helps Customers Build Accurate Preditions of where and how to drill. Drill smarter with AI.
        </p>

        <div className="w-full lg:w-96 my-14 text-xl bg-white text-black py-21 rounded-xl text-center ">
          <Link href="/" >
            Talk to Sales
          </Link>
        </div> 
      </section>

      <Links />
      <Started />
    </AppLayout>   
  )
}
