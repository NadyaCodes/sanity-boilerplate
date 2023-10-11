import { getGallery } from "@/sanity/sanity-utils";
import ImageBlock from "./ImageBlock";
import { getDimensions } from "@/helpers/getDimensions";

export default async function Gallery() {
  const galleryImages = await getGallery();

  const imagesArray = galleryImages.map((element) => {
    const dimensions = getDimensions(element.image);
    return {
      ...element,
      width: dimensions[0],
      height: dimensions[1],
    };
  });

  return (
    <div>
      <h1>Gallery</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {imagesArray.map((image) => {
          return (
            <div key={image._id}>
              <ImageBlock imageObject={image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
