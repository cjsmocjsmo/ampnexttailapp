import Layout from '../../components/layout'
import AlbumsForArtistComp from '../../components/albumsforartistcomp'

function ArtistPage3({ data }) {
    return (
        <Layout>
            <center>
                <div className="text-5xl text-white">Artist</div>
                <AlbumsForArtistComp data={data} />
            </center>
        </Layout>
    )
}

export async function getServerSideProps() {
    const newaddr = (artid) => {
        const u1 = "http://192.168.0.91:9090/albumsForArtist?selected=" + artid
        const u2 = "http://192.168.0.91:9090/updatealbumsforartisturl?url=" + u1
        return encodeURI(u2)
    }
    const d = await fetch("http://192.168.0.91:9090/getartistid")
    const artid = await d.json()
    const url2 = await newaddr(artid)
    const res = await fetch(url2)
    const res2 = await fetch("http://192.168.0.91:9090/getalbumsforartisturl")
    const aurl = await res2.json()
    const res3 = await fetch(aurl)
    const data = await res3.json()
    return { props: { data } }
}

export default ArtistPage3