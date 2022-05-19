import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import ProjectItems from "./ProjectItems";

const Projects = () => {
	const projectList = [
		{
			title: "Property Finder",
			img: propertyImg,
			URL: "/property",
		},
		{
			title: "Crypto Portal",
			img: cryptoImg,
			URL: "/property",
		},
		{
			title: "Netflix Clone",
			img: netflixImg,
			URL: "/property",
		},
		{
			title: "Twitch clone",
			img: twitchImg,
			URL: "/property",
		},
	];

	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
				<h2 className="py-4">What I've Built.</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{projectList.map(function (project) {
						return <ProjectItems title={project.title} img={project.img} URL={project.URL} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Projects;
