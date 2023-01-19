import Link from "next/link"
import Layout from "../../components/layout"

export default function PlaylistCreatePage() {

    const createPlaylist = () => {
        const name = document.getElementById("playlistCreateInput").value
        const u = "http://192.168.0.91:9090/createplaylist?name=" + name
        const url = encodeURI(u)
        fetch(url)
    }

    return (
        <Layout>
            <center>
                <div className="m-5 text-5xl text-white">Create Empty Playlist</div>

                <div>
                    <input id="playlistCreateInput" type="text" className="mt-10 bg-green-300 rounded-lg text-red-400" placeholder="Playlist Name" />
                </div>
                <Link href="/playlist/playlistmainpage">
                    <button
                        className="bg-purple-400 text-2xl mt-5 mb-6 p-1.5 text-black rounded-lg"
                        onClick={() => createPlaylist()}
                    >
                        Submit
                    </button>
                </Link>
            </center>


        </Layout>
    )
}