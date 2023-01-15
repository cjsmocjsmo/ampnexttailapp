import Link from "next/link"


export default function SongsForSongComp(props) {
    
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 m-10 items-center justify-evenly">
            
            {
                props.data
                ?
                props.data.map((d) => (
                    
                    <Link
                        key={d._id}
                        href="/playerpage" 
                        className="text-white" 
                        
                        onClick={() => localStorage.setItem("artistFirstLetterID", d.firstletterid)}
                    >
                        {d.song}
                    </Link>
                    // <a href="/songsforartistpage" key={d._id} id={d.firstletterid} onClick={() => localStorage.setItem("artistFirstLetterID", d.firstletterid)} className="m-4 text-3xl text-green-600">{d.firstletter}</a>
                ))
                :
                <h1></h1>
            }
        </div>
)}