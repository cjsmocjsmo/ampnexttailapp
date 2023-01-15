import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="bg-black flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Ekco</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold text-purple-600">
          <p className="text-blue-600">Ekco</p>
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Link
            href="/searchpage"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold text-purple-600">Search &rarr;</h3>
            <p className="mt-4 text-xl text-purple-600">
              Search by artist album or song.
            </p>
          </Link>

          <Link
            href="/mainplaylistpage"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold text-purple-600">Playlists &rarr;</h3>
            <p className="mt-4 text-xl text-purple-600">
              Create and listen to Playlists.
            </p>
          </Link>


          <Link
            href="/firstartistpage"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold text-purple-600">Artists &rarr;</h3>
            <p className="mt-4 text-xl text-purple-600">
              A complete listing of all artists.
            </p>
          </Link>

          <Link
            href="/firstalbumpage"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold text-purple-600">Albums &rarr;</h3>
            <p className="mt-4 text-xl text-purple-600">
              A complete listing of all albums.
            </p>
          </Link>

          <Link
            href="/firstsongpage"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold text-purple-600">Songs &rarr;</h3>
            <p className="mt-4 text-xl text-purple-600">
              A complete list of all songs.
            </p>
          </Link>

          {/* <Link
            href="/mainplaylistpage"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold text-purple-600">Playlists &rarr;</h3>
            <p className="mt-4 text-xl text-purple-600">
              Create and listen to Playlists.
            </p>
          </Link> */}

          {/* <Link
            href="/mainsearchpage"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold text-purple-600">Search &rarr;</h3>
            <p className="mt-4 text-xl text-purple-600">
              Search by artist album or song.
            </p>
          </Link> */}
        </div>
      </main>

      {/* <footer className="bg-red-600 flex h-24 w-full items-center justify-center border-t">
        <Link
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} ECHOSERVER
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </Link>
      </footer> */}
    </div>
  )
}

export default Home
