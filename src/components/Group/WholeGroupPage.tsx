import { StudentType } from '../../types/Group';
import WholeGroupTable from './WholeGroupTable/WholeGroupTable';

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

function WholeGroupPage({}: Props) {
    return (
        <div className='container'>
            <h1 className='text-center text-muted'>Учащиеся</h1>
            <WholeGroupTable items={items} />
        </div>
    );
}

export default WholeGroupPage;
