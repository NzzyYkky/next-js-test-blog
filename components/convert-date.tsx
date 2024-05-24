import { parseISO, format } from 'date-fns';
import { ja } from 'date-fns/locale';

type ConvertDateProps = {
	dateISO: string;
};

export default function ConvertDate({
	dateISO,
}: ConvertDateProps): JSX.Element {
	return (
		<time dateTime={dateISO}>
			{format(parseISO(dateISO), 'yyyy年MM月dd日', {
				locale: ja,
			})}
		</time>
	);
}
