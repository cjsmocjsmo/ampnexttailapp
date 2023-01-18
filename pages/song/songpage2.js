import Layout from '../../components/layout';
import SongsForSongComp from '../../components/songsforsongcomp';

function SongPage2({ data }) {

    return (
        <Layout>

            <center>
                <div className="text-5xl text-white">Songs</div>
                <SongsForSongComp data={data} />
            </center>

        </Layout>
    )
}

export async function getServerSideProps() {
    const createUrl = (sid) => {
        const u1 = 'http://192.168.0.91:9090/songsForFirstLetter?firstletter=' + aid[3, 4]
        const u2 = "http://192.168.0.91:9090/updatesongsforfirstletterurl?url=" + u1
        return encodeURI(u2)
    }
    const foo = await fetch("http://192.168.0.91:9090/getsongfirstletterid")
    const aid = await foo.json()
    const url = await createUrl(aid)
    const d = await fetch(url)
    const res = await fetch("http://192.168.0.91:9090/getsongsforfirstletterurl")
    const addr = await res.json()
    const data1 = await fetch(addr)
    const data = await data1.json()
    return { props: { data } }
}

export default SongPage2
