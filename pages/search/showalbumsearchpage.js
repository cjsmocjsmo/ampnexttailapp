import Link from "next/link"
import Image from "next/image"
import Layout from "../../components/layout"

function ShowAlbumSearch({ data }) {

    function setAlbumSearchAlbumSelected(albid) {
        const u = "http://192.168.0.91:9090/updateselectedalbumid?selalbid=" + albid
        const url = encodeURI(u)
        console.log(url)
        fetch(url)
    }
    return (
        <Layout>
            <center>
                <div className="text-5xl text-white">Albums</div>
                {
                    data
                        ?
                        data.map((d) => (
                            <Link
                                href="/search/showalbumsearchpage2"
                                key={d.ArtistID}
                                id={d.ArtistID}
                                onClick={() => setAlbumSearchAlbumSelected(d.AlbumID)}
                                className="m-4 text-3xl text-green-600"
                            >
                                <Image src={d.ThumbHttpPath} alt={d.Artist} width="120" height="120" />
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
        url = "http://192.168.0.91:9090/albumsearch?search=" + astring
        return encodeURI(url)
    }
    const sstring = await fetch("http://192.168.0.91:9090/getsearchalbum")
    const searchstring = await sstring.json()
    const addr = await createAddr(searchstring)
    const search = await fetch(addr)
    const data = await search.json()
    return { props: { data } }
}

export default ShowAlbumSearch