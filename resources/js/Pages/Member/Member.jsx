import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import CardStudent from '@/Components/Member/CardStudent';

export default function Member(props) {

    const { auth } = usePage().props
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Member" />            

            <div className="py-4">
                <div className="max-w-7xl mx-auto flex flex-col flex-nowrap px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-row pb-2 border-b-2 border-base-100">
                        <h1 className="text-2xl md:text-4xl font-bold">Member</h1>
                        <div className="ml-auto flex flex-col px-5">
                            <h5 className="font-bold">{auth.user.name}</h5>
                        </div>
                    </div>
                    <div className="w-full mb-16 sm:mb-0">
                        <CardStudent student={props.student}/>   
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
