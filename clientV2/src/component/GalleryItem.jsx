const GalleryItem = (props) => {
  return (
    <>
      <div className="col-md-4">
        <img
          src={props.url}
          alt="img"
          style={{ width: "100%" }}
          className="rounded-circle"
        />
      </div>
    </>
  );
};

export default GalleryItem;
