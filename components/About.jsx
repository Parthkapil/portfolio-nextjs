import React from "react";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">I am not your normal developer.</p>
					<p className="py-2 text-gray-600">
						I graduated with bachelors in computer science in 2019. Since then, I worked as a
						software engineer at a travel startup named TravelBoutiqueOnline. After 2 years of
						working there, I started my own startup OrderOfOneSolutions which helps individuals and
						small businesses by providing them technological solutions
					</p>
					<p className="py-2 text-gray-600">
						Currently I am a Computer Science Graduate student at Indiana University, Bloomington. I
						have a question for you.
					</p>
					<p className="py-2 text-gray-600">
						What would you do if you had a cool software developer available at your fingertips?
					</p>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-500">
					<img
						className="rounded-xl h-[350px]"
						src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
