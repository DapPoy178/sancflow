import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import Card from '@/Components/Dashboard/Card';
import TransactionCard from '@/Components/Dashboard/TransactionCard';

export default function Dashboard(props) {

    console.log(props)
    const { auth, url, total, totalStudents, latestTransaction } = usePage().props

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto flex flex-col flex-nowrap px-4 sm:px-6 lg:px-8 space-y-6">
                    <div className="flex flex-row pb-2 border-b-2 border-base-100">
                        <h1 className="text-3xl md:text-4xl font-bold">Dashboard</h1>
                        <div className="ml-auto flex flex-col px-5">
                            <h5 className="font-bold">{auth.user.name}</h5>
                        </div>
                    </div>
                    <Card total={total} totalStudents={totalStudents}/>
                    <div className="mt-auto w-full gap-x-5 flex flex-row">
                        <div className="w-full mb-16 sm:mb-0">
                            <h1 className="text-2xl font-bold mt-5 mb-2">Latest Transaction</h1>
                            <TransactionCard latestTransaction={latestTransaction}/>   
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
