import BotNav from "@/Components/BotNav";
import Sidebar from "@/Components/Sidebar";
import { usePage } from "@inertiajs/react";

export default function Authenticated({ children, props}) {
    const { auth } = usePage().props

    return (
        <div className="flex flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="relative">
            <Sidebar auth={auth} />
            </div>

            <main className="relative w-full sm:w-[84%] lg:w-[88%] xl:w-[90%]">
                {children}
                <BotNav auth={auth} />
            </main>   
            
        </div>
    );
}
