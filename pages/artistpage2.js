import Layout from '../components/layout';
import ArtistsForArtistComp from '../components/artistsforartistcomp';

function ArtistPage2({ data }) {
    return (
        <Layout>
            <center>
                <div className="text-5xl text-white">Artist</div>
                <ArtistsForArtistComp data={data} />
            </center>
        </Layout>
    )
}

export async function getServerSideProps() {
    const newaddr = (a1) => {
        const u1 = 'http://192.168.0.91:9090/artistsForFirstLetter?firstletter=' + a1[5, 6]
        const u2 = "http://192.168.0.91:9090/updateartistsforfirstletterurl?url=" + u1
        return encodeURI(u2)
    }
    const res = await fetch("http://192.168.0.91:9090/getartistfirstletterid")
    const d = await res.json()
    const url = await newaddr(d)
    const res2 = await fetch(url)
    const res3 = await fetch("http://192.168.0.91:9090/getartistsforfirstletterurl")
    const aurl = await res3.json()
    const res4 = await fetch(aurl)
    const data = await res4.json()
    return { props: { data } }
}

export default ArtistPage2