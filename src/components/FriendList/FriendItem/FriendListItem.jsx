import css from "../FriendList.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.cardContainer}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(css.text, isOnline && css.status)}>
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
