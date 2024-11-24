import React from "react";
import Image from "next/image";

const layout = ({ children }) => {
	return (
		<div className="flex min-h-screen">
			<section className="bg-[#7ED4AD] hidden w-1/2 items-center justify-center p-10 lg:flex xl:w-2/5">
				<div className="absolute flex flex-col  max-h-[800px] max-w-[450px] justify-center space-y-12">
					<div className="absolute flex items-center -top-32 gap-2">
						<Image
							src="/icon.png"
							alt="Icon"
							width={60}
							height={60}
							className="h-auto"
						/>

						<h1 className="text-6xl font-extrabold text-black">Cloud Nest</h1>
					</div>
					<div className="skew-y-5 text-black w-full">
						<h1 className="text-3xl font-bold">
							Manage your files the best way
						</h1>
						<p className="text-lg">
							This is the place where you can store all you document.
						</p>
					</div>
				</div>
			</section>
			<section className="flex flex-1 flex-col justify-center items-center bg-btext-black p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
				<div className="mb-16 lg:hidden">
					<Image
						src="/icon.png"
						alt="logo"
						width={224}
						height={82}
						className="h-auto w-[100px] lg:w-[250px]"
					/>
				</div>

				{children}
			</section>
		</div>
	);
};

export default layout;
