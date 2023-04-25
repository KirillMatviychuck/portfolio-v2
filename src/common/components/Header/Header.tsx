import { Navigation } from "./Navigation/Navigation"

export const Header = () => {
    return (
        <div className="flex justify-center h-14 bg-gray-800 text-white">
            <Navigation />
        </div>
    )
}