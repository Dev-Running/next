import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { AiFillBook } from "react-icons/ai"
import { GrTechnology } from "react-icons/gr"
import { MdDirectionsBoat } from "react-icons/md"
import { TbWaveSawTool } from "react-icons/tb"
import { HeaderNotLogged } from "../components/header/HeaderNotLogged"

const Home: NextPage = () => {
  return (
    <>
      <HeaderNotLogged />
      <main className="flex  w-full flex-col items-center justify-center gap-10 pt-40">
        <Head>
          <title>Dev Running - Descobrindo o futuro</title>
        </Head>

        <section className="mb-80  flex w-full flex-col items-center  justify-center gap-72">
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-10 font-raj text-5xl font-bold uppercase">
              <TbWaveSawTool className="animate-pulse" />
              <h1>DE O PRIMEIRO PASSO</h1>{" "}
              <TbWaveSawTool className="animate-pulse" />
            </div>
            <h2 className="font-poppins font-medium uppercase">
              EM BUSCA DO CONHECIMENTO
            </h2>
          </div>
          <div className="-ml-28 flex items-center justify-center gap-96">
            <div>
              <h2 className="font-poppins font-medium uppercase">
                NAVEGUE EM DIRECAO AO
              </h2>
              <h1 className="font-raj text-5xl font-medium uppercase">
                SEU PRIMEIRO{" "}
                <span className="rounded-lg bg-dark py-2 px-7 font-bold text-primary">
                  <strong className="animate-pulse">EMPREGO</strong>
                </span>
              </h1>
            </div>
            <MdDirectionsBoat className="scale-[300%] text-9xl drop-shadow-md" />
          </div>
        </section>
        <section className="flex w-full flex-col items-center justify-center gap-40 bg-gradient-to-b from-dark to-black py-4  px-20 pb-60 text-dark drop-shadow-2xl">
          <div className="flex items-center justify-center gap-40 pt-20">
            <div className="rounded-lg bg-green-500 p-10 drop-shadow-xl">
              <GrTechnology className="text-9xl" />
              {/* <h1 className='font-raj text-9xl'>0%</h1> */}
            </div>
            <div className="flex flex-col items-center justify-center text-neutral-100">
              <h1 className="font-raj text-5xl font-bold uppercase">
                COM AS TECNOLOGIAS
              </h1>
              <h2 className="font-poppins text-3xl uppercase">
                MAIS ATUALIZADAS DO MERCADO
              </h2>
            </div>
            <div className="rounded-lg bg-green-500 p-10 drop-shadow-xl">
              <GrTechnology className="text-9xl" />
            </div>
          </div>
          <div className="h-[28rem] w-1/2 bg-black drop-shadow-2xl"></div>
          <div>
            <Link href="/cursos" passHref>
              <a className="flex items-center justify-center gap-3 rounded-md bg-primary px-6 py-2 font-raj text-2xl font-medium drop-shadow-md transition-colors hover:bg-yellow-500">
                <AiFillBook />
                VER CURSOS
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
