import { VFC } from "react";

// MomentJSをインポートし、localeをjaに設定する
import moment from "moment";
import "moment/locale/ja";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Avatar, ListItemAvatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inline: {
      display: "inline",
    },
    margin: {
      margin: theme.spacing(1, 1, 0, 2),
    },
  })
);

type Props = {
  key: number;
  name: string;
  message: string;
  created_at: string;
};

const Post: VFC<Props> = (props) => {
  const classes = useStyles();
  const { key, name, message, created_at } = props;

  return (
    <div>
      <>
        <ListItem alignItems="flex-start" key={key}>
          <ListItemAvatar>
            <Avatar alt="" />
          </ListItemAvatar>
          <ListItemText
            primary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {name}
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textSecondary"
                >
                  　{moment(created_at).fromNow()}
                </Typography>
              </>
            }
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {message}
                </Typography>
                <br />
                返信
                <ThumbUpIcon
                  className={classes.margin}
                  color="disabled"
                  fontSize="small"
                />
                <ThumbDownIcon
                  className={classes.margin}
                  color="disabled"
                  fontSize="small"
                />
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    </div>
  );
};

export default Post;
