import Layout from "../components/layout"
import Link from "next/link"
import AlbumSearchComp from "../components/albumsearchcomp"


function AlbumSearch() {
    document.addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
            const album = document.getElementById("albumSearchInput").value
            const albumurl = "http://192.168.0.91:9090/updatesearchalbum?search=" + album
            const ealbumurl = encodeURI(albumurl)
            fetch(ealbumurl)
            window.location.assign("/showalbumsearchpage")
        }
    })
    return (
        <Layout>
            <div className="flex flex-row items-center justify-evenly mb-5" >

                <div className="m-3 text-2xl text-black">
                    <Link href="/searchpage" className="text-blue-500">
                        <button className="bg-purple-500 text-black rounded-xl p-2">
                            Artist Search &rarr;
                        </button>
                    </Link>
                </div>

                <div className="m-3 text-2xl text-black">
                    <Link href="/searchpagesong" className="text-blue-500">
                        <button className="bg-purple-500 text-black rounded-xl p-2">
                            Song Search &rarr;
                        </button>

                    </Link>
                </div>
            </div>

            <center>
                <div className="mt-8 mb-5 text-5xl text-white">Album Search</div>
                <AlbumSearchComp />
            </center>
        </Layout>
    )
}



export default AlbumSearch