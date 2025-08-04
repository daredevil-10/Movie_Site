const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASEID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTIONID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECTID;

export const updateSearchCount = async ()=>{
    console.log(PROJECT_ID,COLLECTION_ID,DATABASE_ID)
}