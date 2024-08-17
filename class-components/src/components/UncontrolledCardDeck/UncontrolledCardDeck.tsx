import { useAppSelector } from '../../hooks/redux.ts';
import DataCard from '../DataCard/DataCard.tsx';
import styles from './styles.module.css';

export default function UncontrolledCardDeck() {
    const data = useAppSelector((state) => state.uncontrolled);
    const isLastItem = (index: number) => index === data.length - 1;
    return (
        <div className={styles.cardDeck}>
            {data.map((item, index) => {
                const lastItem = isLastItem(index);
                return <DataCard {...item} key={item.name} isLastItem={lastItem} />;
            })}
        </div>
    );
}
