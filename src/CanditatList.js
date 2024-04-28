import { useState } from 'react';
import Button from './Button';

export function CanditatList({ canditates }) {
    return (
        <div>
            {canditates.map((candidat) => (
                <Canditat candidate={candidat} key={candidat.id} />
            ))}
        </div>
    );
}
function Canditat({ candidate }) {
    const [showDeskription, setShowDescription] = useState(false);
    function handleShowDescription() {
        setShowDescription(!showDeskription);
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
            {secondImage === '' ? <Button>Add restyling image</Button> : ''}
        </div>
    );
}
