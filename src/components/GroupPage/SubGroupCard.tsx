import { StudentType } from '../../types/Group';
import TableCard from '../TableCard/TableCard';
import { TableHeaderType, TableItemColor } from '../../types/TableCard';

type Props = {
    items: StudentType[];
    headerText: string;
};

const tableHeader: TableHeaderType<StudentType>[] = [
    {
        title: 'ФИО',
        key: (item) => item.name,
    },
];

const rowColor = (item: StudentType): TableItemColor => {
    if (item.isGroupLeader) return 'table-warning';
    if (item.isMarking) return 'table-success';
    return '';
};

function SubGroupCard({ items, headerText }: Props) {
    return (
        <TableCard
            tableHeader={tableHeader}
            tableItems={items}
            emptyRowText='В подгруппе никого нет'
            addIndexes
            tableStriped
            tableRowColor={rowColor}
            header={<h5>{headerText}</h5>}
            headerJustifyContent='justify-content-center'
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

export default SubGroupCard;
