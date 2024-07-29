import GalleryItems from "./GalleryItems";

const urls = [
  { url: "/img/1.jpg" },
  { url: "/img/2.jpg" },
  { url: "/img/3.jpeg" },
  { url: "/img/4.jpeg" },
];
const Gallery = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <GalleryItems urls={urls} />;
        </div>
      </div>
    </>
  );
};

export default Gallery;
