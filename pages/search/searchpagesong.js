import Link from "next/link"
import Layout from "../../components/layout"
import SongSearchComp from "../../components/songsearchcomp"

function SongSearch() {
    document.addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
            const song = document.getElementById("songSearchInput").value
            const songurl = "http://192.168.0.91:9090/updatesearchsong?search=" + song
            const esongurl = encodeURI(songurl)
            fetch(esongurl)
            window.location.assign("/showsongsearchpage")
        }
    })
    return (
        <Layout>
            <div className="flex flex-row items-center justify-evenly mb-5" >

                <div className="m-3 text-2xl text-black">
                    <Link href="/search/searchpage" className="text-blue-500">
                        <button className="bg-purple-500 text-black rounded-xl p-2">
                            Artist Search &rarr;
                        </button>
                    </Link>
                </div>

                <div className="m-3 text-2xl text-white">
                    <Link href="/search/searchpagealbum" className="text-blue-500">
                        <button className="bg-purple-500 text-black rounded-xl p-2">
                            Album Search &rarr;
                        </button>

                    </Link>
                </div>
            </div>

            <center>
                <div className="mt-8 mb-5 text-5xl text-white">Song Search</div>
                <SongSearchComp />
            </center>
        </Layout>
    )
}

export default SongSearch