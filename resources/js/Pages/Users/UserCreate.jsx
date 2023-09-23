import * as React from 'react';
import { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';

export default function UserCreate(props) {

    const useStyles = makeStyles({
        root: {
            width: '100%',
            "& .MuiOutlinedInput-input": {
                color: "white"
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "white"
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "white"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white"
            }
        }
    });

    const classes = useStyles();

    const { auth, asrama, role } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        asrama: '',
        role: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const [selectedAsrama, setSelectedAsrama] = React.useState('');
    const [selectedRole, setSelectedRole] = React.useState('');

    const handleAsramaChange = (event) => {
        setSelectedAsrama(event.target.value);
        setData('asrama_id', event.target.value);
    };

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
        setData('role_id', event.target.value);
    };

    const asramaa = asrama.map(item => ({
        value: item.id,
        label: item.name
    }));

    const rolee = role.map(item => ({
        value: item.id,
        label: item.name
    }));

    const submit = (e) => {
        e.preventDefault();

        post(route('users-create'));
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
                        <h1 className="text-2xl md:text-4xl font-bold">Users Create</h1>
                        <div className="ml-auto flex flex-col px-5">
                            <h5 className="font-bold">{auth.user.name}</h5>
                        </div>
                    </div>
                    <div className="mt-auto w-full gap-x-5 flex flex-row">
                        <div className="w-full mb-16 sm:mb-0">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel forInput="name" value="Name" />

                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel forInput="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel forInput="password" value="Password" />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel forInput="password_confirmation" value="Confirm Password" />

                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>

                                <div className='mt-3 grid grid-cols-2 gap-2'>
                                    <div className='w-full'>
                                        <InputLabel forInput="Asrama" value="Asrama" className="mb-2" />

                                        <FormControl className={classes.root}>
                                            <Select
                                                id='asrama_id'
                                                name="asrama_id"
                                                value={selectedAsrama}
                                                options={asramaa}
                                                onChange={handleAsramaChange}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}

                                            >
                                                <MenuItem value="">
                                                    <em>Asrama</em>
                                                </MenuItem>
                                                {asramaa.map(({ value, label }) => (
                                                    <MenuItem key={value} value={value}>
                                                        {label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>

                                        <InputError message={errors.name} className="mt-2" />
                                    </div>
                                    <div className='w-full'>
                                        <InputLabel forInput="Asrama" value="Asrama" className="mb-2" />

                                        <FormControl className={classes.root}>
                                            <Select
                                                id='role_id'
                                                name="role_id"
                                                value={selectedRole}
                                                options={rolee}
                                                onChange={handleRoleChange}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}

                                            >
                                                <MenuItem value="">
                                                    <em>Role</em>
                                                </MenuItem>
                                                {rolee.map(({ value, label }) => (
                                                    <MenuItem key={value} value={value}>
                                                        {label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>

                                        <InputError message={errors.name} className="mt-2" />
                                    </div>
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
