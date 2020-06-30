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
    }

    onChangeTheme(isDark){
        const themeMode =  isDark ? "DARK" : "LIGHT";
        console.log(`isDark`, isDark)
        this.setState({
            theme: {...this.state.theme, ...THEME.MODE[themeMode]}
        })
    }

    onChangeColor(option){
        this.setState({
            theme: {...this.state.theme, ...THEME.COLORS[option.color]}
        })
    }

    render() {
        return <ThemeProvider theme={this.state.theme}>
            <Global styles={cssGlobal}/>
            <main className={"vh-100 d-flex flex-column overflow-hidden"}>
            <Header onChangeTheme={this.onChangeTheme.bind(this)}
                    onChangeColor={this.onChangeColor.bind(this)} />
            <div className={"d-flex h-100"}>
                <Sidebar/>
                <Default/>
            </div>
        </main>
        </ThemeProvider>
    };
}

export default App;