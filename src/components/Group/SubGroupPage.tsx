import { StudentType } from '../../types/Group';
import SubGroupTable from './SubGroupTable/SubGroupTable';
type Props = {};

const items: StudentType[] = [
    {
        name: 'Евгений',
        isGroupLeader: false,
        isMarking: true,
        subGroup: false,
    },
    {
        name: 'Олег',
        isGroupLeader: true,
        isMarking: false,
        subGroup: false,
    },
    {
        name: 'Алексей',
        isGroupLeader: false,
        isMarking: false,
        subGroup: false,
    },
    {
        name: 'Алексей',
        isGroupLeader: false,
        isMarking: false,
        subGroup: false,
    },
    {
        name: 'Алексей',
        isGroupLeader: false,
        isMarking: false,
        subGroup: false,
    },
    {
        name: 'Алексей',
        isGroupLeader: false,
        isMarking: false,
        subGroup: false,
    },
    {
        name: 'Алексей',
        isGroupLeader: false,
        isMarking: false,
        subGroup: false,
    },
];

function SubGroupPage({}: Props) {
    return (
        <div className='container'>
            <h1 className='text-center text-muted'>Учащиеся</h1>
            <div className='row'>
                <div className='col g-4'>
                    <SubGroupTable
                        items={items.filter((item) => !item.subGroup)}
                        header='1 подгруппа'
                    />
                </div>
                <div className='col g-4'>
                    <SubGroupTable
                        items={items.filter((item) => item.subGroup)}
                        header='2 подгруппа'
                    />
                </div>
            </div>
        </div>
    );
}

export default SubGroupPage;
