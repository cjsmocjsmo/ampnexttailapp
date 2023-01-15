import Link from "next/link"
import Layout from "../components/layout"

export default function Search() {

    function submitArtistSearch() {
        const artist = document.getElementById("artistSearchInput").value
        const url = "http://192.168.0.34:9090/updatesearchartist?search=" + encodeURIComponent(artist) 
        fetch(url)
    }

    function submitAlbumSearch() {
        const album = document.getElementById("albumSearchInput").value
        const url2 = "http://192.168.0.34:9090/updatesearchalbum?search=" + encodeURIComponent(album) 
        fetch(url2)
    }

    function submitSongSearch() {
        const song = document.getElementById("songSearchInput").value
        const url3 = "http://192.168.0.34:9090/updatesearchsong?search=" + encodeURIComponent(song) 
        fetch(url3)
    }

    return (
        <Layout>
            <center>
                <div className="m-3 text-5xl text-white">Artist Search </div>
                <div>
                    <label className="block">
                        <input id="artistSearchInput" type="text" className="bg-green-300 rounded-lg text-red-400" placeholder="Artist Name"/>
                    </label>
                    <Link href="/showartistsearchpage">
                        <button 
                            className="bg-blue-400 text-2xl mt-3 mb-6 p-1.5 rounded-lg"
                            onClick={() => submitArtistSearch()}
                        >
                            Submit
                        </button>
                    </Link>
                </div>

                <div className="m-3 text-5xl text-white">Album Search</div>
                <div>
                    <label className="block">
                        <input id="albumSearchInput" type="text" className="bg-green-300 rounded-lg text-red-400" placeholder="Album Name"/>
                    </label>
                    <Link href="/showalbumsearchpage">
                        <button 
                            className="bg-blue-400 text-2xl mt-3 mb-6 p-1.5 rounded-lg"
                            onClick={() => submitAlbumSearch()}
                        >
                            Submit
                        </button>
                    </Link>
                </div>

                <div className="m-3 text-5xl text-white">Song Search</div>
                <div>
                    <label className="block">
                        <input id="songSearchInput" type="text" className="bg-green-300 rounded-lg text-red-400" placeholder="Song Name"/>
                    </label>
                    <Link href="/showsongsearchpage">
                        <button 
                            className="bg-blue-400 text-2xl mt-3 mb-6 p-1.5 rounded-lg"
                            onClick={() => submitSongSearch()}
                        >
                            Submit
                        </button>
                    </Link>
                </div>
            </center>
        </Layout>
  )
}