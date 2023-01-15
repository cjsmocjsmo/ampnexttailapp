import Layout from '../components/layout';
import ArtistsForArtistComp from '../components/artistsforartistcomp';

function ArtistsForArtistPage({ data }) {
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
    function newaddr(a1) {
       const url11 = 'http://192.168.0.91:9090/artistsForFirstLetter?firstletter=' + encodeURIComponent(a1[5, 6]) 
        const url12 = "http://192.168.0.91:9090/updateartistsforfirstletterurl?url=" + encodeURIComponent(url11) 
        return url12
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

export default ArtistsForArtistPage