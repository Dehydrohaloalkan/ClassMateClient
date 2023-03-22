type Props = {};

function ScheduleTableEmptyRow({}: Props) {
    return (
        <tr>
            <td
                colSpan={4}
                className='table-bordered border-secondary table-light text-center fs-5'
            >
                В этот день занятий нет
            </td>
        </tr>
    );
}

export default ScheduleTableEmptyRow;
