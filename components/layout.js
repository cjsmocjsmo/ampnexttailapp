import Head from "next/head"
// import { motion } from "framer-motion";
import Footer from "./headercomp"

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
        <div className="bg-black">
            <Head>
                <title>Ekco</title>
                <a rel="icon" href="/favicon.ico" />
            </Head>
            <Footer />
            <main className="bg-black">
                <div className="flex min-h-screen flex-col py-2 bg-black">

                    {children}

                </div>

            </main>
            
        </div>
        // </motion.div>
    )
}