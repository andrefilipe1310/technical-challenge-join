import React, { useState } from "react";
import axios from "axios";

function CloudinaryUpload() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const cloudName = "dlxrqrbby";
  const uploadPreset = "joinnnnn"; 

  const uploadImage = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    
    setLoading(true);
    setError("");
    
    const file = files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      
      setImageUrl(response.data.secure_url);
      console.log("Upload realizado:", response.data);
    } catch (error) {
      console.error("Erro no upload:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload para Cloudinary</h2>
      <input 
        type="file" 
        onChange={(e) => uploadImage(e.target.files)} 
        accept="image/*"
        disabled={loading}
      />
      
      {loading && <p>Carregando...</p>}
      
      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <p>Erro: {error}</p>
        </div>
      )}
      
      {imageUrl && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={imageUrl}
            alt="Uploaded"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
          />
          <p style={{ wordBreak: "break-all", fontSize: "12px" }}>
            {imageUrl}
          </p>
        </div>
      )}
    </div>
  );
}

export default CloudinaryUpload;