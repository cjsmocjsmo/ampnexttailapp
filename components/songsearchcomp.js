import Link from "next/link"

export default function SongSearchComp() {

    function submitSongSearch() {
        const song = document.getElementById("songSearchInput").value
        const url3 = "http://192.168.0.91:9090/updatesearchsong?search=" + encodeURIComponent(song)
        fetch(url3)
    }

    // document.addEventListener("keyup", function (event) {
    //     if (event.key === 'Enter') {
    //         const song = document.getElementById("songSearchInput").value
    //         if (song.length != 0) {
    //             const surl = "http://192.168.0.91:9090/updatesearchsong?search=" + song
    //             const songurl = encodeURI(surl)
    //             fetch(songurl)
    //             window.location.assign("/showsongsearchpage")
    //         }
    //     }
    // })

    return (
        <div>
            <label className="block">
                <input id="songSearchInput" type="text" className="bg-green-300 rounded-lg text-red-400" placeholder="Song Name" />
            </label>function
            <Link href="/showsongsearchpage">
                <button
                    className="bg-blue-400 text-2xl mt-3 mb-6 p-1.5 rounded-lg"
                    onClick={() => submitSongSearch()}
                >
                    Submit
                </button>
            </Link>
        </div>
    )
}