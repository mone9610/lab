import { VFC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import Post from "./Post";
import { postData, userData } from "./data";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "25vw",
    },
    txt: {
      margin: theme.spacing(2),
    },
  })
);

type PostData = {
  id: number;
  user_id: number;
  message: string;
  created_at: string;
};

type User = {
  id: number;
  name: string;
};

const PostList: VFC = () => {
  const classes = useStyles();
  const posts: PostData[] = postData;
  const users: User[] = userData;

  return (
    <div>
      <List className={classes.root}>
        {posts?.map((post) => {
          const found = users?.find((user) => post.user_id === user.id);
          return (
            <Post
              key={post.id}
              name={found?.name as string}
              message={post.message}
              created_at={post.created_at}
            />
          );
        })}
      </List>
    </div>
  );
};

export default PostList;
