import Link from "next/link"
import Image from "next/image"
import Layout from "../components/layout"

function ShowAlbumSearch({ data }) {

    console.log(data)
    return (
        <Layout>
            <center>
                <div className="text-5xl text-white">show album search page</div>
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
                                <Image src={d.ThumbHttpPath} width="120" height="120" />
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
        return "http://192.168.0.34:9090/albumsearch?search=" + encodeURIComponent(astring)
    }
    const sstring = await fetch("http://192.168.0.34:9090/getsearchalbum")
    const searchstring = await sstring.json()
    const addr = await createAddr(searchstring)
    const search = await fetch(addr)
    const data = await search.json()

    console.log(data)



    return { props: { data } }
}

export default ShowAlbumSearch