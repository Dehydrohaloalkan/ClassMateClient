type Props = {};

function SubGroupTableEmptyRow({}: Props) {
    return (
        <tr>
            <td
                colSpan={2}
                className='table-bordered border-secondary table-light text-center fs-5'
            >
                В подгруппе никого нет
            </td>
        </tr>
    );
}

export default SubGroupTableEmptyRow;
