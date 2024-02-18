"use client";
import React, { useEffect, useMemo, useState } from "react";
import "./styles.scss";
import { Divider, Skeleton, Typography } from "@mui/material";
import PostItem from "../Post";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { createFollowRelationship, getUser } from "../../services/UserService";
import { Post } from "../../types/Post";
import { User } from "../../types/User";
import { getPosts } from "../../services/PostServices";
import useUser from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import ProfileAvatar from "../Avatar";
import IconButton from "../Atoms/IconButton";

interface UserCardProps {
  username: string;
}

const UserCard: React.FC<UserCardProps> = ({ username }: UserCardProps) => {
  const [userToShow, setUserToShow] = useState<User>();
  const [posts, setPosts] = useState<Post[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [following, setFollowing] = useState<number>(0);
  const [followers, setFollowers] = useState<number>(0);

  const navigate = useNavigate()

  useEffect(() => {
    setFollowers(userToShow?.followersCount as number)
    setFollowing(userToShow?.followingCount as number);
  }, [userToShow]);




  useEffect(() => {
    getUser(username)
      .then(data => {
        setUserToShow(data)
      })
      .catch(error => console.error(error))

    getPosts(username)
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(error => console.error(error))
  }, [username])


  const { user } = useUser();

  const showFollowButton = useMemo(() => {
    if ((user?.username as string) === (userToShow?.username as string)) {
      return false;
    }
    const following = user?.following;

    if (followers && following?.includes(userToShow?.username as string)) {
      return false;
    }

    return true;
  }, [followers, user?.following, user?.username, userToShow?.username])

  const handleClickFollow = () => {
    createFollowRelationship(user?.username as string, userToShow?.username as string)
      .then(result => {
        if (result){
          setFollowers(prev => prev + 1)
          navigate('/explore');
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="user-data">
      {loading ? <Skeleton animation="wave" /> : (
      <>
      <div className="user-title">
        <div className="user-left-side">
          <div className="user-left-side-title">
            <ProfileAvatar
              name={userToShow?.username.toUpperCase() as string}
            />
            <div className="user-names">
              <Typography className="user-total-name">
                {userToShow?.firstName} {userToShow?.lastName}
              </Typography>
              <Typography className="user-username">
                @{userToShow?.username}
              </Typography>
            </div>
          </div>
          {showFollowButton && (
            <div className="user-left-side-button">
              <IconButton
                onClick={handleClickFollow}
              >
                <PersonAddIcon />
              </IconButton>
            </div>
          )}
        </div>
        <div className="user-right-side">
          <div className="follow-box">
            <Typography>Followers: {followers}</Typography>
            <Typography>Following: {following}</Typography>
          </div>
        </div>
      </div>
      <Divider />
      <div className="user-posts">
        {posts &&
          posts.map((post) => (
            <PostItem
              post={post}
              key={post.postId}
              authorName={`${userToShow?.firstName} ${userToShow?.lastName}`}
              username={username.toUpperCase()}
            />
          ))}
      </div>
      </>)}
    </div>
  );
};

export default UserCard;
