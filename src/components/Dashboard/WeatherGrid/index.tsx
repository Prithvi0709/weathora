import {
  DegreeProps,
  WeatherCardProps,
  weatherMap,
} from "../../../DataInterface";
import WeatherCard from "./WeatherCard";

const WeatherGrid = ({
  dates,
  minTemps,
  maxTemps,
  weatherCodes,
  degreeScale,
}: WeatherCardProps & DegreeProps) => {
  return (
    <div className="flex flex-row gap-3 mx-auto mb-12">
      {dates.map((date, index) => (
        <WeatherCard
          key={index}
          date={date}
          maxTemp={maxTemps[index]}
          minTemp={minTemps[index]}
          weatherIcon={weatherMap[weatherCodes[index]].icon}
          degreeScale={degreeScale}
        />
      ))}
    </div>
  );
};

export default WeatherGrid;
