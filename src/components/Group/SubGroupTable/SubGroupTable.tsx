import { StudentType } from '../../../types/Group';
import SubGroupTableEmptyRow from './SubGroupTableEmptyRow';
import SubGroupTableHeader from './SubGroupTableHeader';
import SubGroupTableItem from './SubGroupTableItem';

type Props = {
    items: StudentType[];
    header: string;
    func?: () => string;
};

function SubGroupTable({ items, header, func }: Props) {
    return (
        <div className='card shadow'>
            <div className='card-header d-flex justify-content-between'>
                <h5>{header}</h5>
                <h5>051006</h5>
                <h5>{func?.()}</h5>
            </div>
            <div className='card-body'>
                <table className='table table-bordered border-secondary table-striped table-hover'>
                    <thead>
                        <SubGroupTableHeader />
                    </thead>
                    <tbody>
                        {items.length ? (
                            items.map((item, index) => {
                                return (
                                    <SubGroupTableItem
                                        item={item}
                                        index={index}
                                    />
                                );
                            })
                        ) : (
                            <SubGroupTableEmptyRow />
                        )}
                    </tbody>
                </table>
            </div>
            <div className='card-footer'>
                <span className='badge text-bg-success m-1'>Отмечающий</span>
                <span className='badge text-bg-warning m-1'>Староста</span>
            </div>
        </div>
    );
}

export default SubGroupTable;
