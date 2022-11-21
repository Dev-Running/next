import Head from "next/head";
import Image from "next/image";
import {BsPlusLg} from "react-icons/bs";
import {MdOutlineGroups} from "react-icons/md";
import {SiKubernetes} from "react-icons/si";
import {TbNetwork} from "react-icons/tb";
import {HeaderNotLogged} from "../../components/header/HeaderNotLogged";
export default function About() {
  return (
    <>
      <HeaderNotLogged />
      <main className='flex flex-col items-center justify-center gap-40 pt-40'>
        <Head>
          <title>Dev Running - Sobre</title>
        </Head>
        <section className='flex w-full items-center justify-center gap-40'>
          <h1 className='font-raj text-5xl font-medium'>
            COMO A <strong className='font-bold'>DR</strong> SURGIU?{" "}
          </h1>
          <div className='flex w-[28rem] flex-col items-center justify-center gap-5 rounded-xl bg-dark p-10 font-poppins text-base text-white drop-shadow-2xl'>
            <p className='text-justify'>
              A{" "}
              <strong className='font-raj text-2xl font-bold text-primary'>
                Dev Running
              </strong>{" "}
              foi criada com o intuito de formar os novos desenvolvedores da
              comunidade e do mercado de trabalho.
            </p>
            <p className='text-justify'>
              Com um sistema de educacao mais acessível para as pessoas
              desempregadas e jovens que estão iniciando sua carreira,
              pretendemos chegar ao topo do ensino no Brasil, levando o
              conhecimento necessário para uma pessoa comum alcancar cargos que
              são tão desejados pelos jovens do nosso país.
            </p>
          </div>
        </section>
        <section className='flex w-full items-center justify-center gap-40'>
          <div className=' flex w-[28rem] flex-col items-center justify-center gap-5 rounded-xl bg-dark p-14 text-lg text-neutral-100 drop-shadow-2xl'>
            <div className='rounded-full shadow-2xl  shadow-black drop-shadow-2xl'>
              <Image
                quality={100}
                src='/83848032.jpg'
                className='rounded-full '
                width={300}
                height={300}
                alt=''
              />
            </div>
            <h1 className=' mt-3 flex h-20 w-full items-center justify-center gap-2 text-sm font-medium '>
              LUCAS{" "}
              <strong className='mb-1 text-xl font-bold text-white'>
                LAURENTINO
              </strong>{" "}
              CAZEMIRO
            </h1>
            <p className=' -mt-12 text-sm font-bold text-primary'>
              Full Stack Developer
            </p>
            <a
              href='http://www.laurentino.vercel.app'
              target='_blank'
              rel='noreferrer'
              className=' -mt-2 flex w-full items-center justify-center gap-2 text-sm font-medium transition-colors hover:text-neutral-600 '>
              www.laurentino.vercel.app
            </a>
          </div>
          <h1 className='font-raj text-5xl font-medium'>
            QUEM FUNDOU A <strong className='font-bold'>DR</strong>?
          </h1>
        </section>
        <section className='flex h-[40rem] w-full flex-col items-center justify-between bg-dark '>
          <h1 className='mt-32 font-raj text-4xl font-medium text-white'>
            O QUE A <strong className='text-5xl text-primary'>DR</strong> TEM A
            OFERECER?
          </h1>
          <div className='flex h-40 w-full justify-center gap-20'>
            <div className='flex h-52 w-52  -rotate-12 cursor-pointer flex-col items-center justify-center gap-4 rounded-full bg-white font-raj font-bold drop-shadow-2xl transition-all duration-500 hover:-translate-y-5 hover:-translate-x-5'>
              <BsPlusLg className='text-7xl' />
              <p>VISIBILIDADE</p>
              <p className='-mt-6'>NA COMUNIDADE</p>
            </div>
            <div className='flex h-52 w-52 -translate-y-20  -rotate-6 cursor-pointer flex-col items-center justify-center gap-4 rounded-full bg-white font-raj font-bold drop-shadow-2xl transition-all duration-500 hover:-translate-y-24 hover:-translate-x-5'>
              <MdOutlineGroups className='text-7xl' />
              <p>ATIVIDADES</p>
              <p className='-mt-6'>EM GRUPO</p>
            </div>
            <div className='flex h-52 w-52 -translate-y-32  cursor-pointer flex-col items-center justify-center gap-4 rounded-full bg-white font-raj font-bold drop-shadow-2xl  transition-all duration-500 hover:-translate-y-40 '>
              <TbNetwork className='text-7xl' />
              <p>INDICACOES DOS</p>
              <p className='-mt-6'>ALUNOS DESTAQUES</p>
            </div>
            <div className='flex h-52 w-52 -translate-y-20  rotate-6 cursor-pointer flex-col items-center justify-center gap-4 rounded-full bg-white font-raj font-bold drop-shadow-2xl transition-all duration-500 hover:-translate-y-24 hover:translate-x-5'>
              <SiKubernetes className='text-7xl' />
              <p>CONHECIMENTOS EM</p>
              <p className='-mt-6'>GRANDES SISTEMAS</p>
            </div>
            <div className='flex h-52 w-52 rotate-12  cursor-pointer flex-col items-center justify-center gap-4 rounded-full bg-white font-raj font-bold drop-shadow-2xl transition-all duration-500 hover:-translate-y-5 hover:translate-x-5'>
              <TbNetwork className='text-7xl' />
              <p>SUPORTE TOTAL</p>
              <p className='-mt-6'>AOS ALUNOS</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
