export interface Diary {
  name: string;
  date: string;
  status: string;
  id: string;
}
export interface Image {
  imageFile: File | any;
  viewUrl: string | any;
}
export interface Input {
  title: string;
  explain: string;
  id: string;
  group_name: string;
}
export interface Output {
  id: string;
  output_image: string;
}
export interface Modify {
  title: string;
  explain: string;
}
