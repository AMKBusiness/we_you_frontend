import React from "react";

import {Settings, Business, Home, QuestionAnswer} from "@material-ui/icons";

import groups from "./groups";

export const pages = [
    {
        name: 'Overzicht',
        children: [
            {
                name: 'Dashboard',
                page: "dashboard",
                icon: <Home />,
                groups: [
                    groups.admin,
                    groups.employee,
                    groups.employer,
                    groups.management,
                ],
                actions: [

                ]
            },

            {
                name: 'Bedrijf',
                page: "company",
                icon: <Business />,
                groups: [
                    groups.employer,
                    groups.employee,
                ],
                actions: [
                ]
            },

            {
                name: 'Bedrijven',
                page: "companies",
                icon: <Business/>,
                groups: [
                    groups.admin,
                    groups.management,
                ],
                actions: [
                    {label: "Bedrijven overzicht", value: "digest"},
                    {label: "Bedrijf aanmaken", value: "create"},
                ]
            },
            {
                name: 'Vragen',
                page: "answers",
                icon: <QuestionAnswer/>,
                groups: [
                    groups.admin,
                    groups.management,
                ],
                actions: [
                    {label: "Overzicht antwoordsetten", value: "digest"},
                    {label: "Antwoordset aanmaken", value: "create"},
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
                groups: [
                    groups.admin,
                    groups.employee,
                    groups.employer,
                    groups.management,
                ],
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