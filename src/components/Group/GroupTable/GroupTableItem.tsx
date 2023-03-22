import { StudentType } from '../../../types/Group';

type Props = {
    item: StudentType;
    index: number;
};

function GroupTableItem({ item, index }: Props) {
    let className = 'table-bordered border-secondary ';

    if (item.isGroupLeader) className += 'table-warning';
    if (item.isMarking) className += 'table-success';

    return (
        <tr className={className}>
            <td className='text-start fit'>{index}</td>
            <td className='text-start'>{item.name}</td>
            <td className='text-start fit'>{item.subGroup ? '2' : '1'}</td>
        </tr>
    );
}

export default GroupTableItem;
