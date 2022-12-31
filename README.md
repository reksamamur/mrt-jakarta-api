# MRT Jakarta API
[Documentation in Indonesian](https://mrt-doc-api.vercel.app/)


## Overview
MRT Jakarta is an API that displayed data as schedules, estimates and details of MRT Jakarta stations. 
This data is taken from the results of the jakartamrt website scrap which is then cached.

## Feature
1. All MRT Jakarta data stations
2. Data schedules from one MRT Jakarta stations
3. Estimated time and price between 2 MRT Jakarta stations

## API Reference
### API URL
```
https://mrt-jakarta-api-production.up.railway.app/v1
```
### Resource Information
| Q                        	| A    	|
|--------------------------	|------	|
| Response Format          	| JSON 	|
| Requires Authentication? 	| No   	|
| Rate limited?            	| Yes  	|

## Endpoint

### Stations
#### Descriptions
Get all data of MRT Jakarta stations
#### Example
| URL | https://mrt-jakarta-api-production.up.railway.app/v1/stations |
| --- | --- |
| Method | GET |
#### Results
```
{
  "status": "success",
  "code": 200,
  "data": [
    {
      "nid": "20",
      "title": "Stasiun Lebak Bulus Grab",
      "catatan": null,
      "isbig": 1,
      "path": "https://jakartamrt.co.id/id/stasiun/stasiun-lebak-bulus-grab",
      "peta_lokalitas": "https://jakartamrt.co.id/sites/default/files/2020-09/5%20-%201%20-%20UI%20Kiosk%20-%20Fasilitas%2C%20Lokalitas%2C%20dan%20Ritel%20dalam%20Stasiun_PETA%20LOKALITAS_LBB_020920_Seha.png",
      "banner": "https://jakartamrt.co.id/sites/default/files/2021-11/WEBBANNER_Lebak%20Bulus.jpg",
      "urutan": 1
    }
  ],
  "message": "Success getting data"
}
```

### Station (station id)
#### Descriptions
Get one station data based on the given station id parameter
#### Example
| URL | https://mrt-jakarta-api-production.up.railway.app/v1/station/38 |
| --- | --- |
| Method | GET |
| Parameter 1 | 38 |
#### Results
```
{
  "status": "success",
  "code": 200,
  "data": {
    "nid": "38",
    "title": "Stasiun Dukuh Atas BNI",
    "isbig": 1,
    "path": "https://jakartamrt.co.id/id/stasiun/stasiun-dukuh-atas-bni",
    "urutan": 12,
    "banner": "https://jakartamrt.co.id/sites/default/files/2021-11/WEBBANNER_Dukuh%20Atas%20BNI.jpg",
    "catatan": null,
    "peta_lokalitas": "https://jakartamrt.co.id/sites/default/files/2020-09/5%20-%2012%20-%20UI%20Kiosk%20-%20Fasilitas%2C%20Lokalitas%2C%20dan%20Ritel%20dalam%20Stasiun_Peta%20Lokalitas_DKA%20020920%20Novita_-02.png"
  },
  "message": "Success getting data"
}
```

### Schedules (station id)
#### Descriptions
Get a schedule from one station based on the given station id parameter
#### Example
| URL | https://mrt-jakarta-api-production.up.railway.app/v1/station/38/schedules |
| --- | --- |
| Method | GET |
| Parameter 1 | 38 |
#### Results
```
{
  "status": "success",
  "code": 200,
  "data": [
    {
      "location": "hi",
      "times": {
        "weekdays": ["05:00", "05:12", "05:24"],
        "weekends": ["06:13", "06:26", "06:41"]
      }
    },
    {
      "location": "lb",
      "times": {
        "weekdays": ["05:09", "05:24", "05:36"],
        "weekends": ["06:09", "06:24", "06:39"]
      }
    }
  ],
  "message": "Success getting data"
}
```

### Schedule by now (station id)
#### Descriptions
Get the current schedule from one station based on the given station id parameter
#### Example
| URL | https://mrt-jakarta-api-production.up.railway.app/v1/station/38/schedules/now |
| --- | --- |
| Method | GET |
| Parameter 1 | 38 |
| Parameter 2 | now |
#### Results
```
{
  "status": "success",
  "code": 200,
  "data": [
    {
      "location": "hi",
      "isWeekend": true,
      "timeMills": {
        "now": "1672467180000",
        "next": ["1672467960000", "1672468860000", "1672469760000"]
      }
    },
    {
      "location": "lb",
      "isWeekend": true,
      "timeMills": {
        "now": "1672466940000",
        "next": ["1672467840000", "1672468740000", "1672469580000"]
      }
    }
  ],
  "message": "Success getting data"
}
```

### Schedule by milliseconds (station id)
#### Descriptions
Get schedule by millisecond from one station based on the given station id parameter
#### Example
| URL | https://mrt-jakarta-api-production.up.railway.app/v1/station/38/schedules/1672461394371 |
| --- | --- |
| Method | GET |
| Parameter 1 | 38 |
| Parameter 2 | 1672461394371 |
#### Results
```
{
  "status": "success",
  "code": 200,
  "data": [
    {
      "location": "hi",
      "isWeekend": true,
      "timeMills": {
        "now": "1672467180000",
        "next": ["1672467960000", "1672468860000", "1672469760000"]
      }
    },
    {
      "location": "lb",
      "isWeekend": true,
      "timeMills": {
        "now": "1672466940000",
        "next": ["1672467840000", "1672468740000", "1672469580000"]
      }
    }
  ],
  "message": "Success getting data"
}
```

### Estimate time and price from (station id) to (station id)
#### Descriptions
Get price and time estimates from 2 stations based on the given station id parameters
#### Example
| URL | https://mrt-jakarta-api-production.up.railway.app/v1/station/38/estimates/30 |
| --- | --- |
| Method | GET |
| Parameter 1 | 38 |
| Parameter 2 | 30 |
#### Results
```
{
  "status": "success",
  "code": 200,
  "data": {
    "stasiun_nid": "30",
    "tarif": "9000",
    "waktu": "18"
  },
  "message": "Success getting data"
}
```

### Retail (station id)
#### Descriptions
Get data retail station based on the given station id parameters
#### Example
| URL | https://mrt-jakarta-api-production.up.railway.app/v1/station/38/estimates/30 |
| --- | --- |
| Method | GET |
| Parameter 1 | 38 |
#### Results
```
{
  "status": "success",
  "code": 200,
  "data": [
    {
      "nid": "552",
      "title": "ATM BCA",
      "jenis_retail": "ATM",
      "cover": "https://jakartamrt.co.id/sites/default/files/2021-07/50995829682_be4331f57f_b.jpg",
      "path": "/id/retail/atm-bca"
    },
    {
      "nid": "91",
      "title": "ATM CIMB Niaga",
      "jenis_retail": "ATM",
      "cover": "https://jakartamrt.co.id/sites/default/files/2022-11/52514723220_6042a17ba0_k.jpg",
      "path": "/id/retail/atm-cimb-niaga"
    },
    {
      "nid": "776",
      "title": "ATM Mandiri",
      "jenis_retail": "ATM",
      "cover": "https://jakartamrt.co.id/sites/default/files/2022-11/52514508709_a070a55156_k.jpg",
      "path": "/id/retail/atm-mandiri"
    }
  ],
  "message": "Success getting data"
}
```

### Facilities (station id)
#### Descriptions
Get data facilities station based on the given station id parameters
#### Example
| URL | https://mrt-jakarta-api-production.up.railway.app/v1/station/38/facilities |
| --- | --- |
| Method | GET |
| Parameter 1 | 38 |
#### Results
```
{
  "status": "success",
  "code": 200,
  "data": [
    {
      "nid": "319",
      "title": "Hotel All Seasons",
      "jenis_fasilitas": "Penginapan",
      "cover": "https://jakartamrt.co.id/sites/default/files/2020-11/50600142741_d5255b5441_b.jpg",
      "path": "/id/fasilitas/hotel-all-seasons"
    },
    {
      "nid": "325",
      "title": "Metro Coffee",
      "jenis_fasilitas": "Restoran",
      "cover": "https://jakartamrt.co.id/sites/default/files/2020-11/50600260042_d5b436bbb2_b.jpg",
      "path": "/id/fasilitas/metro-coffee"
    }
  ],
  "message": "Success getting data"
}
```

## TODO
- [ ]  Make demo app, web and mobile (android, ios)

## Thanks to
- My friends
- jakartamrt.co.id for providing the data
