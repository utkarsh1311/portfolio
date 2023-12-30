const Navbar = () => {
	return (
		<nav className="flex py-3 font-bold text-gray-500 left-0 right-0 top-0  fixed z-20 px-44 sm:px-8 bg-white">
			<ul className="flex justify-start gap-8 items-center sm:gap-2 text-sm">
				<li>
					<a
						className="hover:text-gray-800 hover:bg-gray-100 p-2 rounded-md transition-all duration-300"
						href="/"
					>
						Home
					</a>
				</li>
				<li>
					<a
						className="hover:text-gray-800 hover:bg-gray-100 p-2 rounded-md transition-all duration-300"
						href="/projects"
					>
						Blogs
					</a>
				</li>
				<li>
					<a
						className="hover:text-gray-800 hover:bg-gray-100 p-2 rounded-md transition-all duration-300"
						href="/projects"
					>
						Contact me
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
