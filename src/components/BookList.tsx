import React from "react";

function BookList(props: any) {
    const { isLightTheme, light, dark } = props;
    const theme = isLightTheme ? light : dark;

    const liStyle = { background: theme.ui };
    return (
        <div className='book-list' style={{ background: theme.background, color: theme.syntax }}>
            <ul>
                <li style={ liStyle } key='wayOfKings'>The Way of Kings</li>
                <li style={ liStyle } key='nameOfTheWind'>The Name of the Wind</li>
                <li style={ liStyle } key='finalEmpire'>The final empire</li>
            </ul>
        </div>
    );
}

export default BookList;