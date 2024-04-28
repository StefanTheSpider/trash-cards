import { useState } from 'react';

export function AddCandidate({ onNewCandidat, closeSection }) {
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
        closeSection(false);
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
                    placeholder="paste in before image url"
                    value={image1}
                    onChange={(e) => setImage1(e.target.value)}
                    required
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
