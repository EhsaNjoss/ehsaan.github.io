<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code Scanner</title>
    <!-- Include Html5Qrcode library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js"></script>
    <style>
        /* Your styles here */
    </style>
</head>
<body>
    <!-- Your HTML content here -->

    <!-- QR code scanner container -->
    <div id="scanner" style="width: 250px; height: 250px;"></div>

    <!-- Include your script -->
    <script>
        let html5QrCode = new Html5Qrcode("scanner");
        html5QrCode.start(
            { facingMode: "environment" }, 
            {
                fps: 10, 
                qrbox: { width: 250, height: 250 }
            },
            (decodedText, decodedResult) => {
                console.log(`Code matched = ${decodedText}`, decodedResult);
                // Handle the decoded text
            },
            (errorMessage) => {
                console.log(`QR Code no match: ${errorMessage}`);
            }
        ).catch((err) => {
            console.error(`Error starting QR code scanning: ${err}`);
        });
    </script>
</body>
</html>