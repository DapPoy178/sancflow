import * as React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import UserList from '@/Components/Users/UserList';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Users(props) {
    const [open, setOpen] = React.useState(false);
    const { auth, flash } = usePage().props;

    React.useEffect(() => {
        if (flash.message) {
            setOpen(true);
        }
    }, [flash.message]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Users" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto flex flex-col flex-nowrap px-4 sm:px-6 lg:px-8 space-y-6">
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        {flash.message}
                        </Alert>
                    </Snackbar>
                    <div className="flex flex-row items-center gap-3 pb-2 border-b-2 border-base-100">
                        <h1 className="text-2xl md:text-4xl font-bold">Users</h1>
                        <Link href={route('users-create')}>
                            <PersonAddIcon fontSize='large'/>
                        </Link>
                        <div className="ml-auto flex flex-col px-5">
                            <h5 className="font-bold">{auth.user.name}</h5>
                        </div>
                    </div>
                    <div className="mt-auto w-full gap-x-5 flex flex-row">
                        <div className="w-full h-full mb-16 sm:mb-0">
                            <UserList user={props.user}/>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
