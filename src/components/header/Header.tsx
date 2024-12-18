/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Menu, MenuItem, Grid2 } from "@mui/material";
import { css } from "@emotion/react";
import { useHandleNavigation } from "../../hooks/useHandleNavigation";
import { useMachingPage } from "../../hooks/useMatchingPage";
import routes from "../../constants/routes";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // メニューの開閉ハンドラー
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    console.log("ログアウトが実行されました");
    // ログアウト処理をここに追加
  };

  const handleNavigation = useHandleNavigation();
  const isMatchingPage= useMachingPage();

  return (
    <>  
      <AppBar
        position="static"
        css={css`
          height: 3vh;
          background-color: black;
          color: white;
          margin: 0;
          padding: 0;
          box-shadow: none;
          top: 0;
          left: 0;
          right: 0;
        `}
      >
        <Toolbar
          css={css`
            height: 3vh;
            min-height: unset !important;
            padding: 0;
          `}
        >
          <Grid2
            container
            spacing={2}
            alignItems="center"
            css={css`
              width: 100%;
              height: 100%;
              margin: 0;
            `}
          >
            {/* 左側の空白（可変部分） */}
            <Grid2 size={6}></Grid2>

            {/* 右側: ユーザー情報 */}
            <Grid2
              size={6}
              css={css`
                display: flex;
                justify-content: flex-end;
              `}
            >
              <Typography
                css={css`
                  font-size: 0.875rem;
                  cursor: pointer;
                  color: white;
                `}
                onClick={handleMenuOpen} // クリックでメニューを開く
              >
                rena-otomo@negoto2019.co.jp ▼
              </Typography>

              {/* メニュー */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{
                  display: anchorEl ? "block" : "none", // 非表示時は完全に無効化
                }}
                inlist={!Boolean(anchorEl) ? "true" : undefined} // 非アクティブ化
                css={css`
                  .MuiPaper-root {
                    background-color: white;
                    color: black;
                  }
                `}
              >
                <MenuItem onClick={handleLogout}>ログアウト</MenuItem>
              </Menu>
            </Grid2>
          </Grid2>
        </Toolbar>
      </AppBar>
      <AppBar
        position="static"
        css={css`
          height: 8vh;
          background-color: white;
          color: white;
          margin: 0;
          padding: 0;
        `}
      >
        <Toolbar
          css={css`
            height: 100%;
            min-height: unset !important;
            padding: 0;
          `}
        >
          <Grid2
            container
            alignItems="center"
            css={css`
              width: 100%;
              height: 100%;
              margin: 0;
            `}
          >
            <Grid2
              size={2}
              justifyItems="center"
              css={css` 
                height: 100%;
              `}
            >
              <Typography
                css={css`
                  font-size: 1rem;
                  cursor: pointer;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  color: ${isMatchingPage([routes.CORPORATE_LIST_CREATE]) ? "#22C7C7" : "#293440"};
                  border-bottom: 0.4vh solid ${isMatchingPage([routes.CORPORATE_LIST_CREATE]) ? "#22C7C7" : "#FFFFFF"};
                `}
                onClick={() => handleNavigation(routes.CORPORATE_LIST_CREATE)}
              >
                リスト作成
              </Typography>
            </Grid2>
            <Grid2
              size={2}
              justifyItems="center"
              css={css` 
                height: 100%;
              `}
            >
              <Typography
                css={css`
                  font-size: 1rem;
                  cursor: pointer;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  color: ${isMatchingPage([routes.CORPORATE_LIST, routes.CORPORATE_LIST_DETAIL]) ? "#22C7C7" : "#293440"};
                  border-bottom: 0.4vh solid ${isMatchingPage([routes.CORPORATE_LIST, routes.CORPORATE_LIST_DETAIL]) ? "#22C7C7" : "#FFFFFF"};
                `}
                onClick={() => handleNavigation(routes.CORPORATE_LIST)}
              >
                リスト一覧
              </Typography>
            </Grid2>
            <Grid2
              size={2}
              justifyItems="center"
              css={css` 
                height: 100%;
              `}
            >
              <Typography
                css={css`
                  font-size: 1rem;
                  cursor: pointer;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  color: ${isMatchingPage([routes.OPT_OUT]) ? "#22C7C7" : "#293440"};
                  border-bottom: 0.4vh solid ${isMatchingPage([routes.OPT_OUT]) ? "#22C7C7" : "#FFFFFF"};
                `}
                onClick={() => handleNavigation(routes.OPT_OUT)}
              >
                オプトアウト管理
              </Typography>
            </Grid2>
            <Grid2
              size={6}
            >
            </Grid2>
          </Grid2>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
