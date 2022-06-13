import React from "react";
import {
    Main
} from './Styled'
const Toggle = ({theme,themeToggler}) => {
    return(
        <Main>
            <input
                onClick={themeToggler}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </Main>
    )
}

export default Toggle
