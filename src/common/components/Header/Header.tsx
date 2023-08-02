import { Navigation } from "./Navigation/Navigation"

export const Header = () => {
    return (
        <div className="flex justify-between self-center w-full items-center h-20 bg-gray-900 text-white 2sm:h-12">
            <h1 className="text-2xl font-semibold tracking-wide ml-[280px] 2sm:hidden">Portfolio.</h1>
            <Navigation />
        </div>
    )
}