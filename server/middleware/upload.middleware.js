import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js';

let upload;

if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET) {
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'adopt_ai_creatives',
      allowed_formats: ['jpg', 'png', 'jpeg', 'gif', 'mp4'],
      resource_type: 'auto', // Important for supporting both images and videos
    },
  });

  upload = multer({ storage: storage });
} else {
  // Mock middleware to prevent crashing if Cloudinary is not configured
  upload = {
    single: () => (req, res, next) => {
      return res.status(500).json({
        status: 'fail',
        message: 'Cloudinary integration is not configured on the server. File uploads are disabled.',
      });
    }
  };
}

export default upload;
