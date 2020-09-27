// items received from database
export interface ItemInformation {
  category: string;
  category_name: string;
  cheese: string;
  description: string;
  dressing: any;
  price: number;
  quantity: number;
  user_id: number;
  id: number;
  name: string;
  img_url: string;
  peppers: any;
  sauce: any;
  side: string;
  size_price: any;
}

/// items to add to database
export interface ItemInformationAdd {
  category: string;
  category_name: string;
  cheese: string;
  description: string;
  dressing: any;
  id: number;
  name: string;
  img_url: string;
  peppers: any;
  sauce: any;
  side: string;
  size_price: any;
}

// user information to display once they login
export interface User {
  address: string;
  first_name: string;
  last_name: string;
  id: number;
  email: string;
  phone_number: string;
}
