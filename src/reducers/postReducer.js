const initState = {
  posts: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" }
  ]
};
const postReducer = (st = initState, ac) => {
  switch (ac.type) {
    case "CREATE_POST":
      console.log("created project", ac.actionPosts);
    default:
      return st;
  }
};

export default postReducer;
