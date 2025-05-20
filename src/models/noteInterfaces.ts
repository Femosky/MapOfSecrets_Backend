export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface GeneralCoordinates {
    cityTown: Coordinates;
    stateProvince: Coordinates;
    country: Coordinates;
}

export interface GeneralLocation {
    cityTown: string;
    stateProvince: string;
    country: string;
}

export interface Location {
    id: number;
    coordinates: Coordinates;
    generalCoordinates: GeneralCoordinates;
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
