import { AddCandidate } from './AddCandidate';
import Button from './Button';
import { CanditatList } from './CanditatList';
import { useState } from 'react';

const allCandidats = [
    {
        id: 1,
        describtion: "Chantal's hobby ist doggy",
        rating: 10,
        ratingRange: 10,
        name: 'Chantal',
        alter: 21,
        image2: 'https://cdnstorage.sendbig.com/unreal/female.webp',
        image1: 'https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fdcb60d23-fd08-4eba-aa07-a4985ca65474_1024x1024.jpeg',
    },
    {
        id: 2,
        describtion: 'Der absolute Alpha-Kevin',
        rating: 10,
        ratingRange: 10,
        name: 'Kevin',
        alter: 21,
        image1: 'https://preview.redd.it/this-person-does-not-exist-v0-9l5x3d2g21591.jpg?auto=webp&s=97e2a0e5624f9e052678ddb38812fea2945f5b19',
        image2: '',
    },
];
export default function App() {
    const [candidats, setCandidats] = useState(allCandidats);
    const [showAddNewCandidates, setShowAddNewCandidates] = useState(false);

    function handleShowNewCandidates() {
        setShowAddNewCandidates((show) => !showAddNewCandidates);
    }

    function addNewCandidat(canditate) {
        setCandidats((candidats) => [...candidats, canditate]);
    }

    return (
        <div className="App">
            <CanditatList canditates={candidats} />
            {showAddNewCandidates ? (
                <AddCandidate
                    onNewCandidat={addNewCandidat}
                    closeSection={handleShowNewCandidates}
                />
            ) : null}
            {!showAddNewCandidates ? (
                <Button onClick={handleShowNewCandidates}>
                    Add new canditate
                </Button>
            ) : null}
        </div>
    );
}
