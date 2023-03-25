import { PerformanceType, PerformanceTableType } from '../types/Performance';
import { TableHeaderType } from '../types/TableCard';

export function GetTableHeader(
    items: PerformanceType[]
): TableHeaderType<PerformanceTableType>[] {
    const uniqueDates = [
        ...new Set(items.map((item) => item.date.toISOString())),
    ].map((dateString) => new Date(dateString));

    const header: TableHeaderType<PerformanceTableType>[] = uniqueDates.map(
        (item) => {
            return {
                title: item.toLocaleString('ru-RU', {
                    day: '2-digit',
                    month: '2-digit',
                }),
                key: (rowItem) => {
                    const index = rowItem.items.findIndex(
                        (i) => i.date.getTime() == item.getTime()
                    );
                    if (index != -1) {
                        if (rowItem.items[index].absence) return 'н';
                        return rowItem.items[index].grade?.toString();
                    }
                    return '';
                },
                fit: true,
            };
        }
    );

    header.push({
        title: 'Все отметки',
        key: (item) =>
            item.items
                .map((item) => item.grade)
                .filter((grade): grade is number => typeof grade === 'number')
                .join(', '),
        fit: true,
    });

    header.push({
        title: 'Средний бал',
        key: (item) => {
            const grades: number[] = item.items
                .map((item) => item.grade)
                .filter((grade): grade is number => typeof grade === 'number');
            return (
                grades.reduce((total, grade) => total + grade, 0) /
                    grades.length || ''
            );
        },
        fit: true,
    });

    header.push({
        title: 'Пропуски',
        key: (item) =>
            item.items.filter((item) => item.absence === true).length || '',
        fit: true,
    });

    return header;
}

export const GetTableRows = (performanceItems: PerformanceType[]) =>
    performanceItems.reduce<PerformanceTableType[]>((result, item) => {
        let row = result.find((row) => row.subjectId === item.subjectId);
        if (!row) {
            row = {
                subjectTitle: item.subjectTitle,
                subjectId: item.subjectId,
                items: [],
            };
            result.push(row);
        }
        row.items.push({
            date: item.date,
            absence: item.absence,
            grade: item.grade,
        });
        return result;
    }, []);
