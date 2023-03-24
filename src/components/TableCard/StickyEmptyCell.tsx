type Props = {};

function StickyEmptyCell({}: Props) {
    return (
        <tr>
            <td className='table-bordered border-secondary table-light text-center fs-5'>
                -
            </td>
        </tr>
    );
}

export default StickyEmptyCell;
