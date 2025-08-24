import React, { useState, useEffect } from "react"
import axios from "axios"

export default function Illustrations(props) {
  const word = props.word;
  const apiKey = props.apiKey;
  const maximumImages = props.maximumImages || 2;

  const [status, setStatus] = useState("idle"); 
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(function () {
    if (!word || !apiKey) return;

    let isCancelled = false;
    setStatus("loading");
    setImageUrls([]);

    const url = `https://api.shecodes.io/images/v1/search?query=${encodeURIComponent(word)}&key=${apiKey}`;

    axios.get(url)
      .then(function (response) {
        if (isCancelled) return;
        const urls = extractImageUrls(response.data).slice(0, maximumImages);
        if (urls.length === 0) {
          setStatus("error");
        } else {
          setImageUrls(urls);
          setStatus("success");
        }
      })
      .catch(function () {
        if (isCancelled) return;
        setStatus("error");
      });

    return function () { isCancelled = true; };
  }, [word, apiKey, maximumImages]);

  if (status === "idle") return null;
  if (status === "loading") return <div className="text-muted mt-2">Loading images…</div>;
  if (status === "error") return null;

  return (
    <div className="row g-2 mt-2">
      {imageUrls.map(function (url, index) {
        return (
          <div key={index} className="col-6">
            <img
              src={url}
              alt={`Illustration for ${word}`}
              className="img-fluid rounded"
              style={{ objectFit: "cover", width: "100%", height: 140 }}
            />
          </div>
        );
      })}
    </div>
  );
}


function extractImageUrls(data) {
  if (!data) return [];

  if (Array.isArray(data.photos)) {
    const urls = data.photos.map(function (photo) {
      if (!photo) return "";
      const source = photo.src || {};
      if (typeof source.medium === "string" && source.medium) return source.medium;
      if (typeof source.landscape === "string" && source.landscape) return source.landscape;
      if (typeof source.small === "string" && source.small) return source.small;
      if (typeof photo.url === "string" && photo.url) return photo.url;
      return "";
    });
    return urls.filter(Boolean);
  }


 if (Array.isArray(data.images)) {
    const urls = data.images.map(function (image) {
      if (!image) return "";
      if (typeof image.url === "string" && image.url) return image.url;
      if (typeof image.image_url === "string" && image.image_url) return image.image_url;
      return "";
    });
    return urls.filter(Boolean);
  }

  if (Array.isArray(data.results)) {
    const urls = data.results.map(function (result) {
      if (!result) return "";
      if (typeof result.image_url === "string" && result.image_url) return result.image_url;
      if (typeof result.url === "string" && result.url) return result.url;
      return "";
    });
    return urls.filter(Boolean);
  }

  if (Array.isArray(data)) {
    return data.filter(function (value) {
      return typeof value === "string" && value;
    });
  }

  return [];
}