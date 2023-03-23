import { StudentType } from '../../../types/Group';

type Props = {
    item: StudentType;
    index: number;
};

function SubGroupTableItem({ item, index }: Props) {
    let className = 'table-bordered border-secondary ';

    if (item.isGroupLeader) className += 'table-warning';
    if (item.isMarking) className += 'table-success';

    return (
        <tr className={className}>
            <td className='text-start'>{index + 1}</td>
            <td className='text-start'>{item.name}</td>
        </tr>
    );
}

export default SubGroupTableItem;
