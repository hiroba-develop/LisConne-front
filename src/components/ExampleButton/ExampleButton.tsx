// Material UIとEmotionを使ったカスタムボタンのコンポーネントサンプル
// こんな感じで書けば実装できるというのを示すためのサンプルです
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

// Emotion でカスタマイズした MUI ボタン
const StyledButton = styled(Button)`
  background-color: #1976d2;
  color: white;
  &:hover {
    background-color: #1565c0;
  }
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
`;

const CustomButton = ({ label }: { label: string }) => {
  return <StyledButton>{label}</StyledButton>;
};

export default CustomButton;
