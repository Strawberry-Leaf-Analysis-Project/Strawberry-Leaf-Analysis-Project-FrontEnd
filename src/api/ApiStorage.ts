import { Diary, Image, Input, Output } from "../type/Interface";
import axios from "axios";
const api = "/api";
const board = axios.create({
  baseURL: "/board",
});
const member = axios.create({
  baseURL: "/member",
});
const plants_detail = axios.create({
  baseURL: "/plants_detail",
});
const plants_group = axios.create({
  baseURL: "/plants_group",
});
class MemberApi {
  SING_UP = async (
    id: string,
    password: string,
    name: string,
    email: string
  ) => {
    await member
      .post("/", {
        id: id,
        password: password,
        name: name,
        email: email,
      })
      .then((res) => {
        console.log(res);
        window.location.replace("/");
      });
  };
  SING_IN = async (
    id: string,
    password: string,
    setLoginCheck: any,
    setUserKey: any
  ) => {
    console.log(id, password);
    await member
      .post("/login/", {
        id: id,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.message === "로그인 성공") {
          setLoginCheck(true);
          setUserKey(response.data.key);
          window.localStorage.setItem("data", JSON.stringify(response.data));
          window.location.replace("/");
          // window.location.replace('/')
        } else {
          setLoginCheck(false);
        }
      });
  };
  USER_DATA = async (key: number) => {
    return await member.get(`/${key}`).then((res) => res.data);
  };
  LOGOUT = async () => {
    await member.post("/logout/");
    window.localStorage.removeItem("data");
  };
}

class BoardApi {
  INPUT_BOARD = async (text: Input, image: Image) => {
    const formData = new FormData();
    formData.append("input_image", image.imageFile);
    formData.append("group_name", text.group_name);
    // formData.append('title', text.title);
    // formData.append('explain', text.explain);
    await board.post("/input_image/", formData).then((res) => console.log(res));
  };
  OUTPUT_BOARD = async (text: Input) => {
    const formData = new FormData();
    formData.append("group_name", text.group_name);
    return await board.post("/output_image/", formData).then((res) => {
      console.log(res);
      return res.data;
    });
  };
  WRITE_BOARD = async (input: Input, output: Output) => {
    await board
      .post("/write_board/", {
        title: input.title,
        explain: input.explain,
        id: output.id,
      })
      .then((res) => console.log(res.data));
  };
  GET_BOARD = async (id: any) => {
    return await board.get(`/${id}/`).then((res) => res.data.data);
  };
  GET_BOARD_LIKE = async (id: any) => {
    return await board.get(`/${id}/`).then((res) => res.data.is_like);
  };
  GET_USER_BOARD = async () => {
    return await board.get("/personal_board/").then((res) => res.data);
  };
  GET_LIKE_BOARD = async () => {
    return await board.get("/like_board/").then((res) => res.data);
  };
  GET_VIEWS_BOARD = async () => {
    return await board.get("/view_board/").then((res) => res.data);
  };
  GET_DATE_BOARD = async () => {
    return await board.get("/date_board/").then((res) => res.data);
  };
  DELETE_BOARD = async (key: number) => {
    await board.delete(`${key}`);
  };
  GET_ALL_BOARD = async () => {
    return await board.get("/").then((res) => res.data);
  };
  SEARCH_DATA = async (search: string) => {
    return await board
      .get(`/search/`, {
        params: {
          search: search,
        },
      })
      .then((res) => res.data);
  };
  PUSH_LIKE = async (id: number, is_pushed: string) => {
    await board
      .patch(`/${id}/push_like/`, {
        is_pushed: is_pushed,
      })
      .then((res) => console.log(res));
  };
  MODIFY_BOARD = async (id: number, data: any) => {
    await board
      .patch(`/${id}/change_board/`, {
        title: data.title,
        explain: data.explain,
      })
      .then((res) => console.log(res));
  };
  GET_BOARD_GROUP_LIST = async (name: string) => {
    return await board
      .get("/group_board_list/", {
        params: {
          name: name,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
      });
  };
}
class DiseaseApi {}
class PlantsDetailApi {
  GET_DISEASE = async (board_id: string) => {
    return await plants_detail
      .get("/disease_leaves/", {
        params: {
          board_id: board_id,
        },
      })
      .then((res) => res.data);
  };
}
class PlantsByDiseaseApi {}
class PlantsGroupApi {
  GET_GROUP = async () => {
    return await plants_group.get("/").then((res) => res.data);
  };
  POST_GROUP = async (data: Diary) => {
    await plants_group
      .post("/", {
        name: data.name,
        date: data.date,
        status: data.status,
        id: data.id,
      })
      .then((res) => {
        if (res.status === 200) {
          window.location.replace("/my_growth_diary");
        }
      });
  };
  PATCH_GROUP_STATUS = async (id: number, status: string) => {
    await plants_group
      .patch(`/${id}/change_status/`, {
        status: status,
      })
      .then((res) => {
        console.log(res);
      });
  };
  PATCH_GROUP_NAME = async (id: number, name: string) => {
    await plants_group
      .patch(`/${id}/change_name/`, {
        name: name,
      })
      .then((res) => {
        if (res.status === 200) {
          window.location.replace("/my_growth_diary");
        }
      });
  };
}
export const BOARD_API = new BoardApi();

export const MEMBER_API = new MemberApi();

export const PLANTS_DETAIL_API = new PlantsDetailApi();

export const PLANTS_GROUP_API = new PlantsGroupApi();
