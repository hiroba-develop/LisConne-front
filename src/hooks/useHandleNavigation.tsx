import { useNavigate, useLocation } from 'react-router-dom';

// 現在のパスと遷移先のパスを比較して、遷移が必要な場合は遷移する関数を提供するカスタムフック
export const useHandleNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (pathName: string) => {
    console.log("pathName: ", pathName);
    console.log("location.pathname: ", location.pathname);
    if (location.pathname !== pathName) {
      navigate(pathName);
    }
  };

  return handleNavigation;
};
