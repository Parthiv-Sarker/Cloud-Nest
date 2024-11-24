import { appwriteConfig } from "./config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
	client = new Client();
	account;

	constructor() {
		this.client
			.setEndpoint(appwriteConfig.endpointUrl)
			.setProject(appwriteConfig.projectId);
		this.account = new Account(this.client);
	}

	async createAccount({ username, email, password }) {
		try {
			const response = await this.account.create(
				ID.unique(), // Generates a unique ID for the user
				email,
				password
			);
			return response;
		} catch (error) {
			console.error("Error creating account:", error);
			throw new Error("Account creation failed");
		}
	}

	async login({ email, password }) {
		try {
			return await this.account.createEmailPasswordSession(email, password);
		} catch (error) {
			console.error("Error logging in:", error)
			throw new Error("Login failed");
		}
	}

	async logout() {
		try {
			await this.account.deleteSession("current");
			return true;
		} catch (error) {
			console.error("Error logging out:", error.message);
			throw new Error("Logout failed");
		}
	}

	async getCurrentUser() {
		try {
			const user = await this.account.get();
			return user; // Return the user data
		} catch (error) {
			console.error("Error retrieving current user:", error.message);
			throw new Error("Could not retrieve user data");
		}
	}
}

const authService = new AuthService();

export default authService;
