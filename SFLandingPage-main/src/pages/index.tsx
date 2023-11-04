import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css"; import { supabase } from "./utils/supabase";
export default function Home() {
}
return <div className={styles.container}></div>;
export async function getStaticProps (context) {
const data = await supabase.from("posts").select("*");
return {
props: { data: data},
}