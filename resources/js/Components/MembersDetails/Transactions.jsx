import Chip from '@mui/material/Chip';

export default function Transaction(props) {

    return (
        <div className="overflow-x-auto max-h-full sm:max-h-56 md:max-h-64">
            <table className="table table-compact w-full">
                <thead className="top-0 sticky">
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Desc</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.record.transaction ? props.record.transaction.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{++i}</td>
                                <td>{data.date}</td>
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