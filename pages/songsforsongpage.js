import { useEffect } from 'react';
import Layout from '../components/layout';
import LeftArrow from '../components/leftarrowcomp';
import SongsForSongComp from '../components/songsforsongcomp';

function SongsForSongPage() {

    useEffect(() => {
        let foo = localStorage.getItem('songFirstLetterID');
        const URL = 'http://192.168.0.91:9090/songsForFirstLetter?firstletter=' + foo[3, 4]
        localStorage.setItem("songsForFirstLetterURL", URL)
    }, []);

    return (
        <Layout>
            <div className="text-white">
                <LeftArrow url="/" />
                <center>
                    <div className="text-5xl text-white">Songs</div>
                    <SongsForSongComp />
                </center>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch("http://192.168.0.91:9090/artistFirstLetter")
    const data = await res.json()
    return { props: { data } }
}

export default SongsForSongPage