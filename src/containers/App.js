import React from 'react';
import Header from "../components/Header";
import Default from "./Default";
import Sidebar from "../components/Sidebar";
import {THEME} from "../styles/theme";
import { ThemeProvider } from 'emotion-theming'
import { Global, css } from "@emotion/core";
import {cssGlobal} from "../styles/bsOverrides";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLight: true,
            title: "Light Theme",
            theme:  {...THEME.MODE.LIGHT, ...THEME.COLORS.BLUE}
        };
        console.log(`theme`, THEME)
    }


    onChangeTheme(theme){
        const {mode = false, color = "BLUE"} = theme;
        const themeMode =  mode ? "DARK" : "LIGHT";
        console.log(`onChangeTheme theme`, color)
        console.log(`THEME.COLORS`, THEME.COLORS[color])
        this.setState({
            theme: {...THEME.MODE[themeMode], ...THEME.COLORS[color]}
        })
    }

    render() {
        return <ThemeProvider theme={this.state.theme}>
            <Global
                styles={cssGlobal}
            />
            <main className={"vh-100 d-flex flex-column overflow-hidden"}>
            <Header onChangeTheme={this.onChangeTheme.bind(this)}  />
            <div className={"d-flex h-100"}>
                <Sidebar/>
                <Default/>
            </div>
        </main>
        </ThemeProvider>
    };
}

export default App;