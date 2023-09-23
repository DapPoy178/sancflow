import CardStudent from '@/Components/Member/CardStudent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function UsersDetails(props) {

    console.log(props)
    const { auth, url, data} = usePage().props

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="User Details" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto flex flex-col flex-nowrap px-4 sm:px-6 lg:px-8 space-y-6">
                     <div className="flex flex-row items-center gap-2 pb-2 border-b-2 border-base-100">
                        <Link href='/users' className='text-4xl flex items-center'>
                            <ArrowBackIosIcon fontSize='medium'/>
                        </Link>
                        <h1 className="text-2xl md:text-4xl font-bold">User Details</h1>
                        <div className="ml-auto flex flex-col px-5">
                            <h5 className="font-bold">{auth.user.name}</h5>
                        </div>
                    </div>

                    <div className="grid gap-x-4">

                        <div className="w-full flex flex-col p-5 rounded-md bg-base-100">
                            <p className="text-lg font-semibold">Name  : {data.name}</p>
                            <p className="text-lg font-semibold">Kamar : {data.asrama.name}</p>
                        </div>

                        <div className="w-full mb-16 sm:mb-0">
                            <h1 className="text-2xl font-bold mt-5 mb-2">Students</h1>
                            <CardStudent student={props.student}/>   
                        </div>

                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
