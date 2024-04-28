import { Canditat } from './Canditat';

export function CanditatList({ canditates }) {
    return (
        <div>
            {canditates.map((candidat) => (
                <Canditat candidate={candidat} key={candidat.id} />
            ))}
        </div>
    );
}
