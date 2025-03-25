import Button from "./button";
import NavLinks from "./NavLinks";

export default function NavContent() {
    return (
        <div className="flex justify-between items-center w-full px-12">
            <div className="flex items-center space-x-6">
                <div className="w-12 h-12 border-2 border-black text-black flex items-center justify-center rounded-md font-extrabold text-xl">AH</div>
                <NavLinks />
            </div>
            <Button className="border-2 border-black text-black font-extrabold px-8 py-3 text-lg rounded-md hover:bg-black hover:text-white transition-colors">
                Contact Me
            </Button>
        </div>
    );
}
