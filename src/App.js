import { useState } from 'react';

const allCandidats = [
    {
        id: 1,
        describtion: 'here commes a description',
        rating: 10,
        ratingRange: 10,
        name: 'Spiderman',
        Alter: 21,
        image1: 'https://www.ws-trend.de/cdn/shop/articles/wsonnwald_00886_spiderman_swinging_beb96897-ff40-437e-bbc0-53dffb2dd231.png?v=1696231723',
        image2: 'https://www.superheldenfilme.net/wp-content/uploads/2020/04/venom-let-there-be-carnage-venom-2-heisst-nun-venom-let-there-be-carnage-und-kommt-8-monate-spaeter-ins-kino.jpg',
    },
    {
        id: 2,
        describtion: 'here commes a description',
        rating: 10,
        ratingRange: 10,
        name: 'Spiderman 2',
        Alter: 21,
        image1: 'https://www.ws-trend.de/cdn/shop/articles/wsonnwald_00886_spiderman_swinging_beb96897-ff40-437e-bbc0-53dffb2dd231.png?v=1696231723',
        image2: '',
    },
];
export default function App() {
    const [candidats, setCandidats] = useState(allCandidats);

    return (
        <div className="App">
            <CanditatList canditates={candidats} />
        </div>
    );
}

function CanditatList({ canditates }) {
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
                            src="https://img.freepik.com/freie-psd/x-symbol-isoliert_23-2150500369.jpg?size=626&ext=jpg"
                            alt="emty"
                        />
                    )}
                </div>

                <div className="second-element" onClick={handleShowDescription}>
                    {!showDeskription ? (
                        <div>
                            <h1>{candidate.name}</h1>
                            <p>Alter: {candidate.Alter}</p>
                            <p>
                                Rating: {candidate.rating} /{' '}
                                {candidate.ratingRange}
                            </p>
                        </div>
                    ) : (
                        <div>
                            <p>
                                description:
                                <br />
                                <br />
                                {candidate.describtion}
                            </p>
                        </div>
                    )}
                </div>
                <hr />
            </div>
        </div>
    );
}
