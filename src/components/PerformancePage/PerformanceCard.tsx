import {
    GetTableHeader,
    GetTableRows,
} from '../../Services/PerformanceService';
import { TableHeaderItem } from '../../types/TableCard';
import { PerformanceItem, PerformanceTableRow } from '../../types/Performance';
import TableCard from '../TableCard/TableCard';

type Props = {
    items: PerformanceItem[];
};

function PerformanceCard({ items }: Props) {
    const tableHeader = GetTableHeader(items);
    const tableItems = GetTableRows(items);

    const stickyColumnHeader: TableHeaderItem<PerformanceTableRow> = {
        title: 'Предмет',
        key: (item) => item.subjectTitle,
        fit: true,
    };

    return (
        <div className='overflow-auto'>
            <TableCard<PerformanceTableRow>
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
