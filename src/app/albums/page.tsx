import cloudinary from "cloudinary";

export default async function AlbumPage() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: { name: string; path: string }[];
  };

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl">Albums</h1>
        </div>
      </div>
    </section>
  );
}
