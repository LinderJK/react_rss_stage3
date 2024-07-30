import styles from './styles.module.css';
import CharacterCard from '../CharacterCard/CharacterCard.tsx';
// import { useGetCharacterByIdQuery } from '../../services/CharacterService.ts';
// import { useAppDispatch } from '../../hooks/redux.ts';
// import { addDetailsItem } from '../../store/reducers/DetailsSlice.ts';
// import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import { data } from 'happy-dom/lib/PropertySymbol';
import { Character } from '../../types/Character.ts';

interface SideBarProps {
    dataDetails: Character;
}
export default function SideBar({ dataDetails }: SideBarProps) {
    const router = useRouter();
    const { id } = router.query;
    // console.log(router.query, id);
    // const dispatch = useAppDispatch();

    // const { data, error, isLoading } = useGetCharacterByIdQuery((id as string) ?? '', {
    //     skip: !id,
    // });

    // useEffect(() => {
    //     dispatch(addDetailsItem(data));
    // }, [data, dispatch]);

    if (!id) {
        return <div className={styles.detailsContainer}>Invalid character ID</div>;
    }

    return (
        <div className={styles.detailsContainer}>
            {/*{error && <div>{error.toString()}</div>}*/}
            {/*{isLoading && <div>Loading...</div>}*/}
            {dataDetails && <CharacterCard character={dataDetails} />}
        </div>
    );
}
