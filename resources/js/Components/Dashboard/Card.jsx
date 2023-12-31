export default function Card(props) {

    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-2 md:gap-4 sm:justify-center">
                <div class="card w-full bg-base-100 shadow-xl rounded-lg">
                    <div class="card-body p-5 sm:p-3 md:p-5">
                        <div className="flex flex-row space-x-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                            </svg>
                            <div class="stat-title text-sm sm:text-xs md:text-sm lg:text-base font-semibold">Total Fund</div>
                        </div>
                        <div class="stat-value text-lg sm:text-base md:text-lg lg:text-xl font-bold">Rp. {props.total}</div>
                    </div>
                </div>

                <div class="card w-full bg-base-100 shadow-xl rounded-lg">
                    <div class="card-body p-5 sm:p-3 md:p-5">
                        <div className="flex flex-row space-x-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>
                            <div class="stat-title text-sm sm:text-xs md:text-sm lg:text-base font-semibold">Total Santri</div>
                        </div>
                        <div class="stat-value text-lg sm:text-base md:text-lg lg:text-xl font-bold">{props.totalStudents}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
