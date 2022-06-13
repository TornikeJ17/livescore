const leagues = [
    {
        id: "eng.1",
        name: "Premier League",
        image: 'https://cdn.countryflags.com/thumbs/england/flag-3d-250.png',
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/23.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/23.png",
        },
    },
    {
        id: "esp.1",
        name: "La Liga",
        image: 'https://cdn.countryflags.com/thumbs/spain/flag-3d-250.png',
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/15.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/15.png",
        },
    },
    {
        id: "ita.1",
        name: "Serie A",
        image: 'https://cdn.countryflags.com/thumbs/italy/flag-3d-250.png',
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/12.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/12.png",
        },
    },
    {
        id: "ger.1",
        name: "Bundesliga",
        image: 'https://cdn.countryflags.com/thumbs/germany/flag-3d-250.png',
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/10.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/10.png",
        },
    },
    {
        id: "ned.1",
        name: "Eredivisie",
        image: 'https://cdn.countryflags.com/thumbs/netherlands/flag-3d-250.png',
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/11.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/11.png",
        },
    },
    {
        id: "fra.1",
        name: "Ligue 1",
        image: 'https://cdn.countryflags.com/thumbs/france/flag-3d-250.png',
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/9.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/9.png",
        },
    },
    {
        id: "por.1",
        name: "Liga Portugal",
        image: 'https://cdn.countryflags.com/thumbs/portugal/flag-3d-250.png',
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/14.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/14.png",
        },
    },
    {
        id: "mex.1",
        name: "Liga BBVA MX",
        image: 'https://cdn.countryflags.com/thumbs/mexico/flag-3d-250.png',
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/22.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/22.png",
        },
    },
    {
        id: "chn.1",
        name: "Super League",
        image: 'https://cdn.countryflags.com/thumbs/china/flag-3d-250.png',
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/2350.png",
            dark:
                'https://a.espncdn.com/i/leaguelogos/soccer/500-dark/2350.png"',
        },
    },
    {
        id: "bra.1",
        name: "Serie A",
        image: 'https://cdn.countryflags.com/thumbs/brazil/flag-3d-250.png',
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/85.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/85.png",
        },
    },
    {
        id: "jpn.1",
        name: "J League",
        image: 'https://cdn.countryflags.com/thumbs/japan/flag-3d-250.png',
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/2199.png",
            dark:
                "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/2199.png",
        },
    },
    {
        id: "arg.1",
        name: "Liga Profesional",
        image: 'https://cdn.countryflags.com/thumbs/argentina/flag-3d-250.png',
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/1.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/1.png",
        },
    },
    {
        id: "tur.1",
        name: "Super Lig",
        image: 'https://cdn.countryflags.com/thumbs/turkey/flag-3d-250.png',
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/18.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/18.png",
        },
    },
    {
        id: "aus.1",
        name: "A-League",
        image: 'https://cdn.countryflags.com/thumbs/australia/flag-3d-250.png',
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/1308.png",
            dark:
                "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/1308.png",
        },
    },
];

const compare = (a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
};

module.exports = leagues.sort(compare);
