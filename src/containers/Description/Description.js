import React from "react";
import { DynamicMap, StaticMap } from "../../components/Map/Map";

import "./Description.sass";

const Description = ({ computerData, className, changeClass, openStatus }) => {
	const {
		systemName,
		computer,
		manufacturer,
		numberOfProcessors,
		year,
		rMax,
		rPeak,
		areaOfInstallation,
		country,
		countryID,
		town,
		state,
	} = computerData;

	const toggleClass = () => {
		changeClass();
		loadMap(computerData);
	};

	const isMobile = () => {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		);
	};

	const loadMap = (countryID, status) => {
		if (isMobile()) return <StaticMap country={countryID} />;
		return <DynamicMap country={countryID} openStatus={status} />;
	};

	return (
		<div id="description-container" className={className}>
			<div id="inactive-area" onClick={() => toggleClass()}></div>
			<div id="description-area">
				<div id="description-title">
					<div id="return-button" onClick={() => toggleClass()}>
						{"<"}
					</div>
					<div id="description-name">
						<h2>{systemName}</h2>
					</div>
				</div>
				<div id="description-data">
					<div class="description-content" id="description-text">
						<p>
							<span>Computer:</span> {computer}
						</p>
						<p>
							<span>Manufacturer:</span> {manufacturer}
						</p>
						<p>
							<span>Cores:</span> {numberOfProcessors}
						</p>
						<p>
							<span>Year of installation:</span> {year}
						</p>
						<p>
							<span>Rmax (TFlop/s):</span> {rMax}
						</p>
						<p>
							<span>Rpeak (TFlop/s):</span> {rPeak}
						</p>
						<p>
							<span>Power (kW):</span> {rPeak}
						</p>
						<p>
							<span>Area of Installation:</span> {areaOfInstallation}
						</p>
					</div>
					<div class="description-content" id="description-map">
						{loadMap(countryID, openStatus)}
						<p>
							<span>Country:</span> {country}
						</p>
						<p>
							<span>State/Town:</span> {town}, {state}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Description;
