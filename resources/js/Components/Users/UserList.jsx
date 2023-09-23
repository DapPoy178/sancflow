import { Link } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

export default function UserList(props){
    const { url } = usePage();

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead className="top-0 sticky">
                <tr> 
                    <th>#</th> 
                    <th>Name</th> 
                    <th>Role</th> 
                    <th>Asrama</th> 
                    <th>Action</th>
                </tr>
                </thead> 
                <tbody>
                    {props.user ? props.user.map((data, i) => {
                        return (
                            <tr key={i}> 
                                <td>{++i}</td> 
                                <td>{data.name}</td> 
                                <td>{data.role.name}</td> 
                                <td>{data.asrama.name}</td> 
                                <td>
                                    <Link href={`/users-details/${data.id}/${data.asrama_id}`} className="hover:text-base-300">Details</Link>
                                </td> 
                            </tr>
                        )
                    }) : ""}
                </tbody> 
            </table>
        </div>
    )
}
