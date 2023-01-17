import Layout from "../components/layout"
import Link from "next/link"
import ArtistSearchComp from "../components/artistsearchcomp"

function Search() {
    document.addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
            const artist = document.getElementById("artistSearchInput").value
            const artisturl = "http://192.168.0.91:9090/updatesearchartist?search=" + artist
            const eartisturl = encodeURI(artisturl)
            fetch(eartisturl)
            window.location.assign("/showartistsearchpage")
        }
    })
    return (
        <Layout>
            <div className="flex flex-row items-center justify-evenly mb-5" >

                <div className="m-3 text-2xl text-black">
                    <Link href="/searchpagealbum" className="text-blue-500">
                        <button className="bg-purple-500 text-black rounded-xl p-2">
                            Album Search &rarr;
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
                <div className="mt-8 text-5xl text-white">Artist Search</div>
                <ArtistSearchComp />
            </center>
            
        </Layout>
    )
}

export default Search