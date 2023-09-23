import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, useForm, Link } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function TransactionAdd(props) {

    const { auth, url } = usePage().props;
    const active = (path) => url.startsWith(path) ? 'active' : '';

    const { data, setData, post, processing, errors } = useForm({
        desc: '',
        total: ''
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        const id = props.student.id;
        post(route('transaction-add', { id }));
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Users" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto flex flex-col flex-nowrap px-4 sm:px-6 lg:px-8 space-y-6">
                    <div className="flex flex-row items-center gap-3 pb-2 border-b-2 border-base-100">
                        <Link href={`/members-details/${props.student.id}`} className='text-4xl flex items-center'>
                            <ArrowBackIosIcon fontSize='medium'/>
                        </Link>
                        <h1 className="text-2xl md:text-4xl font-bold">Add Transaction</h1>
                        <div className="ml-auto flex flex-col px-5">
                            <h5 className="font-bold">{auth.user.name}</h5>
                        </div>
                    </div>
                    <div className="mt-auto w-full gap-x-5 flex flex-row">
                        <div className="w-full mb-16 sm:mb-0">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel forInput="desc" value="Description" />

                                    <TextInput
                                        id="desc"
                                        name="desc"
                                        value={data.desc}
                                        className="mt-1 block w-full"
                                        autoComplete="desc"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.desc} className="mt-2" />
                                </div>
                                <div className='mt-3'>
                                    <InputLabel forInput="total" value="Total" />

                                    <TextInput
                                        id="total"
                                        name="total"
                                        value={data.total}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.total} className="mt-2" />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton className="ml-4" processing={processing}>
                                        Add
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
