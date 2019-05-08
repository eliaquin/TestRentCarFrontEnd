const rootUrl = "https://localhost:44307";
const baseApiUrl = `${rootUrl}/api`;

//General
export const typesOfIdUrl = `${baseApiUrl}/clients/getalltypesofid`;

//Clients
export const saveClientUrl = `${baseApiUrl}/clients/saveclient`;
export const getAllClientsUrl = `${baseApiUrl}/clients/getallclients`;

//Vehicles
export const getAllVehiclesUrl = `${baseApiUrl}/vehicles/getallvehicles`;
export const saveVehicleUrl = `${baseApiUrl}/vehicles/savevehicle`;
export const addVehicleImageUrl = `${baseApiUrl}/vehicles/addvehicleimage`;

//Functions
export const generateImageUrl = (imagePath) => {
    return `${rootUrl}/images/${imagePath}`;
}


