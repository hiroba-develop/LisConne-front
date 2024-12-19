import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  createTheme,
  Typography,
  TextField,
  ThemeProvider,
} from "@mui/material";
import "./ResetPasswordRequest.css";
import icon from "../../../public/icon.png";
import LoginFooter from "../../components/LoginFooter/LoginFooter";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22C7C7",
    },
  },
});

const ResetPasswordRequest: React.FC = () => {
  const [email, setEmail] = useState("");
  const [sendMail, setSendMail] = useState(false);

  const loginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login attempt", { email });
    // メール送信ロジックの実装
    setSendMail(true);
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
              src={icon}
              alt="LisConne"
              sx={{
                width: "100%", // 幅を調整
                maxWidth: 300, // 最大幅の設定
                height: "auto", // 縦横比を保持
                mb: 2,
              }}
            />
            <Typography variant="h4" align="center" color="primary">
              パスワード再設定
            </Typography>
            <Typography align="center" sx={{ mt: 3, fontSize: "14px" }}>
              ログインに利用しているメールアドレスを入力してください。
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, color: "white" }}
              >
                再設定用のメールを送信
              </Button>
            </form>
            {sendMail && (
              <Typography align="center" sx={{ mt: 3, fontSize: "14px" }}>
                メールを送信しました。ご確認ください。
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>
      <LoginFooter />
    </ThemeProvider>
  );
};

export default ResetPasswordRequest;
