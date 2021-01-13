import Navigation from "./Navigation";

function Header() {
    return (
        <header className="fixed bg-white z-50 w-full h-12 border-b p-3 flex justify-between align-center">
            <span className="font-bold">
                Test-app
            </span>

            <Navigation />
        </header>
    )
}

export default Header;