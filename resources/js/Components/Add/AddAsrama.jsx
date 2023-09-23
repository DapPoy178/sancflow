import { Link } from '@inertiajs/react'

export default function AddAsrama() {

    return (
        <Link href="/add-asrama">
            <div class="card w-full bg-base-100 shadow-xl hover:bg-base-200">
                <div class="p-5 h-full flex flex-col items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <h2 class="card-title">Add Asrama</h2>
                </div>
            </div>
        </Link>
    )
}