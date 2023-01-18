import Layout from '../components/layout';
import AlbumsForAlbumComp from '../components/albumsforalbumcomp';

function AlbumPage2({ data }) {
    return (
        <Layout>
            <center>
                <div className="text-5xl text-white">Albums</div>
                <AlbumsForAlbumComp data={data} />
            </center>
        </Layout>
    )
}

export async function getServerSideProps() {
    const creatUrl = (id) => {
        const u1 = 'http://192.168.0.91:9090/albumsForFirstLetter?firstletter=' + aid[4, 5]
        const u2 = "http://192.168.0.91:9090/updatealbumsforfirstletterurl?url=" + u1
        return encodeURI(u2)
    }
    const foo = await fetch("http://192.168.0.91:9090/getalbumfirstletterid")
    const aid = await foo.json()
    const url = await creatUrl(aid)
    const d = await fetch(url)

    const res = await fetch("http://192.168.0.91:9090/getalbumsforfirstletterurl")
    const addr = await res.json()
    const data1 = await fetch(addr)
    const data = await data1.json()
    return { props: { data } }
}

export default AlbumPage2