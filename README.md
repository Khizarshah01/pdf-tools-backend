The backend of this project is built using Node.js and Express.js. It handles the compression of PDF files using the compress-pdf library, which utilizes Ghostscript for compression. The backend supports different compression levels (Low, Medium, High) and serves the compressed PDF files directly to the client.
# Features

- PDF Compression: Accepts PDF files and compresses them using Ghostscript.
- Compression Levels: Supports different levels of compression:

  - Low: Optimized for screen viewing.
  - Medium: Balanced quality for eBooks.
  - High: Highest quality for prepress.
 
# Technology Stack

- Node.js: JavaScript runtime used for building the backend server.
- Express.js: Web framework for handling HTTP requests and routing.
- Multer: Middleware for handling file uploads.
- compress-pdf: Library used to compress PDF files with Ghostscript.
# Installation

Clone the Repository:

```
git clone https://github.com/your-repo/pdf-tools-backend.git
cd pdf-tools-backend
```

Install Node.js Dependencies:

```
npm install

```

Install Ghostscript:
```
    Ubuntu: sudo apt-get install ghostscript -y
    MacOS: brew install ghostscript
    Windows: choco install ghostscript
```

API Endpoints

  GET /: A test route to check if the server is running.

   POST /compress:
   
   - Description: Compress a PDF file.
   - Form Data:
      - pdfFile: The PDF file to be compressed.
      - compression: The compression level (low, medium, high).
      - Response: The compressed PDF file is sent as a download.

        
