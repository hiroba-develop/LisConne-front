import { Box, createTheme, Link, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22C7C7",
    },
  },
});

const Login: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="footer"
        sx={{
          position: "fixed", // フッターを画面に固定
          bottom: 0, // 画面の下部に配置
          left: 0, // 左端に配置
          width: "100%", // 横幅を画面全体に広げる
          display: "flex",
          justifyContent: "center", // 要素を中央寄せ
          alignItems: "center", // 縦方向の中央揃え
          gap: "100px", // 要素間のスペース
          height: "100px", // フッターの高さ
        }}
      >
        <Link
          href="https://lisconne.biz/service/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#22C7C7",
          }}
        >
          利用規約
        </Link>
        <Link
          href="https://negoto2019.co.jp/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#22C7C7" }}
        >
          プライバシーポリシー
        </Link>
        <Link
          href="https://lisconne.biz/optout/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#22C7C7" }}
        >
          オプトアウト申請
        </Link>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
