import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="flex py-3 font-bold left-0 right-0 top-0  fixed z-20 px-44 sm:px-8 bg-primary dark:bg-dark-primary text-primary dark:text-dark-primary">
			<ul className="flex justify-start gap-8 items-center sm:gap-2 text-sm">
				<li>
					<Link
						className="hover:text-gray-900 hover:bg-gray-300 p-2 rounded-md transition-all duration-300 dark:hover:bg-dark-secondary"
						href="/"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						href="/blogs"
						className="hover:text-gray-900 hover:bg-gray-300 p-2 rounded-md transition-all duration-300 dark:hover:bg-dark-secondary"
					>
						Blogs
					</Link>
				</li>
			</ul>
			<ThemeSwitch />
		</nav>
	);
};

export default Navbar;
