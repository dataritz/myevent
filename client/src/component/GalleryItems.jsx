import GalleryItem from "./GalleryItem";
const GalleryItems = ({ urls }) => {
  return urls.map((obj) => {
    return (
      <>
        <GalleryItem url={obj.url} />
      </>
    );
  });
};
export default GalleryItems;
