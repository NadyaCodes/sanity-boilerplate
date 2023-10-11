import { getGallery } from "@/sanity/sanity-utils";
import ImageBlock from "./ImageBlock";

const getDimensions = (url: string) => {
  const parts = url.split("/");
  const twoStrings = parts[parts.length - 1];

  const [firstHalf, secondHalf] = twoStrings.split("x");

  const firstHalfSplit = firstHalf.split("-");
  const width = Number(firstHalfSplit[1]);

  const secondHalfSplit = secondHalf.split(".");
  const height = Number(secondHalfSplit[0]);

  return [width, height];
};

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
