import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import { Link } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

export default function CardDetails(props){
    const { url, data, student } = usePage();

    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-2 md:gap-4 sm:justify-center">
                <div class="card w-full bg-base-100 shadow-xl rounded-lg">
                    <div class="card-body p-5 sm:p-3 md:p-5">
                        <div className="flex flex-row space-x-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>
                            <div class="stat-title text-sm sm:text-xs md:text-sm lg:text-base font-semibold">Balance</div>
                        </div>
                        <div class="stat-value text-lg sm:text-base md:text-lg lg:text-xl font-bold">Rp {props.student[0].transaction && props.student[0].transaction.last_total_fund !== null ? props.student[0].transaction.last_total_fund : 0}</div>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl rounded-lg">
                    <div class="card-body p-5 sm:p-3 md:p-5">
                        <div className="flex flex-row space-x-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                            </svg>
                            <div class="stat-title text-sm sm:text-xs md:text-sm lg:text-base font-semibold">Income</div>
                        </div>
                        <div class="stat-value text-lg sm:text-base md:text-lg lg:text-xl font-bold">Rp {props.data.income && props.data.income !== null ? props.data.income : 0}</div>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl rounded-lg">
                    <div class="card-body p-5 sm:p-3 md:p-5">
                        <div className="flex flex-row space-x-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                            </svg>
    
                            <div class="stat-title text-sm sm:text-xs md:text-sm lg:text-base font-semibold">Expense</div>
                        </div>
                        <div class="stat-value text-lg sm:text-base md:text-lg lg:text-xl font-bold">Rp {props.data.outcome && props.data.outcome !== null ? props.data.outcome : 0}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
