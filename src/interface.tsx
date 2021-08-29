export interface IWeather {
    coord: {
      lon: number; 
      lat: number
    };
    weather: [
      {
        main : string; 
        description: string; 
        icon : string 
      }
    ];
    base: string
    main: {
      id: number; 
      temp: number;  
      temp_min: number; 
      temp_max: number;
      pressure: number; 
      humidity: number
    };
    visibility:number
    wind: {
      speed : number; 
      deg: number}
    clouds: {
      all: number
    }
    dt: number;
    sys: {
      type: number;
      id: number;
      message: number;
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    id: number;
    name: string
    cod: number; 
  }