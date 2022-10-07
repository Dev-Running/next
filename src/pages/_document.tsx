import {Head, Html, Main, NextScript} from "next/document";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

export default function Document() {
  const {user} = useContext(AuthContext);
  return (
    <Html>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' type='image/png' href='/logo.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rajdhani:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
