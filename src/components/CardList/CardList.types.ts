/**
 * Interface for CardListProps
 * @interface
 */
export interface CardListProps {
  data: CardList[];
}

/**
 * Interface for CardList
 * @interface
 */
export interface CardList {
  id: string;
  message: string;
  out: boolean;
}
