export default function Home() {
	return (
		<div className="container mx-auto ">
			<div className="max-w-lg rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
				<div className="mb-4 bg-gradient-to-r from-gray-900 to-gray-300 bg-clip-text text-4xl font-extrabold leading-none tracking-tight text-gray-900 text-transparent dark:text-white md:text-5xl lg:text-6xl">
					Tailwind CSS
				</div>
				<button
					type="button"
					className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Click Me
				</button>
				<button
					type="button"
					className="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
				>
					Cyan to Blue
				</button>
			</div>
		</div>
	);
}
