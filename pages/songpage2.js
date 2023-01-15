import { useEffect } from 'react';
import Layout from '../components/layout';
import LeftArrow from '../components/leftarrowcomp';
import SongsForSongComp from '../components/songsforsongcomp';

function SongsForSongPage({ data }) {

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
    const foo = await fetch("http://192.168.0.91:9090/getsongfirstletterid")
    const aid = await foo.json()
    const url = 'http://192.168.0.91:9090/songsForFirstLetter?firstletter=' + encodeURIComponent(aid[4, 5]) 
    const url2 = "http://192.168.0.91:9090/updatesongsforfirstletterurl?url=" + encodeURIComponent(url)
    const d = await fetch(url2)
    
    const res = await fetch("http://192.168.0.91:9090/getsongsforfirstletterurl")
    const addr = await res.json()
    const data1 = await fetch(addr)
    const data = await data1.json()
    return { props: { data } }
}

export default SongsForSongPage