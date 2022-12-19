import React from "react";
import Navigation from "./app/navigation/Navigation";

import {AppStateProvider} from "./app/state/AppContext";


export default function App() {
    return (
        <AppStateProvider>
            <Navigation/>
        </AppStateProvider>
    );
}
