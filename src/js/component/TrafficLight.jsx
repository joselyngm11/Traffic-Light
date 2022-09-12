import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
	return (
		<div className="container text-center">
            <div className="base"></div>
            <div className="traffic-light">
                <div className="light">a</div>
                <div className="light">b</div>
                <div className="light">c</div>
		    </div>
        </div>
	);
};

export default TrafficLight;