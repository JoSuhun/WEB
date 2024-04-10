import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  console.log(`Fecthing Videos : ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("someting broke. ..");

  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div>
      {videos.map((video) => (
        <iframe key={video.id} src={`https://youtube.com/embed/${video.key}`} />
      ))}
    </div>
  );
}
