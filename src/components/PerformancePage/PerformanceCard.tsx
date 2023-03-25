import {
    GetTableHeader,
    GetTableRows,
} from '../../Services/PerformanceService';
import { TableHeaderType } from '../../types/TableCard';
import { PerformanceType, PerformanceTableType } from '../../types/Performance';
import TableCard from '../TableCard/TableCard';

type Props = {
    items: PerformanceType[];
};

function PerformanceCard({ items }: Props) {
    const tableHeader = GetTableHeader(items);
    const tableItems = GetTableRows(items);

    const stickyColumnHeader: TableHeaderType<PerformanceTableType> = {
        title: 'Предмет',
        key: (item) => item.subjectTitle,
        fit: true,
    };

    return (
        <div className='overflow-auto'>
            <TableCard<PerformanceTableType>
                tableHeader={tableHeader}
                tableItems={tableItems}
                emptyRowText='Занятия не проводились'
                tableStriped
                stickyColumnHeader={stickyColumnHeader}
                stickyColumnItems={tableItems}
            />
        </div>
    );
}

export default PerformanceCard;
