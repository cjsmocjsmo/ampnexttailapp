import Link from "next/link"
import Layout from "../components/layout"

function ShowArtistSearchPage({ data }) {

    function setArtistSearchArtistSelected(artid) {
        const u = "http://192.168.0.91:9090/updateartistid?artid=" + artid
        console.log(u)
        const url = encodeURI(u)
        console.log(url)
        fetch(url)
    }

    return (
        <Layout>
            <center>
                <div className="text-5xl text-white">Artist</div>
                {
                    data
                        ?
                        data.map((d, index) => (
                            <Link
                                key={index}
                                href="/showartistsearchpage2"
                                
                                id={d.ArtistID}
                                onClick={() => setArtistSearchArtistSelected(d.ArtistID)}
                                className="m-4 text-3xl text-green-600"
                            >
                                {d.Artist}
                            </Link>
                        ))
                        :
                        <h1></h1>
                }
            </center>
        </Layout>

    )
}

export async function getServerSideProps() {
    const createAddr = (astring) => {
        const url = "http://192.168.0.91:9090/artistsearch?search=" + astring
        return encodeURI(url)
    }
    const sstring = await fetch("http://192.168.0.91:9090/getsearchartist")
    const searchstring = await sstring.json()
    const addr = await createAddr(searchstring)
    const search = await fetch(addr)
    const data = await search.json()
    return { props: { data } }
}

export default ShowArtistSearchPage