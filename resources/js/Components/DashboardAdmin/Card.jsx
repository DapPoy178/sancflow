import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import { Link } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

export default function CardAdmin(props){

    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-2 md:gap-4 sm:justify-center">
                <div class="card w-full bg-base-100 shadow-xl rounded-lg">
                    <div class="card-body p-5 sm:p-3 md:p-5">
                        <div className="flex flex-row space-x-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div class="stat-title text-sm sm:text-xs md:text-sm lg:text-base font-semibold">Users</div>
                        </div>
                        <div class="stat-value text-lg sm:text-base md:text-lg lg:text-xl font-bold">{props.user}</div>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl rounded-lg">
                    <div class="card-body p-5 sm:p-3 md:p-5">
                        <div className="flex flex-row space-x-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>
                            <div class="stat-title text-sm sm:text-xs md:text-sm lg:text-base font-semibold">Members</div>
                        </div>
                        <div class="stat-value text-lg sm:text-base md:text-lg lg:text-xl font-bold">{props.member}</div>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl rounded-lg">
                    <div class="card-body p-5 sm:p-3 md:p-5">
                        <div className="flex flex-row space-x-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <div class="stat-title text-sm sm:text-xs md:text-sm lg:text-base font-semibold">Asrama</div>
                        </div>
                        <div class="stat-value text-lg sm:text-base md:text-lg lg:text-xl font-bold">{props.asrama}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
