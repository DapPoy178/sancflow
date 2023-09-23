import CardDetails from '@/Components/MembersDetails/CardDetails';
import * as React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import { Head, usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Transaction from '@/Components/MembersDetails/Transactions';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MembersDetails(props) {

    const { url } = usePage();
    const active = (path) => url.startsWith(path) ? 'active' : '';

    const { auth, data, flash, student, record } = usePage().props
    const [open, setOpen] = React.useState(false);

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
            <Head title="Member Details" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto flex flex-col flex-nowrap px-4 sm:px-6 lg:px-8 space-y-6">
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            {flash.message}
                        </Alert>
                    </Snackbar>
                    <div className="flex flex-row items-center gap-2 pb-2 border-b-2 border-base-100">
                        <Link href={`/member/${props.auth.user.asrama_id}`} className='text-4xl flex items-center'>
                            <ArrowBackIosIcon fontSize='medium'/>
                        </Link>
                        <h1 className="text-2xl md:text-4xl font-bold">Member Details</h1>
                        <div className="ml-auto flex flex-col px-5">
                            <h5 className="font-bold">{auth.user.name}</h5>
                        </div>
                    </div>

                    <div className="flex flex-row gap-x-4">

                        <div className="w-full flex flex-col p-5 rounded-md bg-base-100">
                            <p className="text-lg font-semibold">Name  : {data.name}</p>
                            <p className="text-lg font-semibold">Kamar : {data.asrama.name}</p>
                        </div>

                        <div className="hidden lg:w-3/12 lg:flex lg:flex-col lg:justify-between">
                            <Link href={`/members-details/transaction-add/${data.id}`} className={`hover:bg-base-200 card w-full bg-base-100 shadow-xl rounded-lg ${active('/transaction-add')}`}>
                                <div className="card-body flex flex-row p-3 sm:p-2 md:p-3 lg:p-2 xl:p-3 items-center gap-x-3 lg:gap-x-2 xl:gap-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                    </svg>
                                    <p className="text-sm font-semibold lg:text-xs xl:text-sm">New Transaction</p>
                                </div>
                            </Link>
                            <Link href={`/members-details/fund-add/${data.id}`} className={`hover:bg-base-200 card w-full bg-base-100 shadow-xl rounded-lg ${active('/fund-add')}`}>
                                <div className="card-body flex flex-row p-3 sm:p-2 md:p-3 lg:p-2 xl:p-3 items-center gap-x-3 lg:gap-x-2 xl:gap-x-3">
                                    <AddCardOutlinedIcon fontSize='small' />
                                    <p className="text-sm font-semibold lg:text-xs xl:text-sm">Add Funds</p>
                                </div>
                            </Link>
                        </div>

                    </div>

                    <Link href={`/members-details/transaction-add/${data.id}`} className={`hover:bg-base-200 card w-full bg-base-100 shadow-xl rounded-lg lg:hidden ${active('/transaction-add')}`}>
                        <div className="card-body flex flex-row p-3 sm:p-2 md:p-3 lg:p-2 xl:p-3 items-center gap-x-3 lg:gap-x-2 xl:gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                            </svg>
                            <p className="text-sm font-semibold lg:text-xs xl:text-sm">New Transaction</p>
                        </div>
                    </Link>
                    <Link href={`/members-details/fund-add/${data.id}`} className={`hover:bg-base-200 card w-full bg-base-100 shadow-xl rounded-lg lg:hidden ${active('/fund-add')}`}>
                        <div className="card-body flex flex-row p-3 sm:p-2 md:p-3 lg:p-2 xl:p-3 items-center gap-x-3 lg:gap-x-2 xl:gap-x-3">
                            <AddCardOutlinedIcon fontSize='small' />
                            <p className="text-sm font-semibold lg:text-xs xl:text-sm">Add Funds</p>
                        </div>
                    </Link>

                    <CardDetails data={data} student={student}/>

                    <Transaction record={record}/>

                </div>
            </div>

        </AuthenticatedLayout>
    );
}
