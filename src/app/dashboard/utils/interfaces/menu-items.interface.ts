/**
 * Interface para los items del menu
 **/
export interface MenuItem {
  label: string;
  icon: string;
  path: string;
  isExact: boolean;
}
