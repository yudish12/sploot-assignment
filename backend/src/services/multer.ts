import multer from "multer";

// Configure Multer with Memory Storage
const storage = multer.memoryStorage();
export const upload = multer({ storage });
