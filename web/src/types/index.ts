export type IListProps = {
    id: number;
    name: string;
    path: string;
}

export  type IListArray = {
  items: IListProps[]
}

export type IItemProps = {
  id: number;
  sku: string;
  path: string;
  name: string;
  image: string;
  price: number;
  specialPrice?: number;
}

export  type IItensArray = {
  items: IItemProps[]
}


export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export type INavCategories = {
  isMobile?: boolean;
  isMenu?: boolean;
  className?: string;
}

export type IUiContext = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  ListNav: FetchState<IListArray>;
};
