import { Link } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

export default function CardStudent(props) {
    const { url } = usePage();

    const active = (path) => url.startsWith(path) ? 'active' : '';

    return (
        <div className="grid grid-cols-1 gap-3 sm:grid sm:grid-cols-4 sm:gap-8 md:gap-4 sm:justify-center mt-6">
            {props.student ? props.student.map((data, i) => {
                return (
                    <div key={i} className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-xl font-bold">{data.name}</h2>
                            <p className="font-medium leading-3 text-sm">Kamar : {data.asrama.name}</p>
                            <span className="flex flex-row gap-x-3 pt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                </svg>
                                <p>Rp {data.transaction && data.transaction.last_total_fund !== null ? data.transaction.last_total_fund : 0}</p>
                            </span>
                            <Link href={`/members-details/${data.id}`} className={`font-medium text-base ${active('/members-details')}`}>
                                <button className="btn btn-outline mt-3 gap-2 w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                    Detail
                                </button>
                            </Link>
                        </div>
                    </div>
                )
            }) : ""}

        </div>
    )
}