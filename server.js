const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { compress } = require('compress-pdf');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/compress', upload.single('pdfFile'), async (req, res) => {
    const compressionLevel = req.body.compression; // 'low', 'medium', or 'high'

    // Map compression levels to Ghostscript resolution options
    const resolutionMap = {
        low: 'screen',
        medium: 'ebook',
        high: 'prepress'
    };

    const resolution = resolutionMap[compressionLevel] || 'screen'; // default to 'screen'

    try {
        const pdfPath = path.resolve(__dirname, req.file.path);
        const buffer = await compress(pdfPath, {
            resolution: resolution
        });

        const compressedPdfPath = path.resolve(__dirname, 'uploads', 'compressed_pdf.pdf');
        await fs.promises.writeFile(compressedPdfPath, buffer);

        res.download(compressedPdfPath, 'compressed_pdf.pdf', () => {
            // Clean up uploaded and compressed files after download
            fs.unlinkSync(pdfPath);
            fs.unlinkSync(compressedPdfPath);
        });
    } catch (error) {
        res.status(500).send('An error occurred during compression');
    }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
