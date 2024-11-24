"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

//import authService from "@/appwrite/auth";

const formSchema = z.object({
	email: z.string().email({ message: "Invalid email address." }),
	password: z
		.string()
		.min(6, { message: "Password must be at least 6 characters." }),
});

const SignIn = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { toast } = useToast();

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data) => {
		setIsLoading(true);

		try {
			// Call login method from authService
			//const response = await authService.login(data);

			if (response?.$id) {
				console.log("Logged in successfully.");
				toast({
					variant: "success",
					title: "Logged in successfully.",
				});
			} else if (response?.error) {
				toast({
					variant: "destructive",
					title: response.error,
				});
			}
		} catch (error) {
			toast({
				variant: "destructive",
				title: "An error occurred. Please try again.",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex max-h-[800px] w-[28rem] max-w-[580px] flex-col justify-center space-y-6 transition-all lg:h-full lg:space-y-4"
			>
				<h1 className="text-[34px] leading-[42px] font-bold text-center text-light-100 md:text-left">
					Sign In
				</h1>

				{/* Email Field */}
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<div className="flex h-[75px] flex-col justify-center rounded-xl border border-light-300 p-4 shadow-drop-1 gap-1">
								<FormLabel className="text-light-100 pt-2 body-2">
									Email
								</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter your email"
										className="border-none shadow-none p-2 placeholder:text-light-200 body-2"
										{...field}
									/>
								</FormControl>
							</div>
							<FormMessage className="text-red-600 body-2 ml-4" />
						</FormItem>
					)}
				/>

				{/* Password Field */}
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<div className="flex h-[75px] flex-col justify-center rounded-xl border border-light-300 p-4 shadow-drop-1 gap-1">
								<FormLabel className="text-light-100 pt-2 body-2">
									Password
								</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="Enter password"
										className="w-full border-none shadow-none p-2 placeholder:text-light-200 body-2"
										{...field}
									/>
								</FormControl>
							</div>
							<FormMessage className="text-red-600 body-2 ml-4" />
						</FormItem>
					)}
				/>

				{/* Submit Button */}
				<Button
					type="submit"
					className="bg-[#7ED4AD] hover:bg-[#8beabf] text-black transition-all rounded-full text-[14px] leading-[20px] font-extrabold h-[45px] flex items-center justify-center"
					disabled={isLoading}
				>
					{isLoading ? (
						<>
							<span className="mr-2">Signing In...</span>
							<Image
								src="/loader.svg"
								alt="loader"
								width={24}
								height={24}
								className="animate-spin"
							/>
						</>
					) : (
						"Sign In"
					)}
				</Button>

				{/* Redirect to Sign Up */}
				<div className="body-2 flex justify-center">
					<p className="text-light-100">Don&apos;t have an account? </p>
					<Link href="/signup" className="ml-1 font-medium text-blue-700">
						Sign Up
					</Link>
				</div>
			</form>
		</Form>
	);
};

export default SignIn;
