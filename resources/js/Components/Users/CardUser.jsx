import { Link } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

export default function CardUser(props){
    const { url } = usePage();

    const active = (path) => url.startsWith(path) ? 'active' : '';

    return (
        <div className="grid grid-cols-1 gap-3 sm:grid sm:grid-cols-4 sm:gap-8 md:gap-4 sm:justify-center">

            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Fulan De Fulano</h2>
                    <p className="font-medium leading-3 text-sm">Kamar : 4.9</p>
                    <Link href="/users-details" className={`font-medium text-base ${active('/users-details')}`}>
                        <button className="btn btn-outline mt-3 gap-2 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            Detail
                        </button>
                    </Link>
                </div>
            </div>
            

        </div>
    )
}