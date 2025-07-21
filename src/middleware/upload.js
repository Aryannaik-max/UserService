const s3 = require('../config/s3Config');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { AWS_BUCKET_NAME } = require('../config/serverConfig');

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: AWS_BUCKET_NAME,
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        }
    }),
    key: (req, file, cb) => {
        cb(null, `${Date.now().toString()}-${file.originalname}`);
    }
});

module.exports = upload;