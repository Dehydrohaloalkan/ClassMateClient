import { CourseType } from '../../../types/Courses';
import CoursesTableEmptyRow from './CoursesTableEmptyRow';
import CoursesTableHeader from './CoursesTableHeader';
import CoursesTableItem from './CoursesTableItem';

type Props = {
    items: CourseType[];
};

function CoursesTable({ items }: Props) {
    return (
        <div className='card shadow'>
            <div className='card-body'>
                <table className='table table-bordered border-secondary table-striped'>
                    <thead>
                        <CoursesTableHeader />
                    </thead>
                    <tbody>
                        {items.length ? (
                            items.map((item) => {
                                return <CoursesTableItem item={item} />;
                            })
                        ) : (
                            <CoursesTableEmptyRow />
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CoursesTable;
