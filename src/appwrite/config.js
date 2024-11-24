export const appwriteConfig = {
	endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
	projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
	databaseId: process.env.NEXT_PUBLIC_APPWRITE_DB_ID,
	userCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USER_COLLECTION_ID,
	fileCollectionId: process.env.NEXT_PUBLIC_APPWRITE_FILE_COLLECTION_ID,
	bucketId: process.env.NEXT_PUBLIC_APPWRITE_FILE_BUCKET_ID,
	secrectKey: process.env.NEXT_APPWRITE_SECRET_KEY,
};
