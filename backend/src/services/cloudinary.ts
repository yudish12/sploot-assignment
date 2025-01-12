import { v2 as cloudinary } from "cloudinary";

export const getCloudinaryInstance = (
  name: string,
  api_key: string,
  api_secret: string
): typeof cloudinary => {
  cloudinary.config({
    cloud_name: name,
    api_key: api_key,
    api_secret: api_secret,
  });
  return cloudinary;
};

export const uploadImageToCloudinary = async (
  cloudinaryInstance: typeof cloudinary,
  fileBuffer?: Express.Multer.File
): Promise<string> => {
  const imageData = fileBuffer?.buffer.toString("base64");
  const image = await cloudinaryInstance.uploader.upload(
    "data:image/jpeg;base64," + imageData
  );
  return image.url;
};
