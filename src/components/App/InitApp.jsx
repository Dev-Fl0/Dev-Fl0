import React from 'react';

// Components
import EnterButton from '../Button/EnterButon';
import Logo from '../Logo/Logo';
import HeroContainer from '../HeroContainer/HeroContainer';

export default function InitApp() {

    return (
        <div className="App">
            <div className="intro">
                <EnterButton />
                <Logo />
                <HeroContainer />
            </div>
        </div>
    );
};
