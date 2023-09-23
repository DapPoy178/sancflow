import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import Card from '@/Components/DashboardAdmin/Card';

export default function DashboardAdmin(props) {
    const { auth, user, member, asrama} = usePage().props

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard Admin" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto flex flex-col flex-nowrap px-4 sm:px-6 lg:px-8 space-y-6">
                    <div className="flex flex-row pb-2 border-b-2 border-base-100">
                        <h1 className="text-2xl md:text-4xl font-bold">Dashboard Admin</h1>
                        <div className="ml-auto flex flex-col px-5">
                            <h5 className="font-bold">{auth.user.name}</h5>
                        </div>
                    </div>
                    <Card user={user} member={member} asrama={asrama}/>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
