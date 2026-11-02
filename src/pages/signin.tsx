import Head from "next/head";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Entrar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        <section
          style={{
            width: "100%",
            maxWidth: "22rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          <h1>Entrar</h1>
          <p>Use sua conta Google para autenticar.</p>
          <button
            type="button"
            onClick={() => signIn("google")}
            style={{
              cursor: "pointer",
              padding: "0.75rem 1rem",
              fontSize: "1rem",
            }}
          >
            Entrar com Google
          </button>
        </section>
      </main>
    </>
  );
}
