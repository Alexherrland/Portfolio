import NavLinks from "./NavLinks";

export default function NavContent({ isMobile }) {
    return (
        <div className="flex justify-between items-center w-full">
            <NavLinks />
        </div>
    );
}

