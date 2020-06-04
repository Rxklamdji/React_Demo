import React from "react";

const verification1 = (props) => {
    return(

        <div>
            {
                props.inputLength > 5 ?
                <p>Text Length Accepted!</p>:
                <p>Text too short!</p>

            }

        </div>

    );
};

export default verification1;
