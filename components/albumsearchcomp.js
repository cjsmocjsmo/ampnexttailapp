import Link from "next/link"

export default function AlbumSearchComp() {

    function submitAlbumSearch() {
        const album = document.getElementById("albumSearchInput").value
        const u = "http://192.168.0.91:9090/updatesearchalbum?search=" + album
        const url = encodeURI(u)
        fetch(url)
    }

    return (
        <div>
            <label className="block">
                <input id="albumSearchInput" type="text" className="bg-green-300 rounded-lg text-red-400" placeholder="Album Name" />
            </label>
            <Link href="/showalbumsearchpage">
                <button
                    className="bg-purple-400 text-2xl mt-3 mb-6 p-1.5 text-black rounded-lg"
                    onClick={() => submitAlbumSearch()}
                >
                    Submit
                </button>
            </Link>
        </div>
    )
}