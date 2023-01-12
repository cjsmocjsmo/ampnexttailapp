import useSWR from 'swr'
import { useEffect, useState } from 'react'


const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function SongsForSongComp() {

    const [Url, setUrl] = useState(null)
    const { data, error, isLoading } = useSWR(Url, fetcher)

    console.log(Url)

    useEffect(() => {
        let foo = localStorage.getItem('songsForFirstLetterURL');
        setUrl(foo)
    }, []);
    
    // if (error) return <div>failed to load</div>
    // if (isLoading) return <div>loading...</div>
    
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 m-10 items-center justify-evenly">
            
            {
                data
                ?
                data.map((d) => (
                    
                    <a href="/playerpage" className="text-white" key={d._id} >{d.song}</a>
                    // <a href="/songsforartistpage" key={d._id} id={d.firstletterid} onClick={() => localStorage.setItem("artistFirstLetterID", d.firstletterid)} className="m-4 text-3xl text-green-600">{d.firstletter}</a>
                ))
                :
                <h1 className="text-black">Loading2...</h1>
            }
        </div>
)}