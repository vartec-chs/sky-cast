

export interface Locality {
	place_id: number
	licence: string
	osm_type: string
	osm_id: number
	lat: string
	lon: string
	class: string
	type: string
	place_rank: number
	importance: number
	addresstype: string
	name: string
	display_name: string
	boundingbox: string[]
}



export interface IpLocality {
	region: string
	regionName: string
	city: string
	lat: string
	lon: string
}

/*{
  "place_id": 203697178,
  "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
  "osm_type": "relation",
  "osm_id": 3853521,
  "lat": "51.66072",
  "lon": "39.20013760370629",
  "class": "highway",
  "type": "pedestrian",
  "place_rank": 26,
  "importance": 0.10001,
  "addresstype": "road",
  "name": "площадь Ленина",
  "display_name": "площадь Ленина, Чичеры, Ленинский район, Воронеж, городской округ Воронеж, Воронежская область, Центральный федеральный округ, 394018, Россия",
  "address": {
    "road": "площадь Ленина",
    "neighbourhood": "Чичеры",
    "city_district": "Ленинский район",
    "city": "Воронеж",
    "county": "городской округ Воронеж",
    "state": "Воронежская область",
    "ISO3166-2-lvl4": "RU-VOR",
    "region": "Центральный федеральный округ",
    "postcode": "394018",
    "country": "Россия",
    "country_code": "ru"
  },
  "boundingbox": [
    "51.6600392",
    "51.6614030",
    "39.1990442",
    "39.2012346"
  ]
} */

export interface LatLonLocality {
	address: {
		city: string,
		state: string,
	}
}
