import styles from "./tooltip.module.css"

export default function CardDeleteButton(props) {

    const deletePlaylist = (id) => {
        const u = "http://192.168.0.91:9090/deleteplaylist?id=" + id
        const url = encodeURI(u)
        fetch(url)
    }

    return (
        <div className={styles.tooltip}>
            <span className={styles.tooltiptext}>Delete Playlist</span>
            <button
                className="mt-4 p-3 rounded-xl bg-purple-600 text-xl text-amber-400"
                onClick={() => deletePlaylist(props.myid)}
            >
                <svg width="32" height="32" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
            </button>
        </div>
    )
}