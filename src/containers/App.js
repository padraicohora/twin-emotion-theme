import React from 'react';
import Header from "../components/Header";
import Default from "./Default";
import Sidebar from "../components/Sidebar";
import {THEME} from "../styles/theme";
import { ThemeProvider } from 'emotion-theming'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLight: true,
            title: "Light Theme",
            theme:  {...THEME.MODE.LIGHT, ...THEME.COLORS.BLUE}
        };

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
F
    render() {
        return <ThemeProvider theme={this.state.theme}>
            <main className={"vh-100 d-flex flex-column overflow-hidden"}>
            <Header onChangeTheme={this.onChangeTheme.bind(this)} />
            <div className={"d-flex h-100"}>
                <Sidebar/>
                <Default/>
            </div>
        </main>
        </ThemeProvider>
    };
}

export default App;