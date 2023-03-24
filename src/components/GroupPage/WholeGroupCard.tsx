import { StudentType } from '../../types/Group';
import { TableHeaderItem, TableItemColor } from '../../types/TableCard';
import TableCard from '../TableCard/TableCard';

type Props = {
    items: StudentType[];
};

const tableHeader: TableHeaderItem<StudentType>[] = [
    {
        title: 'ФИО',
        key: (item) => item.name,
    },
    {
        title: 'Подгруппа',
        key: (item) => (item.subGroup ? '2' : '1'),
        fit: true,
    },
];

const rowColor = (item: StudentType): TableItemColor => {
    if (item.isGroupLeader) return 'table-warning';
    if (item.isMarking) return 'table-success';
    return '';
};

function WholeGroupCard({ items }: Props) {
    return (
        <TableCard
            tableHeader={tableHeader}
            tableItems={items}
            emptyRowText='В группе никого нет'
            addIndexes
            tableStriped
            tableRowColor={rowColor}
            footer={
                <>
                    <span className='badge text-bg-success m-1'>
                        Отмечающий
                    </span>
                    <span className='badge text-bg-warning m-1'>Староста</span>
                </>
            }
        />
    );
}

export default WholeGroupCard;
