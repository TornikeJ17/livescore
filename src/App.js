import React, { useEffect, useState } from "react";
import {
    Container,
    GlobalStyle,
    BlockOne,
    BlockTwo,
    Loader,
    LoaderBlock
} from './Styled/Styled'
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from './components/Design/design'
import { fetch, fetchTitle, seasons } from "./components/api/config";
import NavBar from "./components/NavBar";
import League from "./components/Leagues";
import LeagueTitle from "./components/LeagueTitle";
import LeagueStandings from "./components/LeagueStandings";


const App = () => {
    const [data, setData] = useState();
    const [theme, setTheme] = useState('light');
    const [country, setCountry] = useState('eng.1');
    const [year, setYear] = useState('2021')
    const [title, setTitle] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    };
    const fetchAPI = async () => {
        setData(await fetch(country, year))
    };
    const fetchTitleAPI = async () => {
        setTitle(await fetchTitle(country))
    };

    useEffect(() => {
        setIsLoading(true)
        fetchAPI();
        fetchTitleAPI();
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [country, year]);

    return (
        <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
            <Container>

                <GlobalStyle />
                <NavBar themeToggler={themeToggler} />

                <BlockOne>
                    <League
                        setData={setData}
                        setCountry={setCountry}
                    />
                    <BlockTwo>
                        <LeagueTitle
                            data={data}
                            title={title}
                            setCountry={setCountry}
                            setYear={setYear}
                        />
                        {isLoading ? (
                            <LoaderBlock>
                                <Loader />
                            </LoaderBlock>
                        ) : (
                            <LeagueStandings
                                data={data}
                                title={title}
                            />
                        )}

                    </BlockTwo>
                </BlockOne>
            </Container>
        </ThemeProvider>
    )
}

export default App
