import Link from "next/link"
import Layout from "../components/layout"

function AlbumsForArtistComp({ data }) {

    return (
        <Layout>
                <center>
                    <h1 className="text-white">Fuck</h1>
                </center>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 m-10 items-center justify-evenly">
            
                    {
                        data
                        ?
                        data.map((d) => (
                            
                            <Link key={d._id} href="/playerpage" className="text-white" >{d.Song}</Link>
                            // <a  onClick={() => localStorage.setItem("artistFirstLetterID", d.firstletterid)} className="m-4 text-3xl text-green-600">{d.firstletter}</a>
                        ))
                        :
                        <h1 className="text-black">Loading2...</h1>
                    }
                </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    function newaddr (b1, b2) {
        return b1 + b2
    }
    const a1 = "http://192.168.0.34:9090/songsForAlbum?selected="
    const id = await fetch("http://192.168.0.34:9090/getselectedalbumid")
    const albid = await id.json()
    const newaddress = await newaddr(a1, albid)
    const d = await fetch(newaddress)
    const data = await d.json()
    return { props: { data } }
}

export default AlbumsForArtistComp