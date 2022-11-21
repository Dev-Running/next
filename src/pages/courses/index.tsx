import {GetStaticProps} from "next";
import Head from "next/head";
import {CoursesCard} from "../../components/coursesCard";
import {HeaderNotLogged} from "../../components/header/HeaderNotLogged";
import {GetAllCoursesDocument} from "../../graphql/graphql";
import {client} from "../../http/apollo";
export default function Cursos({data}) {
  return (
    <>
      <HeaderNotLogged />
      <main className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-dark to-dark py-40 '>
        <Head>
          <title>Dev Running - Cursos </title>
        </Head>
        <h1 className='font-raj text-5xl font-medium uppercase text-neutral-300'>
          Todos os cursos disponíveis
        </h1>
        <section className='flex min-h-screen  w-full flex-wrap  items-center justify-center gap-12 gap-y-16 px-10 py-40'>
          {data.courses.map(course => {
            return <CoursesCard key={Math.random()} course={course} />;
          })}
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: await client
        .query({query: GetAllCoursesDocument})
        .then(res => res.data),
    },
    revalidate: 60 * 60,
  };
};
