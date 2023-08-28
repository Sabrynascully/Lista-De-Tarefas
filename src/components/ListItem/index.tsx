import * as C from "./styles";
import {} from "../../types/Item";
type Props = {
  item: Item;
};

export const ListItem = ({ item }: Props) => {
  return <C.Container>{item.name}</C.Container>;
};
