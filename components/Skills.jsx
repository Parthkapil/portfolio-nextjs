import Image from "next/image";
import React from "react";

const Skills = () => {
	const skillList = [
		{
			name: "HTML",
			ImgSrc: "/../public/assets/skills/html.png",
		},
		{
			name: "CSS",
			ImgSrc: "/../public/assets/skills/css.png",
		},
		{
			name: "FIREBASE",
			ImgSrc: "/../public/assets/skills/firebase.png",
		},
		{
			name: "JAVASCRIPT",
			ImgSrc: "/../public/assets/skills/javascript.png",
		},
		{
			name: "MONGO",
			ImgSrc: "/../public/assets/skills/mongo.png",
		},
		{
			name: "NODE",
			ImgSrc: "/../public/assets/skills/node.png",
		},
		{
			name: "REACT",
			ImgSrc: "/../public/assets/skills/react.png",
		},
		{
			name: "SHOPIFY",
			ImgSrc: "/../public/assets/skills/shopify.png",
		},
		{
			name: "TAILWIND",
			ImgSrc: "/../public/assets/skills/tailwind.png",
		},
		{
			name: "GITHUB",
			ImgSrc: "/../public/assets/skills/github1.png",
		},
	];

	return (
		<div id="skills" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
				<h2 className="py-4">What I can Do</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{skillList.map(function (skill) {
						return (
							<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500">
								<div className="grid grid-cols-2 gap-4 justify-center items-center">
									<div className="m-auto">
										<Image src={skill.ImgSrc} alt="/" height="64px" width="64px" />
									</div>
									<div className="flex flex-col items-center justify-center">
										<h3>{skill.name}</h3>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Skills;
