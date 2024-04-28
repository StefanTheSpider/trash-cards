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
                <AddCandidate onNewCandidat={addNewCandidat} />
            ) : null}
            {!showAddNewCandidates ? (
                <Button onClick={handleShowNewCandidates}>
                    Add new canditate
                </Button>
            ) : null}
        </div>
    );
}

function AddCandidate({ onNewCandidat }) {
    const [name, setName] = useState('');
    const [alter, setAlter] = useState('');
    const [rating, setRating] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [describtion, setDescribtion] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        const newCanditate = {
            id: crypto.randomUUID(),
            name,
            image1,
            image2,
            describtion,
            rating,
            ratingRange: 10,
            alter,
        };
        onNewCandidat(newCanditate);
        setName('');
        setAlter('');
        setRating('');
        setImage1('');
        setImage2('');
        setDescribtion('');
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="container">
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Alter"
                    value={alter}
                    onChange={(e) => setAlter(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                />
                <input
                    type="url"
                    placeholder="image1"
                    value={image1}
                    onChange={(e) => setImage1(e.target.value)}
                    required
                />
                <input
                    type="url"
                    placeholder="image2"
                    value={image2}
                    onChange={(e) => setImage2(e.target.value)}
                />
                <textarea
                    type="text"
                    placeholder="please add a describtion"
                    value={describtion}
                    onChange={(e) => setDescribtion(e.target.value)}
                    required
                />
            </div>
            <button className="btn">Add</button>
        </form>
    );
}
