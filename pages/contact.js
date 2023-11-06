import Navbar from "./components/Navbar"
import Head from "next/head"
import Image from "next/image"

const contact =() => {
    return (
        <>
        <Head>
        <title>Contact | Belajar Next JS</title>
        <meta name="description" content="Belajar Next JS"></meta>
        </Head>
        <Navbar />
        <img src="/next.svg" alt="Logo Next JS" width={200} height={200}></img>
        <h1>Ini Halaman Contact</h1>
        </>
    )
}

export default contact;