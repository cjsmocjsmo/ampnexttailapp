import Link from "next/link"
import Layout from "../../components/layout"

export default function PlaylistCreateRandomPage() {

    const createRandomPlayList = () => {
        const name = document.getElementById("playlistCreateInputName").value
        const count = document.getElementById("playlistCreateInputCount").value
        const j = count + "/" + name
        const u = "http://192.168.0.91:9090/createplaylist?count=" + j
        const url = encodeURI(u)
        fetch(url)
    }

    return (
        <Layout>
            <center>
                <div className="m-5 text-5xl text-white">Create Random Playlist</div>
                <div>
                    <input id="playlistCreateInputName" type="text" className="mt-10 bg-green-300 rounded-lg text-red-400" placeholder="Playlist Name" />
                </div>
                <div>
                    <input id="playlistCreateInputCount" type="text" className="mt-10 bg-green-300 rounded-lg text-red-400" placeholder="Number of Songs" />
                </div>
                <Link href="/playlist/playlistmainpage">
                    <button
                        className="bg-purple-400 text-2xl mt-5 mb-6 p-1.5 text-black rounded-lg"
                        onClick={() => createRandomPlayList()}
                    >
                        Submit
                    </button>
                </Link>
            </center>
        </Layout>
    )
}