import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head, Link, usePage } from '@inertiajs/react';
import DangerButton from '@/Components/DangerButton';

export default function Edit({ auth, mustVerifyEmail, status }) {
    const { url } = usePage();
    
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto mb-16 px-4 sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <DangerButton>
                            <Link href={route('logout')} method="post">
                                Log Out
                            </Link>
                        </DangerButton>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
