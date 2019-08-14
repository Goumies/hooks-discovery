import React from "react";

function BookList() {
    return (
        <div className='book-list'>
            <ul>
                <li key='wayOfKings'>The Way of Kings</li>
                <li key='nameOfTheWind'>The Name of the Wind</li>
                <li key='finalEmpire'>The final empire</li>
            </ul>
        </div>
    );
}

export default BookList;