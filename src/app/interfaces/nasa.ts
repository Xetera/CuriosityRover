export type RoverStatus = 'active' | 'inactive';
export type CameraType = 'FHAZ' |'RHAZ' |'MAST' |'CHEMCAM' |'MAHLI' |'MARDI' |'NAVCAM';

export interface Picture {
    camera: CameraObject;
    earth_date: string;
    id: number;
    img_src: string;
    rover: Rover;
    sol: number;
}

export interface CameraObject {
    full_name: string;
    id: number;
    name: CameraType;
    rover_id: number;
}

export interface Rover {
    id: number;
    landing_date: string;
    launch_date: string;
    max_date: string;
    max_sol: number;
    name: string;
    status: RoverStatus;
    total_photos: number;
}
