export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface GeneralCoordinates {
    cityTown: Coordinates;
    stateProvince: Coordinates;
    country: Coordinates;
}

export interface PlaceInfo {
    placeId: string;
    name: string;
}

export interface GeneralLocation {
    cityTown: PlaceInfo;
    stateProvince: PlaceInfo;
    country: PlaceInfo;
}

export interface Location {
    id: number;
    coordinates: Coordinates;
    generalCoordinates: GeneralCoordinates;
    generalLocation: GeneralLocation;
    cityTown: string;
    stateProvince: string;
    country: string;
}

export interface Note {
    id: number;
    timestamp: Date;
    location: Location;
    text: string;
}

export interface GeneralLocationIDs {
    cityTownId: number;
    stateProvinceId: number;
    countryId: number;
}
