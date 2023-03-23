import { StudentType } from '../../../types/Group';
import WholeGroupTableEmptyRow from './WholeGroupTableEmptyRow';
import WholeGroupTableHeader from './WholeGroupTableHeader';
import WholeGroupTableItem from './WholeGroupTableItem';

type Props = {
    items: StudentType[];
};

function WholeGroupTable({ items }: Props) {
    return (
        <div className='card shadow'>
            <div className='card-body'>
                <table className='table table-bordered border-secondary table-striped table-hover'>
                    <thead>
                        <WholeGroupTableHeader />
                    </thead>
                    <tbody>
                        {items.length ? (
                            items.map((item, index) => {
                                return (
                                    <WholeGroupTableItem
                                        item={item}
                                        index={index}
                                    />
                                );
                            })
                        ) : (
                            <WholeGroupTableEmptyRow />
                        )}
                    </tbody>
                </table>
                <span className='badge text-bg-success m-1'>Отмечающий</span>
                <span className='badge text-bg-warning m-1'>Староста</span>
            </div>
        </div>
    );
}

export default WholeGroupTable;
