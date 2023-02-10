import Layout from "@/components/layout";
import { db } from "@/lib/firebase";

export default function SSR() {
  return (
    <Layout>
      <h1>SSR</h1>
    </Layout>
  );
}

export async function getServerSideProps(ctx: any) {
  const data = await db
    .collection("collection")
    .doc("doc")
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        return null;
      }
    });

  console.log(`found data: ${JSON.stringify(data, null, 2)}, redirecting...`);

  return {
    redirect: {
      destination: "/login",
      status: 302,
    },
  };
}
