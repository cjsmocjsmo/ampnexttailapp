import Link from "next/link"

export default function AlbumSearchComp() {

    function submitAlbumSearch() {
        const album = document.getElementById("albumSearchInput").value
        const url2 = "http://192.168.0.91:9090/updatesearchalbum?search=" + encodeURIComponent(album)
        fetch(url2)
    }

    return (
        <div>
            <label className="block">
                <input id="albumSearchInput" type="text" className="bg-green-300 rounded-lg text-red-400" placeholder="Album Name" />
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
    )
}