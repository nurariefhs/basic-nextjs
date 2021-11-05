import Head from "next/head";
import style from "../styles/Login.module.css"; 
export default function Login(){
    return (
        <div>
            <Head>
                <title>Login Page</title>
            </Head>
            <h1 className={style.titleGreen}>Login Here!</h1>
        </div>
    )
}