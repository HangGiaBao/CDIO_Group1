import { useNavigate } from "react-router-dom";

const useFooterNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return { navigateTo };
};

export default useFooterNavigation;
