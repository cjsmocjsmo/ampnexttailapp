import Link from "next/link"
import Layout from "../components/layout"

function SongsForAlbumPage({ data }) {

    function setSongID(sid) {

    }

    function setThumbHttpPath(httppath) {

    }

    return (
        <Layout>
            <center>
                <div className="text-4xl text-white">Songs</div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 m-10 items-center justify-evenly">

                    {
                        data
                            ?
                            data.map((d) => (
                                <Link
                                    href="/playerpage"
                                    className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                                >
                                    <h3 className="text-2xl font-bold text-purple-600">{d.Song} &rarr;</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        <p 
                                            className="mt-4 text-xl text-green-600" 
                                            onClick={() => setSongID(d.SongID)}
                                        >
                                            play
                                        </p>
                                        <p 
                                            className="mt-4 text-xl text-green-600" 
                                            onClick={() => setThumbHttpPath(d.ThumbHttpPath)}
                                        >
                                            add to playlist
                                        </p>
                                    </div>

                                </Link>
                            ))
                            :
                            <h1></h1>
                    }

                </div>
            </center>
        </Layout>
    )
}

export async function getServerSideProps() {
    function newaddr(b2) {
        return "http://192.168.0.34:9090/songsForAlbum?selected=" + b2
    }
    const id = await fetch("http://192.168.0.34:9090/getselectedalbumid")
    const albid = await id.json()
    const newaddress = await newaddr(albid)
    const d = await fetch(newaddress)
    const data = await d.json()
    return { props: { data } }
}

export default SongsForAlbumPage