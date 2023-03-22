type Props = {};

function GroupTableEmptyRow({}: Props) {
    return (
        <tr>
            <td
                colSpan={5}
                className='table-bordered border-secondary table-light text-center fs-5'
            >
                В группе никого нет
            </td>
        </tr>
    );
}

export default GroupTableEmptyRow;
