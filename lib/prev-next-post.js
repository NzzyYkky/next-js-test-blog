export default function prevNextPost(allContentsId, currentId) {
   const numberOfPosts = allContentsId.length;

   const index = allContentsId.findIndex(
      ({ id }) => {
         return id === currentId;
      }
   )

   const prevPost = (index + 1) === numberOfPosts ? { title: '', id: '' } : allContentsId[index + 1];
   const nextPost = index === 0 ? { title: '', id: '' } : allContentsId[index - 1];

   return [prevPost, nextPost]
}