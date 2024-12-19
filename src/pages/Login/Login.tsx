import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  createTheme,
  FormControlLabel,
  Typography,
  TextField,
  ThemeProvider,
} from "@mui/material";
import "./Login.css";
import LisConne from "../../../public/icon.png";
import LoginFooter from "../../components/LoginFooter/LoginFooter";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22C7C7",
    },
  },
});

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const loginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login attempt", { email, password, rememberMe });
    // ここに実際の認証ロジックを追加します
    navigate("/");
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ width: "50vh", boxShadow: 3 }}>
          <CardContent>
            <Box
              component="img"
              src={LisConne}
              alt="LisConne"
              sx={{
                width: "100%", // 幅を調整
                maxWidth: 300, // 最大幅の設定
                height: "auto", // 縦横比を保持
                mb: 2,
              }}
            />
            <Typography variant="h4" align="center" color="primary">
              ログイン
            </Typography>
            <form onSubmit={loginSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="メールアドレス"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="パスワード"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link
                to="/reset-password/request"
                style={{
                  color: "#22C7C7",
                  display: "block",
                  textAlign: "left",
                }}
              >
                パスワードをお忘れですか？
              </Link>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, color: "white" }}
              >
                ログイン
              </Button>
              <FormControlLabel
                style={{
                  display: "block",
                  textAlign: "left",
                }}
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                }
                label="ログイン情報を保存"
              />
            </form>
          </CardContent>
        </Card>
      </Box>
      <LoginFooter />
    </ThemeProvider>
  );
};

export default Login;
