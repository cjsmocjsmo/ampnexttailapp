import Head from "next/head"
import LeftArrow from "./leftarrowcomp"
// import { motion } from "framer-motion";

export default function Layout({ children }) {
    return (
        // <motion.div
        //     initial={{ x: 300, opacity: 0 }}
        //     animate={{ x: 0, opacity: 1 }}
        //     exit={{ x: 300, opacity: 0 }}
        //     transition={{
        //         type: "spring",
        //         stiffness: 260,
        //         damping: 20,
        //     }}
        // >

            <main>

                <Head>
                    <title>Ekco</title>
                    <a rel="icon" href="/favicon.ico" />
                </Head>
                <div className="flex min-h-screen flex-col py-2 bg-black">
                    <LeftArrow url="/" />

                    {children}

                </div>

            </main>

        // </motion.div>
    )
}