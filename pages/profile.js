import Head from "next/head";
import Navbar from "./components/Navbar";

const profile = ({ albums }) => {
  return (
    <>
      <Head>
        <title>Profil | Belajar Next JS</title>
        <meta name="description" content="Belajar Next JS" />
      </Head>
      <Navbar />
      <h1>Ini halaman Profil</h1>
      {albums.map((album) => (
        <div key={album.id}>
          <h2>{album.title}</h2>
        </div>
      ))}
    </>
  );
};

export default profile;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();

  return {
    props: {
      albums: data,
    },
  };
};