import Link from "next/link"
import Layout from "../components/layout"

function SongsForAlbumPage({ data }) {

    function setThumbHttpPath(apath) {
        const url = "http://192.168.0.91:9090/updatethumbhttppath?thumb=" + apath
        const eurl = encodeURI(url)
        fetch(eurl)
    }

    function setSongID(sid, httppath) {
        const url = "http://192.168.0.91:9090/updatesongid?sid=" + sid
        const eurl = encodeURI(url)
        fetch(eurl)
        setThumbHttpPath(encodeURI(httppath))
    }

    function addSongToPlaylist(asong) {

    }



    return (
        <Layout>
            <center>
                <div className="text-4xl text-white">Songs</div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 m-10 items-center justify-evenly">

                    {
                        data
                            ?
                            data.map((d) => (
                                <div
                                    className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                                >
                                    <h3 className="text-3xl font-bold text-purple-600">{d.Song} &rarr;</h3>
                                    <div className="flex flex-1 flex-row items-center justify-evenly">
                                        <Link href="/playerpage">
                                            <button
                                                className="mt-4 p-3 rounded-xl bg-purple-600 text-xl text-amber-400"
                                                onClick={() => setSongID(d.SongID, d.ThumbHttpPath)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                                </svg>
                                            </button>
                                        </Link>
                                        <Link href="/mainplaylistpage">
                                            <button
                                                className="mt-4 p-3 rounded-xl bg-purple-600 text-xl text-amber-400"
                                                onClick={() => addSongToPlaylist(d.SongID)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-database-fill-add" viewBox="0 0 16 16">
                                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0ZM8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1Z" />
                                                    <path d="M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7Zm6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.552 4.552 0 0 1 .23-2.002Zm-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.507 4.507 0 0 1-1.3-1.905Z" />
                                                </svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
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
        return "http://192.168.0.91:9090/songsForAlbum?selected=" + b2
    }
    const id = await fetch("http://192.168.0.91:9090/getselectedalbumid")
    const albid = await id.json()
    const newaddress = await newaddr(albid)
    const d = await fetch(newaddress)
    const data = await d.json()
    return { props: { data } }
}

export default SongsForAlbumPage