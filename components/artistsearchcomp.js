import Link from "next/link"

export default function ArtistSearchComp() {

    function submitArtistSearch() {
        const artist = document.getElementById("artistSearchInput").value
        const url = "http://192.168.0.91:9090/updatesearchartist?search=" + encodeURIComponent(artist)
        fetch(url)
    }

    // document.addEventListener("keyup", function (event) {
    //     if (event.key === 'Enter') {
    //         const artist = document.getElementById("artistSearchInput").value
    //         if (artist.length != 0) {
    //             const arurl = "http://192.168.0.91:9090/updatesearchartist?search=" + artist
    //             const arturl = encodeURI(arurl)
    //             fetch(arturl)
    //             window.location.assign("/showalbumsearchpage")
    //         } else {
    //             alert("Please enter a search term")
    //         }
    //     }
    // })

    return (
        <div>
            <label className="block">
                <input id="artistSearchInput" type="text" className="bg-green-300 rounded-lg text-red-400" placeholder="Artist Name" />
            </label>
            <Link href="/search/showartistsearchpage">
                <button
                    className="bg-purple-400 text-2xl mt-3 mb-6 p-1.5 rounded-lg"
                    onClick={() => submitArtistSearch()}
                >
                    Submit
                </button>
            </Link>
        </div>
    )
}