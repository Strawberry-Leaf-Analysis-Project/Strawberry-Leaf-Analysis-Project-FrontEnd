import { Diary, Image, Input } from '../type/Interface'
import axios from "axios";
const board = axios.create(
  {
    baseURL: '/board'
  }
)
const member = axios.create(
  {
    baseURL: '/member',
  }
)
const plants_group = axios.create(
  {
    baseURL: '/plants_group',
  }
)
class MemberApi {
  SING_UP = async (id: string, password: string, name: string, email: string) => {
    await member
      .post('/', {
        id: id,
        password: password,
        name: name,
        email: email
      })
      .then((res) => {
        console.log(res)
        window.location.replace("/")
      })
  }
  SING_IN = async (id: string, password: string, setLoginCheck: any, setUserKey: any) => {
    console.log(id, password)
    await member.post('/login/', {
      id: id,
      password: password
    }
    ).then((response) => {
      console.log(response.data)
      if (response.data.message === '로그인 성공') {
        setLoginCheck(true)
        setUserKey(response.data.key)
        window.localStorage.setItem('data', JSON.stringify(response.data))
        window.location.replace("/")
        // window.location.replace('/')
      }
      else {
        setLoginCheck(false)
      }
    })
  }
  USER_DATA = async (key: number) => {
    return await member.get(`/${key}`).then((res) => res.data)
  }
  LOGOUT = async () => {
    await member.post('/logout/')
    window.localStorage.removeItem('data')
  }
}

class BoardApi {
  CREATE_BOARD = async (text: Input, image: Image) => {
    const formData = new FormData()
    formData.append('title', text.title);
    formData.append('explain', text.explain);
    formData.append('image', image.imageFile);
    formData.append('id', text.id);
    await board.post('/', formData).then((res) => console.log(res))
  }
  GET_BOARD = async (key: any) => {
    return await board.get(`/${key}/`).then((res) => res.data)
  }
  GET_USER_BOARD = async () => {
    return await board.get('/personal_board/').then((res) => res.data)
  }
  GET_LIKE_BOARD = async () => {
    return await board.get('/like_board/').then((res) => res.data)
  }
  GET_VIEWS_BOARD = async () => {
    return await board.get('/view_board/').then((res) => res.data)
  }
  GET_DATE_BOARD = async () => {
    return await board.get('/date_board/').then((res) => res.data)
  }
  DELETE_BOARD = async (key: number) => {
    await board.delete(`${key}`)
  }
  GET_ALL_BOARD = async () => {
    return await board.get('/').then((res) => res.data)
  }
  SEARCH_DATA = async (search: string) => {
    return await board.get(`/search/`, {
      params: {
        search: search
      }
    }).then((res) => res.data)
  }

}
class DiseaseApi {

}
class PlantsDetailApi {

}
class PlantsByDiseaseApi {

}
class PlantsGroupApi {
  GET_GROUP = async() => {
    return await plants_group.get('/').then((res)=>res.data)
  }
  POST_GROUP = async (data: Diary) => {
    await plants_group.post('/', {
      name: data.name,
      date: data.date,
      status: data.status,
      id:data.id,
    }).then((res) => console.log(res))
  }
}
export const BOARD_API = new BoardApi()

export const MEMBER_API = new MemberApi()

export const PLANTS_GROUP_API = new PlantsGroupApi()
