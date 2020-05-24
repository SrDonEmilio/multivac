import React, { Component, useState, useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";

export const StaticMap = ({ country }) => {
  const [image, setImage] = useState();
  let countryID
  if(country !== undefined){
    countryID = country.toLowerCase()
  }
  useEffect(() => {
    setImage(countryID);
  },[country, countryID, image]);
  return <div>Country: <img src={"//www.amcharts.com/wp-content/uploads/assets/flags/" + image +  ".svg"} alt={country} /></div>;
};

export class DynamicMap extends Component {
  constructor(props) {
    super(props);
    this.availableCountries = this.props.country;
  }
  componentDidMount() {
    let selectedPolygon;
    let userCountryId;
    let mapChart;
    let continentsSeries;
    let countriesSeries;
    let chart;
    let flagContainer;
    let flag;
    let countryName;

    // FUNCTIONS
    const createMap = () => {
      // MAP CHART
      mapChart = chart.createChild(am4maps.MapChart);
      mapChart.zIndex = -1;
      mapChart.maxZoomLevel = 2000;
      mapChart.projection = new am4maps.projections.Mercator();
      mapChart.seriesContainer.events.disableType("doublehit");
      mapChart.chartContainer.background.events.disableType("doublehit");

      mapChart.deltaLongitude = -11;
      mapChart.seriesContainer.draggable = false;
      mapChart.geodataSource.url =
        "//www.amcharts.com/lib/4/geodata/json/continentsHigh.json";
      mapChart.seriesContainer.resizable = false;
      mapChart.mouseWheelBehavior = "none";

      continentsSeries = mapChart.series.push(new am4maps.MapPolygonSeries());
      continentsSeries.useGeodata = true;
      continentsSeries.exclude = ["antarctica"];
      continentsSeries.mapPolygons.template.fill = am4core.color("#283047");
      continentsSeries.mapPolygons.template.strokeOpacity = 0;
      continentsSeries.toBack();

      countriesSeries = mapChart.series.push(new am4maps.MapPolygonSeries());
      countriesSeries.useGeodata = true;
      countriesSeries.exclude = ["AQ"];
      countriesSeries.mapPolygons.template.visible = false;
      countriesSeries.mapPolygons.template.hiddenState.properties.opacity = 0;

      countriesSeries.geodataSource.url =
        "//www.amcharts.com/wp-content/uploads/assets/maps/worldCustomHigh.json";
      countriesSeries.mapPolygons.template.fill = am4core.color("#0975da");
      countriesSeries.mapPolygons.template.strokeOpacity = 0;
    };

    const launchData = (string) => {
      setTimeout(() => {
        handleNext(string);
      }, 500);
    };

    const handleNext = (string) => {
      flagContainer.hide(1000);

      if (this.availableCountries.indexOf(string) === -1) {
        userCountryId = this.availableCountries;
      }
      userCountryId = this.availableCountries;

      zoomToSelectedPolygon(userCountryId);
    };

    const zoomToSelectedPolygon = (countryIDDD) => {
      if (selectedPolygon) {
        selectedPolygon.hide();
      }

      selectedPolygon = countriesSeries.getPolygonById(countryIDDD);
      selectedPolygon.hide(0);
      selectedPolygon.opacity = 0;
      selectedPolygon.defaultState.properties.opacity = 1;
      selectedPolygon.toFront();

      let showAnimation = selectedPolygon.show(1000);

      showAnimation.events.on("animationended", () => {
        flag.href =
          "//www.amcharts.com/wp-content/uploads/assets/flags/" +
          userCountryId.toLowerCase() +
          ".svg";
        countryName.text = selectedPolygon.dataItem.dataContext.name;

        setTimeout(() => {
          flagContainer.show();
        }, 1000);

        selectedPolygon.polygon.validate();
        let w = selectedPolygon.polygon.bbox.width;
        let h = selectedPolygon.polygon.bbox.height;

        let x = selectedPolygon.polygon.bbox.x + w / 2;
        let y = selectedPolygon.polygon.bbox.y + h / 2;

        w = Math.max(w, h);

        let path = am4core.path.moveTo({ x: x, y: y + w / 3 });
        path += am4core.path.cubicCurveTo(
          { x: x, y: y - w / 4 },
          { x: x - w / 2 - w / 4, y: y - w / 3 },
          { x: x - w / 8, y: y - w / 2 }
        );
        path += am4core.path.cubicCurveTo(
          { x: x, y: y + w / 3 },
          { x: x + w / 8, y: y - w / 2 },
          { x: x + w / 2 + w / 4, y: y - w / 3 }
        );

        let points = am4core.path.pathToPoints(path, 300);

        let middleLatitude =
          mapChart.zoomGeoPoint.latitude +
          (selectedPolygon.latitude - mapChart.zoomGeoPoint.latitude) / 2;
        let middleLongitude =
          mapChart.zoomGeoPoint.longitude +
          (selectedPolygon.longitude - mapChart.zoomGeoPoint.longitude) / 2;

        mapChart.zoomEasing = am4core.ease.sinOut;
        let zoomOutAnimation = mapChart.zoomToGeoPoint(
          { latitude: middleLatitude, longitude: middleLongitude },
          2,
          true
        );

        zoomOutAnimation.events.on("animationended", () => {
          mapChart.zoomEasing = am4core.ease.cubicInOut;
          mapChart.zoomToMapObject(
            selectedPolygon,
            (400 / Math.max(w, h)) * mapChart.scaleRatio,
            true,
            1500
          );
          //selectedPolygon.polygon.points;
          selectedPolygon.polygon.morpher.morphToSingle = true;
          let animation;
          if (points) {
            animation = selectedPolygon.polygon.morpher.morphToPolygon([
              [points],
            ]);
          } else {
            animation = selectedPolygon.polygon.morpher.morphToCircle();
          }

          animation.stop();
        });
      });
    };

    const init = () => {
      // INIT MAP
      chart = am4core.create("chartdiv", am4maps.MapChart);
      chart.paddingRight = 20;
      chart.background.fillOpacity = 1;
      chart.background.fill = am4core.color("#3c3c3c");
      chart.width = am4core.percent(100);
      chart.height = am4core.percent(100);
      chart.preloader.disabled = true;

      flagContainer = chart.createChild(am4core.Container);
      flagContainer.horizontalCenter = "middle";
      flagContainer.hiddenState.properties.dy = -180;
      flagContainer.x = am4core.percent(50);
      flagContainer.y = 30;
      flagContainer.layout = "horizontal";

      flag = flagContainer.createChild(am4core.Image);
      flag.width = 50;
      flag.height = 50;

      countryName = flagContainer.createChild(am4core.Label);
      countryName.marginLeft = 15;
      countryName.fontSize = 25;
      countryName.x = 100;
      countryName.valign = "middle";
      countryName.fill = am4core.color("#ffffff");

      createMap();
    };

    this.chart = chart;
    this.availableCountries = this.props.country;
    this.launchData = launchData;
    init();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  componentDidUpdate(oldProps) {
    if (oldProps.country !== this.props.country) {
      this.availableCountries = this.props.country;
      console.log(this.availableCountries);
      this.launchData(this.availableCountries);
    }
  }

  render() {
    return (
      <>
        <div id="chartdiv" style={{ width: "70%", height: "300px" }}></div>
      </>
    );
  }
}
