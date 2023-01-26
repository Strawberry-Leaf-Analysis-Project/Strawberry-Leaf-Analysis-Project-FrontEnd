
// export const BASICAPI = 'http://localhost:5000';
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
export class MemberApi {
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

}

export class BoardApi {
  CREATE_BOARD = async (title: string, explain: string, image: File) => {
    const formData = new FormData()
    formData.append('title', title);
    formData.append('explain', explain);
    formData.append('image', image);
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

}