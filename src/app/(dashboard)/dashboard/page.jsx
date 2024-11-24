"use client";

import React from "react";
import authService from "@/appwrite/authService";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Page = () => {
  const { toast } = useToast();
	const onLogout = async () => {
    
		try {
			await authService.logout();
			toast({
				variant: "success",
				title: "Logged out successfully.",
			});
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Logout failed.",
				description: error.message || "An unexpected error occurred.",
			});
			console.error("Logout error:", error);
		}
	};

	return (
		<div className="flex justify-center items-center h-screen">
			<Button onClick={onLogout}>Log Out</Button>
		</div>
	);
};

export default Page;
