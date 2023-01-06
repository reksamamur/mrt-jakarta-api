import { StationDescriptions } from "../station_description";

export interface Station {
  nid: string;
  title: string;
  urutan: number;
  isbig: number;
  path: string;
  catatan: string | null;
  peta_lokalitas: string;
  banner: string;
  image: string;
  descriptions: StationDescriptions[]
}
