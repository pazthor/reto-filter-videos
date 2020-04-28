import { FetchGet } from "../Utils/FetchGet";
import { URLS } from "../Utils/URLS";

export const getListadoInfinito = (id) => {
  return FetchGet(`${URLS.getInfoListadoInfinito}&node=${id}`)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export const getMovies = async (categoria) => {
  const DTO = await getListadoInfinito(categoria);
  try {
    const moduleArray = DTO.response.modules?.module;    
    const componentArray = moduleArray[0]?.components?.component;
    const listadoInfinitoDTO = componentArray.find(
      (p) => p.type === "Listadoinfinito"
    );

    const urlString = listadoInfinitoDTO?.properties.url;
    const movies = await getMoviesList(urlString);

    return movies;
  } catch (error) {
    console.log(error);
  }
};

const getMoviesList = (url) => {
  return FetchGet(`${URLS.getListMovies + url+URLS.getApi}`)
    .then((res) => {      
      return res.response?.groups;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};
export const getMovieInfo = async (id) => {
  return FetchGet(`${URLS.getMovieInfo + id}`)
    .then((res) => {
      console.log(res.response.group.common);
      return res.response.group.common;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};
