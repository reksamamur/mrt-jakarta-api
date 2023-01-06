import { Schedules } from "../schedules";
import { Retails } from "../retails";
import { Estimates } from "../estimates";
import { Facilities } from "../facilities";
import { StationDescriptions } from "../station_description";

export interface Stations {
  nid: string;
  title: string;
  urutan: number;
  isbig: number;
  path: string;
  catatan: string | null;
  peta_lokalitas: string;
  banner: string;
  schedules: Schedules[];
  retails: Retails[];
  estimasi: Estimates[];
  fasilitas: Facilities[];
  image: string;
  descriptions: StationDescriptions[];
}
