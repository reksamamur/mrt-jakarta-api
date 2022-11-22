import express from "express";
import path from "path";

import {
  Home,
  Stations,
  StationsCache,
  Station,
  StationCache,
  Schedules,
  SchedulesCache,
  SchedulesNow,
  SchedulesByTime,
  Retails,
  RetailsCache,
  Facilities,
  FacilitiesCache,
  Estimates,
  NotFound
} from "../components";

const route = express();

route.get("/", Home);
route.get("/stations", StationsCache, Stations);
route.get("/station/:station_id", StationCache, Station);
route.get("/station/:station_id/schedules", SchedulesCache, Schedules);
route.get("/station/:station_id/schedules/now", SchedulesNow);
route.get("/station/:station_id/schedules/:milliseconds", SchedulesByTime);
route.get("/station/:station_id/retails", RetailsCache, Retails);
route.get("/station/:station_id/facilities", FacilitiesCache, Facilities);
route.get("/station/:station_id/estimates/:next_station_id", Estimates);

export { route, NotFound };
