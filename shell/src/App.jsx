import React from 'react';

// Import du Header depuis le MFE (celui-ci sera fourni par header-mfe)
const Header = React.lazy(() => import('header_mfe/Header'));

function App() {
    return (
        <div>
            <h1>Bienvenue dans le Shell</h1>
            <React.Suspense fallback={<div>Chargement du header...</div>}>
                <Header />
            </React.Suspense>
        </div>
    );
}

export default App;
