import React from "react";
import PinterestIcon from "@material-ui/icons/Pinterest";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import TextsmsIcon from "@material-ui/icons/Textsms";
import FaceIcon from "@material-ui/icons/Face";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <PinterestIcon />
      </LogoWrapper>
      <HomePageButton>
        <a href="/">Homepage</a>
      </HomePageButton>
      <FollowingButton>
        <a href="/">Following</a>
      </FollowingButton>
      <SearchWrapper>
        <SearchBarWrapper>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form>
            <input type="text" />
            <button type="submit"></button>
          </form>
        </SearchBarWrapper>
      </SearchWrapper>
      <IconsWrapper>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
        <IconButton>
          <FaceIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </IconsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;

const LogoWrapper = styled.div`
  padding-right: 10px;
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;

const HomeButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  min-width: 123px;
  height: 48px;
  cursor: pointer;
  margin: 0px 5px;
`;

const HomePageButton = styled(HomeButtons)`
  background-color: rgb(17, 17, 17);
  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;

const FollowingButton = styled(HomeButtons)`
  background-color: white;
  a {
    text-decoration: none;
    color: rgb(17, 17, 17);
    font-weight: 700;
  }
  :hover {
    background-color: #e1e1e1;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
`;

const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  min-width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 5px;

  form {
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
  }

  form > button {
    display: none;
  }

  input:focus {
    outline: none;
  }
`;

const IconsWrapper = styled.div``;

export default Header;