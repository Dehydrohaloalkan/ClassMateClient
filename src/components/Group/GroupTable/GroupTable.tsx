import { StudentType } from '../../../types/Group';
import GroupTableEmptyRow from './GroupTableEmptyRow';
import GroupTableHeader from './GroupTableHeader';
import GroupTableItem from './GroupTableItem';

type Props = {
    items: StudentType[];
};

function GroupTable({ items }: Props) {
    return (
        <div className='card shadow'>
            <div className='card-body'>
                <table className='table table-bordered border-secondary table-striped table-hover'>
                    <thead>
                        <GroupTableHeader />
                    </thead>
                    <tbody>
                        {items.length ? (
                            items.map((item, index) => {
                                return (
                                    <GroupTableItem item={item} index={index} />
                                );
                            })
                        ) : (
                            <GroupTableEmptyRow />
                        )}
                    </tbody>
                </table>
                <span className='badge text-bg-success m-1'>Отмечающий</span>
                <span className='badge text-bg-warning m-1'>Староста</span>
            </div>
        </div>
    );
}

export default GroupTable;
