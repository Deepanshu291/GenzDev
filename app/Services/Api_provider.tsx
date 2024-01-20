import { Client, Databases, Models, Query } from "appwrite";
import { blogpost } from "../utils/types";
import { GetStaticProps } from "next";

const client = new Client();
const productid = process.env.NEXT_PUBLIC_PROJECT_ID
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(productid || "64b81c6b883a9b275abe");

const db = new Databases(client);
console.log(db);

const collectionId: string =
  process.env.NEXT_PUBLIC_DATABASE_ID || "64b81ccad16470a6586b";
const documentId: string =
  process.env.NEXT_PUBLIC_COLLECTION_ID || "64b81ccf9a0959b4de97";


function BlogPromise(promise:Promise<Models.DocumentList<Models.Document>>):Promise<blogpost[]> {
    return promise.then((res)=>{
        // console.log(res.documents);
        const document = res.documents;
        const convertdoc = document.map((doc): blogpost =>({
            id:doc.$id,
          title:doc.title,
          slug:doc.slug,
          content:doc.content,
          imgurl:doc.imgurl,
          category:doc.categories,
          colorscheame:doc.colorscheame, 
          date:doc.Date,
          metadata:doc.metadata,
          intropost:doc.intropost
        }))

        return convertdoc;
    },(err)=>{
        console.log(err);
        return [];
    })
}

function executeQuery(collectionId:string , documentId:string, queryConditions:[]) {
    const promise = db.listDocuments(collectionId, documentId, queryConditions);
    return BlogPromise(promise);
}

export  function getpost() {
    // console.log(productid,collectionId,documentId);
    // console.log("its getpost");
    return executeQuery(collectionId,documentId,[])
}


export  function getpostbyid(id:string) {
        const promise = db.listDocuments(collectionId,documentId,[
        Query.equal('$id',id)
        ]);
       return  BlogPromise(promise);
    }

export  function getpostbyslug(slug:string) {
        const promise = db.listDocuments(collectionId,documentId,[
        Query.equal('slug',slug)
            ]);
        return  BlogPromise(promise);
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const productid = process.env.NEXT_PUBLIC_PROJECT_ID
    const collectionId=process.env.NEXT_PUBLIC_DATABASE_ID
    const documentId =process.env.NEXT_PUBLIC_COLLECTION_ID
    console.log(productid,collectionId,documentId);
    
    return {
        props:{
           
        }
    }
}