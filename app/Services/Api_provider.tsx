import { Client, Databases } from "appwrite";
import { blogpost } from "../utils/types";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64b81c6b883a9b275abe');

const db = new Databases(client);

 const promise = db.listDocuments('64b81ccad16470a6586b', '64b81ccf9a0959b4de97');
 

export function getpost(): Promise<blogpost[]>{
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
          colorcheame:'blue.300', 
          date:doc.Date,
          metadata:doc.metadata
        }))

        return convertdoc;
    },(err)=>{
        console.log(err);
        return [];
    })
}




