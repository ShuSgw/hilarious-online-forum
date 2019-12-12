export const createPost = posts => {
  return (disp, getState, { getFirebase, getFirestore }) => {
    disp({ type: "CREATE_POST", actionPosts: posts });
    console.log(posts);
    // const firestore = getFirestore();
    // firestore.collection("posts").add({
    //   ...posts,
    //   authorFirstName: "Net",
    //   authorLastName: "Ninja",
    //   authorId: 12345,
    //   createdAt: new Date()
    // });
    // .then(() => {
    //   disp({ type: "CREATE_POST", project });
    // })
    // .catch(err => {
    //   disp({ type: "CREATE_POST", err });
    // });
    // disp({ type: "CREATE_POST", actionPosts: posts });
  };
};
