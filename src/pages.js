import React from "react";

import { Settings, People, Home } from "@material-ui/icons";


export const pages = [
    {
        name: 'Overzicht',
        children: [
            {
                name: 'Dashboard',
                page: "dashboard",
                icon: <Home />,
                actions: [

                ]
            },
            {
                name: 'Bedrijf',
                page: "company",
                icon: <People />,
                actions: [
                    {label: "Bedrijven overzicht", value: "digest"},
                    {label: "Bedrijf aanmaken", value: "create"},
                ]
            },
        ],
    },
    {
        name: 'Persoonlijk',
        children: [
            {
                name: 'Instellingen',
                page: "settings",
                icon: <Settings />,
                actions: [

                ]
            },
        ],
    },
];

/**
 * Simple mapping of all actions indexed by page.
 * This can be used to easily change the Header tabs.
 */
export const actions = pages.reduce(
    (prev, curr) => {curr.children.map(c => prev[c.page] = c.actions); return prev;}, {}
);

/**
 * Simple mapping of the page identifier and the appropriate label.
 */
export const labels = pages.reduce(
    (prev, curr) => {curr.children.map(c => prev[c.page] = c.name); return prev;}, {}
);