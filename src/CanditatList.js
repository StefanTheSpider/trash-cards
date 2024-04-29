import { Canditat } from './Canditat';

export function CanditatList({ canditates, addImage }) {
    return (
        <div>
            {canditates.map((candidat) => (
                <Canditat
                    candidate={candidat}
                    key={candidat.id}
                    addImage={addImage}
                />
            ))}
        </div>
    );
}
