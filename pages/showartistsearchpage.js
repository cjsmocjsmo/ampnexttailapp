import Link from "next/link"
import Layout from "../components/layout"

function ShowArtistSearch({ data }) {

    function setArtistSearchArtistSelected(artid) {

    }

    console.log(data)

    return (
        <Layout>
            <center>
                <div className="text-5xl text-white">show artist search page</div>
                {
                    data
                        ?
                        data.map((d) => (
                            <Link
                                href="/"
                                key={d._id}
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
    function createAddr(astring) {
        return "http://192.168.0.34:9090/artistsearch?search=" + encodeURIComponent(astring)
    }
    const sstring = await fetch("http://192.168.0.34:9090/getsearchartist")
    const searchstring = await sstring.json()
    const addr = await createAddr(searchstring)
    const search = await fetch(addr)
    const data = await search.json()
    return { props: { data } }
}

export default ShowArtistSearch