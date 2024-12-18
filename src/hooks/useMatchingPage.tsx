import { useLocation } from 'react-router-dom';

// 現在のパスと指定されたパスを比較して、該当のページにいるのか判定するカスタムフック
// ヘッダーやサイドバーの表示制御に利用する
export const useMachingPage = () => {
  const location = useLocation();

  const isMachingPage = (pathName: string[]) : boolean => {
    for (let i = 0; i < pathName.length; i++) {
      if (location.pathname === pathName[i]) {
        console.log("true");
        return true;
      }
    }
    console.log("false");
    return false;
  };

  return isMachingPage;
};
