import { Navigation } from "./Navigation/Navigation"

export const Header = () => {
    return (
        <div className="flex justify-between self-center w-full items-center h-20 bg-gray-800 text-white">
            <h1 className="text-2xl font-semibold tracking-wide ml-10">Portfolio.</h1>
            <Navigation />
        </div>
    )
}