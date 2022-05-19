import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						LET's BUILD SOMETHING TOGETHER.
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I'm <span className="text-[#5651e5]">Parth</span>
					</h1>
					<h1 className="py-4 text-gray-700">I'm a Full Stack Developer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						Would you like to turn your ideas into reality with me? Would you like to turn your
						ideas into reality with me? Would you like to turn your ideas into reality with me?
						Would you like to turn your ideas into reality with me? Would you like to turn your
						ideas into reality with me?
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
							<FaLinkedinIn />
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
							<FaGithub />
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
							<AiOutlineMail />
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
							<BsFillPersonLinesFill />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
