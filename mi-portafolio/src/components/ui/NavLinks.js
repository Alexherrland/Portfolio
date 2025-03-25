export default function NavLinks() {
    return (
        <div className="flex space-x-8">
            <a href="#projects" className="inline-block text-black animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer font-extrabold underline--magical relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Projects</a>
            <a href="#extras" className="inline-block text-black animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer font-extrabold underline--magical relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Extras</a>
            <a href="#media" className="inline-block text-black animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer font-extrabold underline--magical relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Media</a>
        </div>
    );
}
