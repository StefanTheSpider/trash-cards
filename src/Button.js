import { useState } from 'react';

export default function Butto({ children, onClick }) {
    return (
        <button className="btn" onClick={onClick}>
            {children}
        </button>
    );
}
