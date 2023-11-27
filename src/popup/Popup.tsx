import React, { useState } from 'react'

function Popup() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        // Get the selected file from the input
        const file = event.target.files[0];

        // Update the state with the selected file
        setSelectedFile(file);
    };

    const handleUpload = () => {
        // You can perform upload logic here, for example, send the file to a server

        // For demonstration purposes, log the file details
        if (selectedFile) {
            console.log('Selected File:', selectedFile);
        } else {
            console.log('No file selected');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md">
            <input
                type="file"
                onChange={handleFileChange}
                className="mb-4 p-2 border border-gray-300 rounded-md"
            />
            <button
                onClick={handleUpload}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                Upload
            </button>
        </div>
    );
}

export default Popup