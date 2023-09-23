import Chip from '@mui/material/Chip';
import { Link } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

export default function TransactionCard(props) {
    const { url } = usePage();

    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead className="top-0 sticky">
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Desc</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.latestTransaction ? props.latestTransaction.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{++i}</td>
                                <td>{data.date}</td>
                                <td>{data.name}</td>
                                <td>{data.desc}</td>
                                <td>Rp {data.total}</td>
                                <td>
                                    <div className="w-auto">
                                        {data.status === "income" ? (
                                            <Chip label="Income" color="success" />
                                        ) : data.status === "outcome" ? (
                                            <Chip label="Outcome" color="error" />
                                        ) : null}
                                    </div>
                                </td>
                            </tr>
                        )
                    }) : ""}

                </tbody>
            </table>
        </div>
    )
}