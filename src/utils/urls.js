const rootUrl = "https://localhost:44307";
const baseApiUrl = `${rootUrl}/api`;

//General
export const typesOfIdUrl = `${baseApiUrl}/clients/getalltypesofid`;

//Clients
export const saveClientUrl = `${baseApiUrl}/clients/saveclient`;
export const getAllClientsUrl = `${baseApiUrl}/clients/getallclients`;

//Vehicles
export const getVehicleById = `${baseApiUrl}/vehicles/getvehiclebyid/`;
export const getAllVehiclesUrl = `${baseApiUrl}/vehicles/getall`;
export const getAllVehiclesAvailableUrl = `${baseApiUrl}/vehicles/getallvehiclesavailable`;
export const getAllRentedVehicles = `${baseApiUrl}/vehicles/getallrentedvehicles`;
export const saveVehicleUrl = `${baseApiUrl}/vehicles/savevehicle`;
export const addVehicleImageUrl = `${baseApiUrl}/vehicles/addvehicleimage`;
export const assignVehicletoCustomerUrl = `${baseApiUrl}/vehicles/assignvehicletocustomer`;


//Functions
export const generateImageUrl = (imagePath) => {
    return `${rootUrl}/images/${imagePath}`;
}


