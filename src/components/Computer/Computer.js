import React from "react";

import "./Computer.sass";
import logo from "../../img/thumbnail.svg";

const Computer = ({ computerData, onClick }) => {
	const { rank, systemName, manufacturer } = computerData;

	return (
		<div
			className="computer-container"
			id={`rank-${rank}`}
			onClick={() => onClick()}
		>
			<div className="info-container">
				{
					<div
						className="image-container"
						style={{ backgroundImage: `url(${logo})` }}
					></div>
				}
				<div className="title">
					<div className="rank">{rank}</div>
					<div className="computer-name">
						<h2>{systemName}</h2>
					</div>
				</div>
				<p>{manufacturer}</p>
			</div>
		</div>
	);
};

export default Computer;
