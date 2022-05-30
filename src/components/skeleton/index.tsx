import { Skeleton as S } from "styles";
export const Skeleton = ({ type }) => {
  return <S.Skeleton className={`${type}`}>Skeleton</S.Skeleton>;
};
