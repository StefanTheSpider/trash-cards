import { useState } from 'react';
import Button from './Button';

export function Canditat({ candidate, addImage }) {
    const [showDeskription, setShowDescription] = useState(false);
    function handleShowDescription() {
        setShowDescription(!showDeskription);
    }

    const [showForm, setShowForm] = useState(false);
    function handleShowForm() {
        setShowForm(!showForm);
    }

    const [updatedImage, setUpdatedImage] = useState('');
    function onSubmit(e) {
        e.preventDefault();

        const restyledImage = {
            id: candidate.id,
            name: candidate.name,
            image1: candidate.image1,
            image2: updatedImage,
            describtion: candidate.describtion,
            rating: candidate.rating,
            ratingRange: candidate.ratingRange,
            alter: candidate.alter,
        };
        addImage(restyledImage);
        setShowForm(false);
        setUpdatedImage('');
    }

    const secondImage = candidate.image2;

    return (
        <div>
            <div className="container">
                <div className="first-element">
                    <img src={candidate.image1} alt="Bild 1" />
                    {secondImage !== '' ? (
                        <img src={candidate.image2} alt="Bild 2" />
                    ) : (
                        <img
                            style={{ outline: '2px solid tomato' }}
                            src="https://img.freepik.com/freie-psd/x-symbol-isoliert_23-2150500369.jpg?size=626&ext=jpg"
                            alt="emty"
                        />
                    )}
                </div>

                <div className="second-element" onClick={handleShowDescription}>
                    {!showDeskription ? (
                        <div>
                            <h2>{candidate.name}</h2>
                            <p>Alter: {candidate.alter}</p>
                            <p>
                                Rating: {candidate.rating} /{' '}
                                {candidate.ratingRange}
                            </p>
                            <br />
                            <p className="s-txt">click to see describtion</p>
                        </div>
                    ) : (
                        <div>
                            <p>
                                description:
                                <br />
                                <br />
                                {candidate.describtion}
                            </p>
                            <br />
                            <p className="s-txt">click to see Infos</p>
                        </div>
                    )}
                </div>
                <hr />
            </div>
            {secondImage === '' && !showForm ? (
                <Button onClick={handleShowForm}>Add restyling image</Button>
            ) : (
                ''
            )}
            {showForm ? (
                <form className="container" onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="paste in the picture url"
                        value={updatedImage}
                        onChange={(e) => setUpdatedImage(e.target.value)}
                    />
                    <button className="btn">
                        Add the picture after restyling
                    </button>
                </form>
            ) : null}
        </div>
    );
}
