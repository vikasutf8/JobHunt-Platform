import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:'dpit2cy8z',
    api_key:184487417479196,
    api_secret:'8yFseGTVFlnBv-iZPUtPobE5ld8'
});
export default cloudinary;