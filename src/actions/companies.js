import axios from 'axios';

import {SET_COMPANIES_LOGO, ERR_COMPANIES_LOGO} from "../reducers/companies/types";

export const create_company = ({name, employees, employers, theme, logo}) => dispatch => {
    const session = sessionStorage.getItem("token") || localStorage.getItem("token");
    const headers = {Authorization: `Token ${session}`};

    axios.post("/api/companies/company/", {name}, {headers})
        .then(({data: company}) => (
            logo !== null && logo !== undefined && logo.data
                ?
                axios.post("/api/companies/company-logo/", {...logo}, {headers})
                    .then(({data: logo}) => ({...company, logo}))
                :
                new Promise(resolve => resolve({...company, logo: {id: null}})
                )))
        .then(company => (
            axios.post("/api/companies/colour-theme/", {
                primary: parseInt(theme.primary.slice(1), 16),
                accent: parseInt(theme.accent.slice(1), 16),
                company: company.id,
                logo: company.logo.id
            }, {headers})
                .then(({data: theme}) => ({...company, theme}))
        ))

        .then(company => (
            axios.post("/api/accounts/register-employers/", {members: employers, company: company.id}, {headers})
                .then(() => (company))
        ))
        .then(company => (
            axios.post("/api/accounts/register-employees/", {members: employees, company: company.id}, {headers})
                .then(() => (company))
        ))
        .then(console.log)
};
