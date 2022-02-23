import Head from "next/head"
import Image from "next/image"
export default function Home() {
  return (
    <div className="min-h-screen px-2 flex flex-col justify-center items-center h-screen text-red">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20 flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="m-0 leading-5 text-7xl pb-10">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="leading-6 text-2xl">
          Get started by editing{' '}
          <code className="bg-[#fafafa] rounded-md p-3 text-lg font-['Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono']">pages/index.js</code>
        </p>

        <div className="flex items-center content-center flex-wrap max-w-3xl mt-12">
          <a href="https://nextjs.org/docs" className="m-4 p-6 text-left text-inherit no-underline border border-[#eaeaea] rounded-[10px] transition-colors w-5/12">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="m-4 p-6 text-left text-inherit no-underline border border-[#eaeaea] rounded-[10px] transition-colors w-5/12">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="m-4 p-6 text-left text-inherit no-underline border border-[#eaeaea] rounded-[10px] transition-colors w-5/12"
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="m-4 p-6 text-left text-inherit no-underline border border-[#eaeaea] rounded-[10px] transition-colors w-5/12"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="w-full h-24 border-t border-[#eaeaea] flex justify-center items-center">
        <a
          className="flex justify-center flex-grow items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
