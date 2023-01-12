import useSWR from 'swr'
import { useEffect, useState } from 'react'
import Link from 'next/link'


// const fetcher = (...args) => fetch(...args).then(res => res.json())

function ArtistsForArtistComp({ data }) {
    
    // const [Url, setUrl] = useState(null)
    // const { data, error, isLoading } = useSWR(Url, fetcher)

    // useEffect(() => {
    //     let foo = localStorage.getItem('artistsForFirstLetterURL');
    //     setUrl(foo)
    // }, []);
    
    // if (error) return <div>failed to load</div>
    // if (isLoading) return <div>loading...</div>

    // function setArtistId(aid) {
    //     url = "http://192.168.0.34:9090/updateartistid?artid=" + aid
    //     fetch(url)
    // }
    
    return (
        <div></div>
        // <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 m-10 items-center justify-evenly">
        //     {
        //         data
        //         ?
        //         data.map((d) => (
        //             <Link href="/albumsforartistpage" key={d._id} id={d.artistid} onClick={() => setArtistId(d.artistid)} className="m-4 text-3xl text-green-600">{d.artist}</Link>
        //         ))
        //         :
        //         <h1></h1>
        //     }
        // </div>
)}

export async function getServerSideProps() {
    // const res = await fetch("http://192.168.0.34:9090/getartistsforfirstletterurl")
    // const aurl = await res.json()
    // console.log("this is aurl")
    // console.log(aurl)
    // const res2 = await fetch(aurl)
    // const data = await res.json()
    // console.log(data)
    return { props: { data } }
}

export default ArtistsForArtistComp