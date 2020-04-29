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

export const getMovies = async (categoria) => {
  const movies = getMoviesMocks();

  return movies;
};



const getMoviesMocks = () => {
  return [
    {
      id: "831474",
      title: "Siete años en Tibet",
      title_episode: null,
      title_uri: "Siete-anos-en-Tibet",
      title_original: "Seven Years In Tibet",
      description:
        "Brad Pitt interpreta al alpinista austriaco quien se propuso escalar el Nanga Parbat.",
      description_large:
        "Heinrich Harrer y su compatriota Peter Aufschnaiter, se proponen escalar el Nanga Parbat, una de las cumbres más altas del Himalaya. El viaje de Harrer lo llevará hasta las profundidades de la reclusión en un campo británico para prisioneros de guerra.",
      short_description: null,
      image_large:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/SEVENYEARSINTIBET/EXPORTACION_WEB/SS/SEVENYEARSINTIBETWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/SEVENYEARSINTIBET/EXPORTACION_WEB/SS/SEVENYEARSINTIBETWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/SEVENYEARSINTIBET/EXPORTACION_WEB/SS/SEVENYEARSINTIBETWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/SEVENYEARSINTIBET/EXPORTACION_WEB/STILLS/SEVENYEARSINTIBET-STILL-01.jpg",
      image_background:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/SEVENYEARSINTIBET/EXPORTACION_WEB/CLEAN/SEVENYEARSINTIBET_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/SEVENYEARSINTIBET/EXPORTACION_WEB/CLEAN/SEVENYEARSINTIBETWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/SEVENYEARSINTIBET/EXPORTACION_WEB/CLEAN/SEVENYEARSINTIBETWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/SEVENYEARSINTIBET/EXPORTACION_WEB/SS/SEVENYEARSINTIBETWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/SEVENYEARSINTIBET/EXPORTACION_WEB/SS/SEVENYEARSINTIBETWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/SEVENYEARSINTIBET/EXPORTACION_WEB/SS/SEVENYEARSINTIBETWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/SEVENYEARSINTIBET/EXPORTACION_WEB/CLEAN/SEVENYEARSINTIBETWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/SEVENYEARSINTIBET/EXPORTACION_WEB/CLEAN/SEVENYEARSINTIBETWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/SEVENYEARSINTIBET/EXPORTACION_WEB/CLEAN/SEVENYEARSINTIBETWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/SEVENYEARSINTIBET/EXPORTACION_WEB/SPRITES/SEVENYEARSINTIBET-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/SEVENYEARSINTIBET/EXPORTACION_WEB/SPRITES/SEVENYEARSINTIBET-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "02:16:03",
      date: "20200329213019",
      year: "1997",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG-13",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "831493",
      title: "El cristal encantado",
      title_episode: null,
      title_uri: "El-cristal-encantado",
      title_original: "Dark Crystal, The",
      description:
        "Jen está dispuesta a encontrar el cristal perdido para restaurar la paz en su planeta.",
      description_large:
        "Cuando Jen, un miembro de la tribu Gelfling, se dispone a encontrar el fragmento perdido del cristal encantado, su peligroso viaje la enfrenta cara a cara con terribles monstruos. Decidida a restaurar la paz en su planeta, ¡Jen no retrocederá!",
      short_description: null,
      image_large:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/DARKCRYSTALTHE/EXPORTACION_WEB/SS/DARKCRYSTALTHEWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/DARKCRYSTALTHE/EXPORTACION_WEB/SS/DARKCRYSTALTHEWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/DARKCRYSTALTHE/EXPORTACION_WEB/SS/DARKCRYSTALTHEWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/DARKCRYSTALTHE/EXPORTACION_WEB/STILLS/DARKCRYSTALTHE-STILL-01.jpg",
      image_background:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/DARKCRYSTALTHE/EXPORTACION_WEB/CLEAN/DARKCRYSTALTHE_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/DARKCRYSTALTHE/EXPORTACION_WEB/CLEAN/DARKCRYSTALTHEWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/DARKCRYSTALTHE/EXPORTACION_WEB/CLEAN/DARKCRYSTALTHEWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/DARKCRYSTALTHE/EXPORTACION_WEB/SS/DARKCRYSTALTHEWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/DARKCRYSTALTHE/EXPORTACION_WEB/SS/DARKCRYSTALTHEWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/DARKCRYSTALTHE/EXPORTACION_WEB/SS/DARKCRYSTALTHEWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/DARKCRYSTALTHE/EXPORTACION_WEB/CLEAN/DARKCRYSTALTHEWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/DARKCRYSTALTHE/EXPORTACION_WEB/CLEAN/DARKCRYSTALTHEWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/DARKCRYSTALTHE/EXPORTACION_WEB/CLEAN/DARKCRYSTALTHEWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/DARKCRYSTALTHE/EXPORTACION_WEB/SPRITES/DARKCRYSTALTHE-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/DARKCRYSTALTHE/EXPORTACION_WEB/SPRITES/DARKCRYSTALTHE-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:33:15",
      date: "30/03/2020",
      year: "1982",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "829267",
      title: "Snatch: cerdos y diamantes",
      title_episode: null,
      title_uri: "Snatch-cerdos-y-diamantes",
      title_original: "Snatch",
      description:
        "El robo de un diamante desencadena una serie de eventos con personajes desopilantes.",
      description_large:
        "El atraco de un diamante sale mal y un gánster, corredores de apuestas y un perro se lanzan a una aventura en el duro mundo del boxeo en busca de la piedra perdida.",
      short_description: null,
      image_large:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/SNATCH/EXPORTACION_WEB/SS/SNATCHWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/SNATCH/EXPORTACION_WEB/SS/SNATCHWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/SNATCH/EXPORTACION_WEB/SS/SNATCHWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/SNATCH/EXPORTACION_WEB/STILLS/SNATCH-STILL-01.jpg",
      image_background:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/SNATCH/EXPORTACION_WEB/CLEAN/SNATCH_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/SNATCH/EXPORTACION_WEB/CLEAN/SNATCHWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/SNATCH/EXPORTACION_WEB/CLEAN/SNATCHWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/SNATCH/EXPORTACION_WEB/SS/SNATCHWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/SNATCH/EXPORTACION_WEB/SS/SNATCHWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/SNATCH/EXPORTACION_WEB/SS/SNATCHWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/SNATCH/EXPORTACION_WEB/CLEAN/SNATCHWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/SNATCH/EXPORTACION_WEB/CLEAN/SNATCHWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/SNATCH/EXPORTACION_WEB/CLEAN/SNATCHWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/SNATCH/EXPORTACION_WEB/SPRITES/SNATCH-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/SNATCH/EXPORTACION_WEB/SPRITES/SNATCH-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:42:42",
      date: "20200323201610",
      year: "2000",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "R",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "791467",
      title: "Runaways",
      title_episode: "La reunión",
      title_uri: "Runaways",
      title_original: "Runaways",
      description:
        "Un grupo de seis adolescentes de Los Ángeles descubren que sus padres esconden un secreto.",
      description_large:
        "Un grupo de seis adolescentes de Los Ángeles, muy dolidos por una trágica pérdida, se reúnen solo para descubrir que sus padres pueden estar ocultando un terrible secreto que trastorna su mundo.",
      short_description: null,
      image_large:
        "https://clarovideocdn0.clarovideo.net/SERIES/RUNAWAYS-02-02-00/EXPORTACION_WEB/SS/RUNAWAYS-02-02-00WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn8.clarovideo.net/SERIES/RUNAWAYS-02-02-00/EXPORTACION_WEB/SS/RUNAWAYS-02-02-00WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn0.clarovideo.net/SERIES/RUNAWAYS-02-02-00/EXPORTACION_WEB/SS/RUNAWAYS-02-02-00WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/RUNAWAYS-01-01-01/EXPORTACION_WEB/STILLS/RUNAWAYS-01-01-01-STILL-01.jpg",
      image_background:
        "https://clarovideocdn0.clarovideo.net/SERIES/RUNAWAYS-02-02-00/EXPORTACION_WEB/CLEAN/RUNAWAYS-02-02-00_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn1.clarovideo.net/SERIES/RUNAWAYS-02-02-00/EXPORTACION_WEB/CLEAN/RUNAWAYS-02-02-00WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn3.clarovideo.net/SERIES/RUNAWAYS-02-02-00/EXPORTACION_WEB/CLEAN/RUNAWAYS-02-02-00WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn7.clarovideo.net/SERIES/RUNAWAYS-02-02-00/EXPORTACION_WEB/SS/RUNAWAYS-02-02-00WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn5.clarovideo.net/SERIES/RUNAWAYS-02-02-00/EXPORTACION_WEB/SS/RUNAWAYS-02-02-00WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn5.clarovideo.net/SERIES/RUNAWAYS-02-02-00/EXPORTACION_WEB/SS/RUNAWAYS-02-02-00WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn0.clarovideo.net/SERIES/RUNAWAYS-02-02-00/EXPORTACION_WEB/CLEAN/RUNAWAYS-02-02-00WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn8.clarovideo.net/SERIES/RUNAWAYS-02-02-00/EXPORTACION_WEB/CLEAN/RUNAWAYS-02-02-00WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn8.clarovideo.net/SERIES/RUNAWAYS-02-02-00/EXPORTACION_WEB/CLEAN/RUNAWAYS-02-02-00WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/RUNAWAYS-01-01-01/EXPORTACION_WEB/SPRITES/RUNAWAYS-01-01-01-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/RUNAWAYS-01-01-01/EXPORTACION_WEB/SPRITES/RUNAWAYS-01-01-01-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "00:53:05",
      date: "28/11/2019",
      year: "2017",
      preview: "true",
      season_number: "1",
      episode_number: "1",
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG-13",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: true,
      channel_number: null,
    },
    {
      id: "784198",
      title: "Afghan Luke: Verdad oculta",
      title_episode: null,
      title_uri: "Afghan-Luke-Verdad-oculta",
      title_original: "Afghan Luke",
      description:
        "Luke regresa a Afganistán y se encuentra con un país aún más peligroso que el que dejó.",
      description_large:
        "Desanimado cuando su testimonio sobre francotiradores canadienses y mutilación de cuerpos es enterrado, Luke regresa a Afganistán para reunir pruebas suficientes sobre su historia. Pronto se encuentra con un país aún más peligroso que el que dejó.",
      short_description: null,
      image_large:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/AFGHANLUKE/EXPORTACION_WEB/SS/AFGHANLUKEWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/AFGHANLUKE/EXPORTACION_WEB/SS/AFGHANLUKEWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/AFGHANLUKE/EXPORTACION_WEB/SS/AFGHANLUKEWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/AFGHANLUKE/EXPORTACION_WEB/STILLS/AFGHANLUKE-STILL-01.jpg",
      image_background:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/AFGHANLUKE/EXPORTACION_WEB/CLEAN/AFGHANLUKE_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/AFGHANLUKE/EXPORTACION_WEB/CLEAN/AFGHANLUKEWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/AFGHANLUKE/EXPORTACION_WEB/CLEAN/AFGHANLUKEWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/AFGHANLUKE/EXPORTACION_WEB/SS/AFGHANLUKEWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/AFGHANLUKE/EXPORTACION_WEB/SS/AFGHANLUKEWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/AFGHANLUKE/EXPORTACION_WEB/SS/AFGHANLUKEWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/AFGHANLUKE/EXPORTACION_WEB/CLEAN/AFGHANLUKEWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/AFGHANLUKE/EXPORTACION_WEB/CLEAN/AFGHANLUKEWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/AFGHANLUKE/EXPORTACION_WEB/CLEAN/AFGHANLUKEWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/AFGHANLUKE/EXPORTACION_WEB/SPRITES/AFGHANLUKE-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/AFGHANLUKE/EXPORTACION_WEB/SPRITES/AFGHANLUKE-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:33:27",
      date: "10/03/2020",
      year: "2011",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "R",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "784159",
      title: "Henry Danger",
      title_episode: "El peligro comienza Parte 1",
      title_uri: "Henry-Danger",
      title_original: "Henry Danger",
      description:
        "Henry Hart obtiene su primer empleo como compañero del superhéroe.",
      description_large:
        "Henry Hart es un niño que obtiene su primer empleo soñado como compañero del superhéroe Captain Man. Su primera misión será ir tras un enemigo llamado el Infante, que quiere transformar a todos los bebés de la ciudad en horrendos monstruos verdes.",
      short_description: null,
      image_large:
        "https://clarovideocdn6.clarovideo.net/SERIES/HENRYDANGER-02-02-00/EXPORTACION_WEB/SS/HENRYDANGER-02-02-00WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn4.clarovideo.net/SERIES/HENRYDANGER-02-02-00/EXPORTACION_WEB/SS/HENRYDANGER-02-02-00WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn6.clarovideo.net/SERIES/HENRYDANGER-02-02-00/EXPORTACION_WEB/SS/HENRYDANGER-02-02-00WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/HENRYDANGER-01-01-01/EXPORTACION_WEB/STILLS/HENRYDANGER-01-01-01-STILL-01.jpg",
      image_background:
        "https://clarovideocdn6.clarovideo.net/SERIES/HENRYDANGER-02-02-00/EXPORTACION_WEB/CLEAN/HENRYDANGER-02-02-00_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn7.clarovideo.net/SERIES/HENRYDANGER-02-02-00/EXPORTACION_WEB/CLEAN/HENRYDANGER-02-02-00WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn9.clarovideo.net/SERIES/HENRYDANGER-02-02-00/EXPORTACION_WEB/CLEAN/HENRYDANGER-02-02-00WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn3.clarovideo.net/SERIES/HENRYDANGER-02-02-00/EXPORTACION_WEB/SS/HENRYDANGER-02-02-00WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn1.clarovideo.net/SERIES/HENRYDANGER-02-02-00/EXPORTACION_WEB/SS/HENRYDANGER-02-02-00WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn1.clarovideo.net/SERIES/HENRYDANGER-02-02-00/EXPORTACION_WEB/SS/HENRYDANGER-02-02-00WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn6.clarovideo.net/SERIES/HENRYDANGER-02-02-00/EXPORTACION_WEB/CLEAN/HENRYDANGER-02-02-00WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn4.clarovideo.net/SERIES/HENRYDANGER-02-02-00/EXPORTACION_WEB/CLEAN/HENRYDANGER-02-02-00WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn4.clarovideo.net/SERIES/HENRYDANGER-02-02-00/EXPORTACION_WEB/CLEAN/HENRYDANGER-02-02-00WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/HENRYDANGER-01-01-01/EXPORTACION_WEB/SPRITES/HENRYDANGER-01-01-01-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/HENRYDANGER-01-01-01/EXPORTACION_WEB/SPRITES/HENRYDANGER-01-01-01-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "00:22:37",
      date: "25/06/2019",
      year: "2014",
      preview: "true",
      season_number: "1",
      episode_number: "1",
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "G",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: true,
      channel_number: null,
    },
    {
      id: "784084",
      title: "Fuerzas especiales",
      title_episode: null,
      title_uri: "Fuerzas-especiales",
      title_original: "Special Forces",
      description:
        "Kruger es una periodista francesa secuestrada por los talibanes en Afganistán. ¿Será rescatada?",
      description_large:
        "Kruger es una periodista francesa secuestrada por los talibanes en Afganistán. Las fuerzas especiales de su país deberán rescatarla en una misión que será como meterse en el infierno.",
      short_description: null,
      image_large:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/SPECIALFORCES/EXPORTACION_WEB/SS/SPECIALFORCESWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/SPECIALFORCES/EXPORTACION_WEB/SS/SPECIALFORCESWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/SPECIALFORCES/EXPORTACION_WEB/SS/SPECIALFORCESWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/SPECIALFORCES/EXPORTACION_WEB/STILLS/SPECIALFORCES-STILL-01.jpg",
      image_background:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/SPECIALFORCES/EXPORTACION_WEB/CLEAN/SPECIALFORCES_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/SPECIALFORCES/EXPORTACION_WEB/CLEAN/SPECIALFORCESWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/SPECIALFORCES/EXPORTACION_WEB/CLEAN/SPECIALFORCESWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/SPECIALFORCES/EXPORTACION_WEB/SS/SPECIALFORCESWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/SPECIALFORCES/EXPORTACION_WEB/SS/SPECIALFORCESWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/SPECIALFORCES/EXPORTACION_WEB/SS/SPECIALFORCESWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/SPECIALFORCES/EXPORTACION_WEB/CLEAN/SPECIALFORCESWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/SPECIALFORCES/EXPORTACION_WEB/CLEAN/SPECIALFORCESWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/SPECIALFORCES/EXPORTACION_WEB/CLEAN/SPECIALFORCESWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/SPECIALFORCES/EXPORTACION_WEB/SPRITES/SPECIALFORCES-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/SPECIALFORCES/EXPORTACION_WEB/SPRITES/SPECIALFORCES-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:48:50",
      date: "25/04/2020",
      year: "2011",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "R",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "783993",
      title: "Tiros cruzados",
      title_episode: null,
      title_uri: "Tiros-cruzados",
      title_original: "Rain Fall",
      description:
        "Después de realizar un encargo, Rain debe proteger de la CIA a la hija de su víctima.",
      description_large:
        "Rain es un americano exmiembro de las Fuerzas Especiales del Ejército estadounidense, que ahora trabaja como asesino a sueldo. Después de realizar un encargo, debe proteger a la hija de su víctima a la que persiguen agentes de la CIA.",
      short_description: null,
      image_large:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/RAINFALL/EXPORTACION_WEB/SS/RAINFALLWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/RAINFALL/EXPORTACION_WEB/SS/RAINFALLWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/RAINFALL/EXPORTACION_WEB/SS/RAINFALLWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/RAINFALL/EXPORTACION_WEB/STILLS/RAINFALL-STILL-01.jpg",
      image_background:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/RAINFALL/EXPORTACION_WEB/CLEAN/RAINFALL_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/RAINFALL/EXPORTACION_WEB/CLEAN/RAINFALLWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/RAINFALL/EXPORTACION_WEB/CLEAN/RAINFALLWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/RAINFALL/EXPORTACION_WEB/SS/RAINFALLWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/RAINFALL/EXPORTACION_WEB/SS/RAINFALLWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/RAINFALL/EXPORTACION_WEB/SS/RAINFALLWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/RAINFALL/EXPORTACION_WEB/CLEAN/RAINFALLWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/RAINFALL/EXPORTACION_WEB/CLEAN/RAINFALLWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/RAINFALL/EXPORTACION_WEB/CLEAN/RAINFALLWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/RAINFALL/EXPORTACION_WEB/SPRITES/RAINFALL-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/RAINFALL/EXPORTACION_WEB/SPRITES/RAINFALL-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:50:37",
      date: "20200310164001",
      year: "2009",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "R",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "784039",
      title: "The Thundermans",
      title_episode: "Aventuras de Superniñera",
      title_uri: "The-Thundermans",
      title_original: "Thundermans, The",
      description:
        "Phoebe y Max tienen que cuidar a sus hermanos mientras sus padres salen a cenar.",
      description_large:
        "Phoebe y Max Thunderman tienen que cuidar a sus hermanos menores mientras sus padres salen a cenar. Phoebe invita a su casa a su mejor amiga Cherry y, accidentalmente, deja al descubierto los súper poderes de la familia.",
      short_description: null,
      image_large:
        "https://clarovideocdn2.clarovideo.net/SERIES/THUNDERMANSTHE-02-02-00/EXPORTACION_WEB/SS/THUNDERMANSTHE-02-02-00WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn0.clarovideo.net/SERIES/THUNDERMANSTHE-02-02-00/EXPORTACION_WEB/SS/THUNDERMANSTHE-02-02-00WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn2.clarovideo.net/SERIES/THUNDERMANSTHE-02-02-00/EXPORTACION_WEB/SS/THUNDERMANSTHE-02-02-00WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/THUNDERMANSTHE-01-01-01/EXPORTACION_WEB/STILLS/THUNDERMANSTHE-01-01-01-STILL-01.jpg",
      image_background:
        "https://clarovideocdn2.clarovideo.net/SERIES/THUNDERMANSTHE-02-02-00/EXPORTACION_WEB/CLEAN/THUNDERMANSTHE-02-02-00_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn3.clarovideo.net/SERIES/THUNDERMANSTHE-02-02-00/EXPORTACION_WEB/CLEAN/THUNDERMANSTHE-02-02-00WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn5.clarovideo.net/SERIES/THUNDERMANSTHE-02-02-00/EXPORTACION_WEB/CLEAN/THUNDERMANSTHE-02-02-00WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn9.clarovideo.net/SERIES/THUNDERMANSTHE-02-02-00/EXPORTACION_WEB/SS/THUNDERMANSTHE-02-02-00WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn7.clarovideo.net/SERIES/THUNDERMANSTHE-02-02-00/EXPORTACION_WEB/SS/THUNDERMANSTHE-02-02-00WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn7.clarovideo.net/SERIES/THUNDERMANSTHE-02-02-00/EXPORTACION_WEB/SS/THUNDERMANSTHE-02-02-00WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn2.clarovideo.net/SERIES/THUNDERMANSTHE-02-02-00/EXPORTACION_WEB/CLEAN/THUNDERMANSTHE-02-02-00WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn0.clarovideo.net/SERIES/THUNDERMANSTHE-02-02-00/EXPORTACION_WEB/CLEAN/THUNDERMANSTHE-02-02-00WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn0.clarovideo.net/SERIES/THUNDERMANSTHE-02-02-00/EXPORTACION_WEB/CLEAN/THUNDERMANSTHE-02-02-00WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/THUNDERMANSTHE-01-01-01/EXPORTACION_WEB/SPRITES/THUNDERMANSTHE-01-01-01-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/THUNDERMANSTHE-01-01-01/EXPORTACION_WEB/SPRITES/THUNDERMANSTHE-01-01-01-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "00:22:52",
      date: "20190910194138",
      year: "2013",
      preview: "true",
      season_number: "1",
      episode_number: "1",
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "G",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: true,
      channel_number: null,
    },
    {
      id: "782782",
      title: "The Blacklist: Redemption",
      title_episode: "Leland Bray",
      title_uri: "The-Blacklist-Redemption",
      title_original: "Blacklist: Redemption, The",
      description:
        "La búsqueda de la verdad sobre su pasado lleva a Tom a trabajar junto a un asesino letal.",
      description_large:
        "En el primer episodio, la búsqueda de la verdad sobre su pasado lleva a Tom a un nuevo trabajo junto a un asesino letal y a su antigua némesis, quien está buscando expiar sus pecados.",
      short_description: null,
      image_large:
        "https://clarovideocdn8.clarovideo.net/SERIES/BLACKLISTREDEMPTIONTHE-01-01-00/EXPORTACION_WEB/SS/BLACKLISTREDEMPTIONTHE-01-01-00WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn6.clarovideo.net/SERIES/BLACKLISTREDEMPTIONTHE-01-01-00/EXPORTACION_WEB/SS/BLACKLISTREDEMPTIONTHE-01-01-00WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn8.clarovideo.net/SERIES/BLACKLISTREDEMPTIONTHE-01-01-00/EXPORTACION_WEB/SS/BLACKLISTREDEMPTIONTHE-01-01-00WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/BLACKLISTREDEMPTIONTHE-01-01-01/EXPORTACION_WEB/STILLS/BLACKLISTREDEMPTIONTHE-01-01-01-STILL-01.jpg",
      image_background:
        "https://clarovideocdn8.clarovideo.net/SERIES/BLACKLISTREDEMPTIONTHE-01-01-00/EXPORTACION_WEB/CLEAN/BLACKLISTREDEMPTIONTHE-01-01-00_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn9.clarovideo.net/SERIES/BLACKLISTREDEMPTIONTHE-01-01-00/EXPORTACION_WEB/CLEAN/BLACKLISTREDEMPTIONTHE-01-01-00WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn1.clarovideo.net/SERIES/BLACKLISTREDEMPTIONTHE-01-01-00/EXPORTACION_WEB/CLEAN/BLACKLISTREDEMPTIONTHE-01-01-00WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn5.clarovideo.net/SERIES/BLACKLISTREDEMPTIONTHE-01-01-00/EXPORTACION_WEB/SS/BLACKLISTREDEMPTIONTHE-01-01-00WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn3.clarovideo.net/SERIES/BLACKLISTREDEMPTIONTHE-01-01-00/EXPORTACION_WEB/SS/BLACKLISTREDEMPTIONTHE-01-01-00WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn3.clarovideo.net/SERIES/BLACKLISTREDEMPTIONTHE-01-01-00/EXPORTACION_WEB/SS/BLACKLISTREDEMPTIONTHE-01-01-00WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn8.clarovideo.net/SERIES/BLACKLISTREDEMPTIONTHE-01-01-00/EXPORTACION_WEB/CLEAN/BLACKLISTREDEMPTIONTHE-01-01-00WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn6.clarovideo.net/SERIES/BLACKLISTREDEMPTIONTHE-01-01-00/EXPORTACION_WEB/CLEAN/BLACKLISTREDEMPTIONTHE-01-01-00WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn6.clarovideo.net/SERIES/BLACKLISTREDEMPTIONTHE-01-01-00/EXPORTACION_WEB/CLEAN/BLACKLISTREDEMPTIONTHE-01-01-00WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/BLACKLISTREDEMPTIONTHE-01-01-01/EXPORTACION_WEB/SPRITES/BLACKLISTREDEMPTIONTHE-01-01-01-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/BLACKLISTREDEMPTIONTHE-01-01-01/EXPORTACION_WEB/SPRITES/BLACKLISTREDEMPTIONTHE-01-01-01-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "00:42:19",
      date: "01/04/2020",
      year: "2017",
      preview: "false",
      season_number: "1",
      episode_number: "1",
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "R",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: true,
      channel_number: null,
    },
    {
      id: "782317",
      title: "En el camino",
      title_episode: null,
      title_uri: "En-el-camino",
      title_original: "On the Road",
      description:
        "Una relación peculiar lleva a dos hombres a iniciar un viaje desenfrenado.",
      description_large:
        "Luego de la muerte de su padre, Sal Paradise, un neoyorquino que aspira a ser escritor, conoce a Dean Moriarty, un expresidiario de un encanto arrollador. Sedientos de libertad y decididos a huir de la rutina, emprenden un viaje hacia el sur.",
      short_description: null,
      image_large:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/ONTHEROAD/EXPORTACION_WEB/SS/ONTHEROADWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/ONTHEROAD/EXPORTACION_WEB/SS/ONTHEROADWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/ONTHEROAD/EXPORTACION_WEB/SS/ONTHEROADWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/ONTHEROAD/EXPORTACION_WEB/STILLS/ONTHEROAD-STILL-01.jpg",
      image_background:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/ONTHEROAD/EXPORTACION_WEB/CLEAN/ONTHEROAD_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/ONTHEROAD/EXPORTACION_WEB/CLEAN/ONTHEROADWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/ONTHEROAD/EXPORTACION_WEB/CLEAN/ONTHEROADWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/ONTHEROAD/EXPORTACION_WEB/SS/ONTHEROADWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/ONTHEROAD/EXPORTACION_WEB/SS/ONTHEROADWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/ONTHEROAD/EXPORTACION_WEB/SS/ONTHEROADWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/ONTHEROAD/EXPORTACION_WEB/CLEAN/ONTHEROADWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/ONTHEROAD/EXPORTACION_WEB/CLEAN/ONTHEROADWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/ONTHEROAD/EXPORTACION_WEB/CLEAN/ONTHEROADWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/ONTHEROAD/EXPORTACION_WEB/SPRITES/ONTHEROAD-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/ONTHEROAD/EXPORTACION_WEB/SPRITES/ONTHEROAD-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "02:19:44",
      date: "22/01/2020",
      year: "2012",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "R",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "779100",
      title: "La querida del Centauro",
      title_episode: "Episodio 1",
      title_uri: "La-querida-del-Centauro",
      title_original: "Querida del Centauro, La",
      description:
        "El Centauro domina a su antojo y todos lo respetan con temor en el Penal de San Fernando.",
      description_large:
        "El Centauro domina a su antojo y todos lo respetan con temor en el Penal de San Fernando. En retrospectiva, vemos cómo se fugó del penal con la complicidad de varios guardias y reclusos, dejando a su paso varios policías muertos.",
      short_description: null,
      image_large:
        "https://clarovideocdn4.clarovideo.net/SERIES/QUERIDADELCENTAUROLA-02-02-00/EXPORTACION_WEB/SS/QUERIDADELCENTAUROLA-02-02-00WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn2.clarovideo.net/SERIES/QUERIDADELCENTAUROLA-02-02-00/EXPORTACION_WEB/SS/QUERIDADELCENTAUROLA-02-02-00WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn4.clarovideo.net/SERIES/QUERIDADELCENTAUROLA-02-02-00/EXPORTACION_WEB/SS/QUERIDADELCENTAUROLA-02-02-00WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/QUERIDADELCENTAUROLA-01-01-01/EXPORTACION_WEB/STILLS/QUERIDADELCENTAUROLA-01-01-01-STILL-01.jpg",
      image_background:
        "https://clarovideocdn4.clarovideo.net/SERIES/QUERIDADELCENTAUROLA-02-02-00/EXPORTACION_WEB/CLEAN/QUERIDADELCENTAUROLA-02-02-00_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn5.clarovideo.net/SERIES/QUERIDADELCENTAUROLA-02-02-00/EXPORTACION_WEB/CLEAN/QUERIDADELCENTAUROLA-02-02-00WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn7.clarovideo.net/SERIES/QUERIDADELCENTAUROLA-02-02-00/EXPORTACION_WEB/CLEAN/QUERIDADELCENTAUROLA-02-02-00WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn1.clarovideo.net/SERIES/QUERIDADELCENTAUROLA-02-02-00/EXPORTACION_WEB/SS/QUERIDADELCENTAUROLA-02-02-00WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn9.clarovideo.net/SERIES/QUERIDADELCENTAUROLA-02-02-00/EXPORTACION_WEB/SS/QUERIDADELCENTAUROLA-02-02-00WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn9.clarovideo.net/SERIES/QUERIDADELCENTAUROLA-02-02-00/EXPORTACION_WEB/SS/QUERIDADELCENTAUROLA-02-02-00WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn4.clarovideo.net/SERIES/QUERIDADELCENTAUROLA-02-02-00/EXPORTACION_WEB/CLEAN/QUERIDADELCENTAUROLA-02-02-00WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn2.clarovideo.net/SERIES/QUERIDADELCENTAUROLA-02-02-00/EXPORTACION_WEB/CLEAN/QUERIDADELCENTAUROLA-02-02-00WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn2.clarovideo.net/SERIES/QUERIDADELCENTAUROLA-02-02-00/EXPORTACION_WEB/CLEAN/QUERIDADELCENTAUROLA-02-02-00WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/QUERIDADELCENTAUROLA-01-01-01/EXPORTACION_WEB/SPRITES/QUERIDADELCENTAUROLA-01-01-01-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/QUERIDADELCENTAUROLA-01-01-01/EXPORTACION_WEB/SPRITES/QUERIDADELCENTAUROLA-01-01-01-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "00:57:42",
      date: "23/12/2018",
      year: "2016",
      preview: "false",
      season_number: "1",
      episode_number: "1",
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG-13",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: true,
      channel_number: null,
    },
    {
      id: "778986",
      title: "Descendientes",
      title_episode: null,
      title_uri: "Descendientes",
      title_original: "Descendants",
      description:
        "¿Podrán los chicos malos de Disney alejarse de los problemas y congeniar?",
      description_large:
        "Ben, el benevolente hijo adolescente del Rey y la Reina, está listo para tomar el trono. Su primera proclamación: ofrece una oportunidad de redención a los hijos problemáticos de Maléfica, la Reina Malvada, Cruella de Vil y Jafar.",
      short_description: null,
      image_large:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/DESCENDANTS/EXPORTACION_WEB/SS/DESCENDANTSWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/DESCENDANTS/EXPORTACION_WEB/SS/DESCENDANTSWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/DESCENDANTS/EXPORTACION_WEB/SS/DESCENDANTSWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/DESCENDANTS/EXPORTACION_WEB/STILLS/DESCENDANTS-STILL-01.jpg",
      image_background:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/DESCENDANTS/EXPORTACION_WEB/CLEAN/DESCENDANTS_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/DESCENDANTS/EXPORTACION_WEB/CLEAN/DESCENDANTSWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/DESCENDANTS/EXPORTACION_WEB/CLEAN/DESCENDANTSWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/DESCENDANTS/EXPORTACION_WEB/SS/DESCENDANTSWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/DESCENDANTS/EXPORTACION_WEB/SS/DESCENDANTSWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/DESCENDANTS/EXPORTACION_WEB/SS/DESCENDANTSWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/DESCENDANTS/EXPORTACION_WEB/CLEAN/DESCENDANTSWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/DESCENDANTS/EXPORTACION_WEB/CLEAN/DESCENDANTSWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/DESCENDANTS/EXPORTACION_WEB/CLEAN/DESCENDANTSWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/DESCENDANTS/EXPORTACION_WEB/SPRITES/DESCENDANTS-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/DESCENDANTS/EXPORTACION_WEB/SPRITES/DESCENDANTS-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:52:07",
      date: "20181219174718",
      year: "2015",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "778537",
      title: "Jamestown",
      title_episode: "Episodio 1",
      title_uri: "Jamestown",
      title_original: "Jamestown",
      description:
        "Un barco inglés llega a la Virginia del siglo XVII con mujeres destinadas a casarse.",
      description_large:
        "Un barco inglés llega a la Virginia del siglo XVII con mujeres destinadas a casarse con los hombres frustrados de Jamestown. Se enfrentan a un desierto peligroso, pero se sienten atraídos por la embriagadora esperanza de la libertad y la aventura.",
      short_description: null,
      image_large:
        "https://clarovideocdn2.clarovideo.net/SERIES/JAMESTOWN-03-03-00/EXPORTACION_WEB/SS/JAMESTOWN-03-03-00WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn0.clarovideo.net/SERIES/JAMESTOWN-03-03-00/EXPORTACION_WEB/SS/JAMESTOWN-03-03-00WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn2.clarovideo.net/SERIES/JAMESTOWN-03-03-00/EXPORTACION_WEB/SS/JAMESTOWN-03-03-00WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/JAMESTOWN-01-01-01/EXPORTACION_WEB/STILLS/JAMESTOWN-01-01-01-STILL-01.jpg",
      image_background:
        "https://clarovideocdn2.clarovideo.net/SERIES/JAMESTOWN-03-03-00/EXPORTACION_WEB/CLEAN/JAMESTOWN-03-03-00_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn3.clarovideo.net/SERIES/JAMESTOWN-03-03-00/EXPORTACION_WEB/CLEAN/JAMESTOWN-03-03-00WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn5.clarovideo.net/SERIES/JAMESTOWN-03-03-00/EXPORTACION_WEB/CLEAN/JAMESTOWN-03-03-00WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn9.clarovideo.net/SERIES/JAMESTOWN-03-03-00/EXPORTACION_WEB/SS/JAMESTOWN-03-03-00WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn7.clarovideo.net/SERIES/JAMESTOWN-03-03-00/EXPORTACION_WEB/SS/JAMESTOWN-03-03-00WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn7.clarovideo.net/SERIES/JAMESTOWN-03-03-00/EXPORTACION_WEB/SS/JAMESTOWN-03-03-00WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn2.clarovideo.net/SERIES/JAMESTOWN-03-03-00/EXPORTACION_WEB/CLEAN/JAMESTOWN-03-03-00WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn0.clarovideo.net/SERIES/JAMESTOWN-03-03-00/EXPORTACION_WEB/CLEAN/JAMESTOWN-03-03-00WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn0.clarovideo.net/SERIES/JAMESTOWN-03-03-00/EXPORTACION_WEB/CLEAN/JAMESTOWN-03-03-00WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/JAMESTOWN-01-01-01/EXPORTACION_WEB/SPRITES/JAMESTOWN-01-01-01-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/JAMESTOWN-01-01-01/EXPORTACION_WEB/SPRITES/JAMESTOWN-01-01-01-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:05:05",
      date: "20191112181001",
      year: "2017",
      preview: "false",
      season_number: "1",
      episode_number: "1",
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG-13",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: true,
      channel_number: null,
    },
    {
      id: "778542",
      title: "Doctor Who: Christmas 2015, The Husbands of Riversong",
      title_episode: null,
      title_uri: "Doctor-Who-Christmas-2015-The-Husbands-of-Riversong",
      title_original: "Doctor Who: Christmas 2015, The Husbands of Riversong",
      description:
        "El Doctor se ha regenerado muchas veces durante siglos y ha visto cosas que no creerías.",
      description_large:
        "El Doctor se ha regenerado muchas veces a lo largo de los siglos y ha visto cosas que no creerías: mundos extraordinarios, monstruos terroríficos, cosas imposibles. Si viajas con el Doctor, ¡nada volverá a ser lo mismo!",
      short_description: null,
      image_large:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONGWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONGWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONGWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG/EXPORTACION_WEB/STILLS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG-STILL-01.jpg",
      image_background:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONGWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONGWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONGWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONGWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONGWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONGWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONGWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONGWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG/EXPORTACION_WEB/SPRITES/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG/EXPORTACION_WEB/SPRITES/DOCTORWHOCHRISTMAS2015THEHUSBANDSOFRIVERSONG-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "00:56:14",
      date: "20181205174440",
      year: "2015",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "778513",
      title: "Doctor Who: Twice Upon a Time",
      title_episode: null,
      title_uri: "Doctor-Who-Twice-Upon-a-Time",
      title_original: "Doctor Who: Twice Upon a Time",
      description:
        "En esta épica aventura, el doceavo doctor debe enfrentar su pasado para decidir su futuro.",
      description_large:
        "Dos doctores varados en un paisaje nevado prohibido y un capitán del ejército británico, aparentemente destinado a morir en la Primera Guerra Mundial, son sacados de las trincheras para desempeñar su papel en la historia del Doctor.",
      short_description: null,
      image_large:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/DOCTORWHOTWICEUPONATIME/EXPORTACION_WEB/SS/DOCTORWHOTWICEUPONATIMEWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/DOCTORWHOTWICEUPONATIME/EXPORTACION_WEB/SS/DOCTORWHOTWICEUPONATIMEWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/DOCTORWHOTWICEUPONATIME/EXPORTACION_WEB/SS/DOCTORWHOTWICEUPONATIMEWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/DOCTORWHOTWICEUPONATIME/EXPORTACION_WEB/STILLS/DOCTORWHOTWICEUPONATIME-STILL-01.jpg",
      image_background:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/DOCTORWHOTWICEUPONATIME/EXPORTACION_WEB/CLEAN/DOCTORWHOTWICEUPONATIME_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/DOCTORWHOTWICEUPONATIME/EXPORTACION_WEB/CLEAN/DOCTORWHOTWICEUPONATIMEWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/DOCTORWHOTWICEUPONATIME/EXPORTACION_WEB/CLEAN/DOCTORWHOTWICEUPONATIMEWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/DOCTORWHOTWICEUPONATIME/EXPORTACION_WEB/SS/DOCTORWHOTWICEUPONATIMEWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/DOCTORWHOTWICEUPONATIME/EXPORTACION_WEB/SS/DOCTORWHOTWICEUPONATIMEWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/DOCTORWHOTWICEUPONATIME/EXPORTACION_WEB/SS/DOCTORWHOTWICEUPONATIMEWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/DOCTORWHOTWICEUPONATIME/EXPORTACION_WEB/CLEAN/DOCTORWHOTWICEUPONATIMEWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/DOCTORWHOTWICEUPONATIME/EXPORTACION_WEB/CLEAN/DOCTORWHOTWICEUPONATIMEWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/DOCTORWHOTWICEUPONATIME/EXPORTACION_WEB/CLEAN/DOCTORWHOTWICEUPONATIMEWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/DOCTORWHOTWICEUPONATIME/EXPORTACION_WEB/SPRITES/DOCTORWHOTWICEUPONATIME-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/DOCTORWHOTWICEUPONATIME/EXPORTACION_WEB/SPRITES/DOCTORWHOTWICEUPONATIME-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "00:59:58",
      date: "05/12/2018",
      year: "2017",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "778512",
      title: "Doctor Who: Christmas 2014, Last Christmas",
      title_episode: null,
      title_uri: "Doctor-Who-Christmas-2014-Last-Christmas",
      title_original: "Doctor Who: Christmas 2014, Last Christmas",
      description:
        "El Doctor y Clara se enfrentan con su última navidad juntos.",
      description_large:
        "El Doctor y Clara se enfrentan con su última navidad juntos. Si estuvieras atrapado en una base ártica y bajo el ataque de criaturas terroríficas, ¿a quién llamarías? ¡A Papá Noel!",
      short_description: null,
      image_large:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2014LASTCHRISTMASWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2014LASTCHRISTMASWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2014LASTCHRISTMASWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS/EXPORTACION_WEB/STILLS/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS-STILL-01.jpg",
      image_background:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2014LASTCHRISTMASWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2014LASTCHRISTMASWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2014LASTCHRISTMASWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2014LASTCHRISTMASWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2014LASTCHRISTMASWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2014LASTCHRISTMASWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2014LASTCHRISTMASWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2014LASTCHRISTMASWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS/EXPORTACION_WEB/SPRITES/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS/EXPORTACION_WEB/SPRITES/DOCTORWHOCHRISTMAS2014LASTCHRISTMAS-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:00:27",
      date: "05/12/2018",
      year: "2014",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "778531",
      title: "Doctor Who: Christmas 2016, The Return of Doctor Mysterio",
      title_episode: null,
      title_uri: "Doctor-Who-Christmas-2016-The-Return-of-Doctor-Mysterio",
      title_original:
        "Doctor Who: Christmas 2016, The Return of Doctor Mysterio",
      description:
        "El Doctor une fuerzas con un superhéroe enmascarado para una aventura épica en Nueva York.",
      description_large:
        "El Doctor une fuerzas con un superhéroe enmascarado para una aventura épica en Nueva York. Con extraterrestres que intercambian cerebros a punto de atacar, el Doctor y Nardole se relacionan con un reportero de investigación y una misteriosa figura.",
      short_description: null,
      image_large:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIOWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIOWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIOWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO/EXPORTACION_WEB/STILLS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO-STILL-01.jpg",
      image_background:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIOWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIOWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIOWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIOWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO/EXPORTACION_WEB/SS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIOWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIOWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIOWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO/EXPORTACION_WEB/CLEAN/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIOWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO/EXPORTACION_WEB/SPRITES/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO/EXPORTACION_WEB/SPRITES/DOCTORWHOCHRISTMAS2016THERETURNOFDOCTORMYSTERIO-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:00:30",
      date: "20181205170914",
      year: "2016",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "778495",
      title: "En busca de la estrella de Navidad",
      title_episode: null,
      title_uri: "En-busca-de-la-estrella-de-Navidad",
      title_original: "Journey to the Christmas Star",
      description:
        "Una niña parte en una aventura para encontrar una estrella y salvar la Navidad.",
      description_large:
        "En un reino muy lejano, la estrella navideña desaparece y una maldición cae sobre su pueblo. Pero la niña Sonja está decidida a salvar la Navidad. Para romper el embrujo, deberá enfrentar a temerosos villanos y salvar a la princesa perdida.",
      short_description: null,
      image_large:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/JOURNEYTOTHECHRISTMASSTAR/EXPORTACION_WEB/SS/JOURNEYTOTHECHRISTMASSTARWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/JOURNEYTOTHECHRISTMASSTAR/EXPORTACION_WEB/SS/JOURNEYTOTHECHRISTMASSTARWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/JOURNEYTOTHECHRISTMASSTAR/EXPORTACION_WEB/SS/JOURNEYTOTHECHRISTMASSTARWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/JOURNEYTOTHECHRISTMASSTAR/EXPORTACION_WEB/STILLS/JOURNEYTOTHECHRISTMASSTAR-STILL-01.jpg",
      image_background:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/JOURNEYTOTHECHRISTMASSTAR/EXPORTACION_WEB/CLEAN/JOURNEYTOTHECHRISTMASSTAR_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/JOURNEYTOTHECHRISTMASSTAR/EXPORTACION_WEB/CLEAN/JOURNEYTOTHECHRISTMASSTARWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/JOURNEYTOTHECHRISTMASSTAR/EXPORTACION_WEB/CLEAN/JOURNEYTOTHECHRISTMASSTARWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/JOURNEYTOTHECHRISTMASSTAR/EXPORTACION_WEB/SS/JOURNEYTOTHECHRISTMASSTARWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/JOURNEYTOTHECHRISTMASSTAR/EXPORTACION_WEB/SS/JOURNEYTOTHECHRISTMASSTARWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/JOURNEYTOTHECHRISTMASSTAR/EXPORTACION_WEB/SS/JOURNEYTOTHECHRISTMASSTARWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/JOURNEYTOTHECHRISTMASSTAR/EXPORTACION_WEB/CLEAN/JOURNEYTOTHECHRISTMASSTARWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/JOURNEYTOTHECHRISTMASSTAR/EXPORTACION_WEB/CLEAN/JOURNEYTOTHECHRISTMASSTARWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/JOURNEYTOTHECHRISTMASSTAR/EXPORTACION_WEB/CLEAN/JOURNEYTOTHECHRISTMASSTARWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/JOURNEYTOTHECHRISTMASSTAR/EXPORTACION_WEB/SPRITES/JOURNEYTOTHECHRISTMASSTAR-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/JOURNEYTOTHECHRISTMASSTAR/EXPORTACION_WEB/SPRITES/JOURNEYTOTHECHRISTMASSTAR-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:16:53",
      date: "20181204144001",
      year: "2012",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "G",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "777660",
      title: "Doctor Who",
      title_episode: "The Magician's Apprentice",
      title_uri: "Doctor-Who",
      title_original: "Doctor Who",
      description:
        "El cielo es congelado por una misteriosa fuerza alienígena, Clara necesita a su amigo.",
      description_large:
        "¿Dónde está el doctor? Cuando el cielo es congelado por una misteriosa fuerza alienígena, Clara necesita a su amigo. Pero, ¿dónde está el doctor y de qué se esconde?",
      short_description: null,
      image_large:
        "https://clarovideocdn2.clarovideo.net/SERIES/DOCTORWHO-10-10-00/EXPORTACION_WEB/SS/DOCTORWHO-10-10-00WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn0.clarovideo.net/SERIES/DOCTORWHO-10-10-00/EXPORTACION_WEB/SS/DOCTORWHO-10-10-00WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn2.clarovideo.net/SERIES/DOCTORWHO-10-10-00/EXPORTACION_WEB/SS/DOCTORWHO-10-10-00WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/DOCTORWHO-09-09-01/EXPORTACION_WEB/STILLS/DOCTORWHO-09-09-01-STILL-01.jpg",
      image_background:
        "https://clarovideocdn2.clarovideo.net/SERIES/DOCTORWHO-10-10-00/EXPORTACION_WEB/CLEAN/DOCTORWHO-10-10-00_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn3.clarovideo.net/SERIES/DOCTORWHO-10-10-00/EXPORTACION_WEB/CLEAN/DOCTORWHO-10-10-00WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn5.clarovideo.net/SERIES/DOCTORWHO-10-10-00/EXPORTACION_WEB/CLEAN/DOCTORWHO-10-10-00WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn9.clarovideo.net/SERIES/DOCTORWHO-10-10-00/EXPORTACION_WEB/SS/DOCTORWHO-10-10-00WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn7.clarovideo.net/SERIES/DOCTORWHO-10-10-00/EXPORTACION_WEB/SS/DOCTORWHO-10-10-00WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn7.clarovideo.net/SERIES/DOCTORWHO-10-10-00/EXPORTACION_WEB/SS/DOCTORWHO-10-10-00WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn2.clarovideo.net/SERIES/DOCTORWHO-10-10-00/EXPORTACION_WEB/CLEAN/DOCTORWHO-10-10-00WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn0.clarovideo.net/SERIES/DOCTORWHO-10-10-00/EXPORTACION_WEB/CLEAN/DOCTORWHO-10-10-00WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn0.clarovideo.net/SERIES/DOCTORWHO-10-10-00/EXPORTACION_WEB/CLEAN/DOCTORWHO-10-10-00WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/DOCTORWHO-09-09-01/EXPORTACION_WEB/SPRITES/DOCTORWHO-09-09-01-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/DOCTORWHO-09-09-01/EXPORTACION_WEB/SPRITES/DOCTORWHO-09-09-01-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "00:46:26",
      date: "20181117172640",
      year: "2015",
      preview: "false",
      season_number: "9",
      episode_number: "1",
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "G",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: true,
      channel_number: null,
    },
    {
      id: "776781",
      title: "Tras líneas enemigas",
      title_episode: null,
      title_uri: "Tras-lineas-enemigas",
      title_original: "Behind Enemy Lines (2001)",
      description:
        "Atrapado detrás de las líneas enemigas, un aviador naval debe luchar para sobrevivir.",
      description_large:
        "Durante una misión de reconocimiento, el aviador naval Chris Burnett fotografía algo que nadie debía ver y es derribado. Atrapado detrás de las líneas enemigas, debe luchar para sobrevivir a la persecución de varias tropas hostiles.",
      short_description: null,
      image_large:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/BEHINDENEMYLINES2001/EXPORTACION_WEB/SS/BEHINDENEMYLINES2001WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/BEHINDENEMYLINES2001/EXPORTACION_WEB/SS/BEHINDENEMYLINES2001WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/BEHINDENEMYLINES2001/EXPORTACION_WEB/SS/BEHINDENEMYLINES2001WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/BEHINDENEMYLINES2001/EXPORTACION_WEB/STILLS/BEHINDENEMYLINES2001-STILL-01.jpg",
      image_background:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/BEHINDENEMYLINES2001/EXPORTACION_WEB/CLEAN/BEHINDENEMYLINES2001_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/BEHINDENEMYLINES2001/EXPORTACION_WEB/CLEAN/BEHINDENEMYLINES2001WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/BEHINDENEMYLINES2001/EXPORTACION_WEB/CLEAN/BEHINDENEMYLINES2001WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/BEHINDENEMYLINES2001/EXPORTACION_WEB/SS/BEHINDENEMYLINES2001WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/BEHINDENEMYLINES2001/EXPORTACION_WEB/SS/BEHINDENEMYLINES2001WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/BEHINDENEMYLINES2001/EXPORTACION_WEB/SS/BEHINDENEMYLINES2001WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/BEHINDENEMYLINES2001/EXPORTACION_WEB/CLEAN/BEHINDENEMYLINES2001WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/BEHINDENEMYLINES2001/EXPORTACION_WEB/CLEAN/BEHINDENEMYLINES2001WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/BEHINDENEMYLINES2001/EXPORTACION_WEB/CLEAN/BEHINDENEMYLINES2001WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/BEHINDENEMYLINES2001/EXPORTACION_WEB/SPRITES/BEHINDENEMYLINES2001-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/BEHINDENEMYLINES2001/EXPORTACION_WEB/SPRITES/BEHINDENEMYLINES2001-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:45:50",
      date: "20191012140001",
      year: "2001",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG-13",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "776435",
      title: "La playa",
      title_episode: null,
      title_uri: "La-playa",
      title_original: "Beach, The (2000)",
      description:
        "Daffy le cuenta a Richard sobre una isla secreta, un paraíso en la tierra: la playa perfecta.",
      description_large:
        "En un hotel barato en Bangkok, el viejo Daffy le cuenta a Richard sobre una isla secreta, un paraíso en la tierra: la playa perfecta. Richard se convence de que puede ser lo que ha estado buscando y va por ella con un mapa dibujado a mano por Daffy.",
      short_description: null,
      image_large:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/BEACHTHE2000/EXPORTACION_WEB/SS/BEACHTHE2000WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/BEACHTHE2000/EXPORTACION_WEB/SS/BEACHTHE2000WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/BEACHTHE2000/EXPORTACION_WEB/SS/BEACHTHE2000WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/BEACHTHE2000/EXPORTACION_WEB/STILLS/BEACHTHE2000-STILL-01.jpg",
      image_background:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/BEACHTHE2000/EXPORTACION_WEB/CLEAN/BEACHTHE2000_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/BEACHTHE2000/EXPORTACION_WEB/CLEAN/BEACHTHE2000WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/BEACHTHE2000/EXPORTACION_WEB/CLEAN/BEACHTHE2000WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/BEACHTHE2000/EXPORTACION_WEB/SS/BEACHTHE2000WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/BEACHTHE2000/EXPORTACION_WEB/SS/BEACHTHE2000WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/BEACHTHE2000/EXPORTACION_WEB/SS/BEACHTHE2000WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/BEACHTHE2000/EXPORTACION_WEB/CLEAN/BEACHTHE2000WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/BEACHTHE2000/EXPORTACION_WEB/CLEAN/BEACHTHE2000WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/BEACHTHE2000/EXPORTACION_WEB/CLEAN/BEACHTHE2000WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/BEACHTHE2000/EXPORTACION_WEB/SPRITES/BEACHTHE2000-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/BEACHTHE2000/EXPORTACION_WEB/SPRITES/BEACHTHE2000-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:59:08",
      date: "20190718145001",
      year: "2000",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "R",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "775010",
      title: "Sanctum",
      title_episode: null,
      title_uri: "Sanctum",
      title_original: "Sanctum (James Cameron's Sanctum)",
      description:
        "Un grupo de buceadores verá cómo su vida corre peligro dentro de un profundo sistema de cuevas.",
      description_large:
        "El film producido por James Cameron trata sobre un grupo de buceadores que, dirigidos por un padre y su hijo, verán cómo su vida corre peligro dentro de un sistema de cuevas a muchos metros de profundidad del mar.",
      short_description: null,
      image_large:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/SANCTUMJAMESCAMERONSSANCTUM/EXPORTACION_WEB/SS/SANCTUMJAMESCAMERONSSANCTUMWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/SANCTUMJAMESCAMERONSSANCTUM/EXPORTACION_WEB/SS/SANCTUMJAMESCAMERONSSANCTUMWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/SANCTUMJAMESCAMERONSSANCTUM/EXPORTACION_WEB/SS/SANCTUMJAMESCAMERONSSANCTUMWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/SANCTUMJAMESCAMERONSSANCTUM/EXPORTACION_WEB/STILLS/SANCTUMJAMESCAMERONSSANCTUM-STILL-01.jpg",
      image_background:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/SANCTUMJAMESCAMERONSSANCTUM/EXPORTACION_WEB/CLEAN/SANCTUMJAMESCAMERONSSANCTUM_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/SANCTUMJAMESCAMERONSSANCTUM/EXPORTACION_WEB/CLEAN/SANCTUMJAMESCAMERONSSANCTUMWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/SANCTUMJAMESCAMERONSSANCTUM/EXPORTACION_WEB/CLEAN/SANCTUMJAMESCAMERONSSANCTUMWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/SANCTUMJAMESCAMERONSSANCTUM/EXPORTACION_WEB/SS/SANCTUMJAMESCAMERONSSANCTUMWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/SANCTUMJAMESCAMERONSSANCTUM/EXPORTACION_WEB/SS/SANCTUMJAMESCAMERONSSANCTUMWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/SANCTUMJAMESCAMERONSSANCTUM/EXPORTACION_WEB/SS/SANCTUMJAMESCAMERONSSANCTUMWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/SANCTUMJAMESCAMERONSSANCTUM/EXPORTACION_WEB/CLEAN/SANCTUMJAMESCAMERONSSANCTUMWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/SANCTUMJAMESCAMERONSSANCTUM/EXPORTACION_WEB/CLEAN/SANCTUMJAMESCAMERONSSANCTUMWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/SANCTUMJAMESCAMERONSSANCTUM/EXPORTACION_WEB/CLEAN/SANCTUMJAMESCAMERONSSANCTUMWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/SANCTUMJAMESCAMERONSSANCTUM/EXPORTACION_WEB/SPRITES/SANCTUMJAMESCAMERONSSANCTUM-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/SANCTUMJAMESCAMERONSSANCTUM/EXPORTACION_WEB/SPRITES/SANCTUMJAMESCAMERONSSANCTUM-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:48:50",
      date: "19/02/2020",
      year: "2011",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "R",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "774220",
      title: "Perdóname Señor",
      title_episode: "Espuma de mar",
      title_uri: "Perdoname-Senor",
      title_original: "Perdóname Señor",
      description:
        "La hermana Lucía regresa a Barbate, el pueblo que la vio nacer.",
      description_large:
        "La hermana Lucía regresa a Barbate, el pueblo que la vio nacer, tras dos décadas de ausencia. Allí se reencuentra con la dura realidad cotidiana que afronta su familia. Su hermano Miguel atraviesa apuros económicos y su sobrino Rafa vende drogas.",
      short_description: null,
      image_large:
        "https://clarovideocdn8.clarovideo.net/SERIES/PERDNAMESEOR-01-01-00/EXPORTACION_WEB/SS/PERDNAMESEOR-01-01-00WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn6.clarovideo.net/SERIES/PERDNAMESEOR-01-01-00/EXPORTACION_WEB/SS/PERDNAMESEOR-01-01-00WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn8.clarovideo.net/SERIES/PERDNAMESEOR-01-01-00/EXPORTACION_WEB/SS/PERDNAMESEOR-01-01-00WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/PERDNAMESEOR-01-01-01/EXPORTACION_WEB/STILLS/PERDNAMESEOR-01-01-01-STILL-01.jpg",
      image_background:
        "https://clarovideocdn8.clarovideo.net/SERIES/PERDNAMESEOR-01-01-00/EXPORTACION_WEB/CLEAN/PERDNAMESEOR-01-01-00_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn9.clarovideo.net/SERIES/PERDNAMESEOR-01-01-00/EXPORTACION_WEB/CLEAN/PERDNAMESEOR-01-01-00WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn1.clarovideo.net/SERIES/PERDNAMESEOR-01-01-00/EXPORTACION_WEB/CLEAN/PERDNAMESEOR-01-01-00WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn5.clarovideo.net/SERIES/PERDNAMESEOR-01-01-00/EXPORTACION_WEB/SS/PERDNAMESEOR-01-01-00WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn3.clarovideo.net/SERIES/PERDNAMESEOR-01-01-00/EXPORTACION_WEB/SS/PERDNAMESEOR-01-01-00WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn3.clarovideo.net/SERIES/PERDNAMESEOR-01-01-00/EXPORTACION_WEB/SS/PERDNAMESEOR-01-01-00WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn8.clarovideo.net/SERIES/PERDNAMESEOR-01-01-00/EXPORTACION_WEB/CLEAN/PERDNAMESEOR-01-01-00WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn6.clarovideo.net/SERIES/PERDNAMESEOR-01-01-00/EXPORTACION_WEB/CLEAN/PERDNAMESEOR-01-01-00WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn6.clarovideo.net/SERIES/PERDNAMESEOR-01-01-00/EXPORTACION_WEB/CLEAN/PERDNAMESEOR-01-01-00WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/PERDNAMESEOR-01-01-01/EXPORTACION_WEB/SPRITES/PERDNAMESEOR-01-01-01-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/PERDNAMESEOR-01-01-01/EXPORTACION_WEB/SPRITES/PERDNAMESEOR-01-01-01-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:12:38",
      date: "04/10/2018",
      year: "2017",
      preview: "true",
      season_number: "1",
      episode_number: "1",
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "R",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: true,
      channel_number: null,
    },
    {
      id: "773718",
      title: "El padre de Caín",
      title_episode: "La tortuga y el águila",
      title_uri: "El-padre-de-Cain",
      title_original: "padre de Caín, El",
      description:
        "Eloy es un teniente de la Guardia Civil cuya obsesión es la lucha antiterrorista.",
      description_large:
        "Eloy es el protagonista de esta historia, un teniente de la Guardia Civil cuya obsesión es la lucha antiterrorista. Demócrata y aventurero, escogerá como primer destino voluntario el cuartel de Intxaurrondo en una agitada San Sebastián.",
      short_description: null,
      image_large:
        "https://clarovideocdn8.clarovideo.net/SERIES/PADREDECANEL-01-01-00/EXPORTACION_WEB/SS/PADREDECANEL-01-01-00WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn6.clarovideo.net/SERIES/PADREDECANEL-01-01-00/EXPORTACION_WEB/SS/PADREDECANEL-01-01-00WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn8.clarovideo.net/SERIES/PADREDECANEL-01-01-00/EXPORTACION_WEB/SS/PADREDECANEL-01-01-00WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/PADREDECANEL-01-01-01/EXPORTACION_WEB/STILLS/PADREDECANEL-01-01-01-STILL-01.jpg",
      image_background:
        "https://clarovideocdn8.clarovideo.net/SERIES/PADREDECANEL-01-01-00/EXPORTACION_WEB/CLEAN/PADREDECANEL-01-01-00_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn9.clarovideo.net/SERIES/PADREDECANEL-01-01-00/EXPORTACION_WEB/CLEAN/PADREDECANEL-01-01-00WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn1.clarovideo.net/SERIES/PADREDECANEL-01-01-00/EXPORTACION_WEB/CLEAN/PADREDECANEL-01-01-00WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn5.clarovideo.net/SERIES/PADREDECANEL-01-01-00/EXPORTACION_WEB/SS/PADREDECANEL-01-01-00WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn3.clarovideo.net/SERIES/PADREDECANEL-01-01-00/EXPORTACION_WEB/SS/PADREDECANEL-01-01-00WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn3.clarovideo.net/SERIES/PADREDECANEL-01-01-00/EXPORTACION_WEB/SS/PADREDECANEL-01-01-00WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn8.clarovideo.net/SERIES/PADREDECANEL-01-01-00/EXPORTACION_WEB/CLEAN/PADREDECANEL-01-01-00WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn6.clarovideo.net/SERIES/PADREDECANEL-01-01-00/EXPORTACION_WEB/CLEAN/PADREDECANEL-01-01-00WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn6.clarovideo.net/SERIES/PADREDECANEL-01-01-00/EXPORTACION_WEB/CLEAN/PADREDECANEL-01-01-00WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/PADREDECANEL-01-01-01/EXPORTACION_WEB/SPRITES/PADREDECANEL-01-01-01-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/PADREDECANEL-01-01-01/EXPORTACION_WEB/SPRITES/PADREDECANEL-01-01-01-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:16:57",
      date: "28/07/2018",
      year: "2016",
      preview: "false",
      season_number: "1",
      episode_number: "1",
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "R",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: true,
      channel_number: null,
    },
    {
      id: "773003",
      title: "La princesa y el dragón",
      title_episode: null,
      title_uri: "La-princesa-y-el-dragon",
      title_original: "Fire & Ice: The Dragon Chronicles",
      description:
        "La serenidad de un reino se ve amenazada por un dragón que destruye aldeas inocentes.",
      description_large:
        "Gobernado por el Rey Augustin, Carpia es un reino pacífico en un mundo habitado por dragones y caballeros. Pero la serenidad de la tierra se ve amenazada inesperadamente por un dragón de fuego que propaga el miedo.",
      short_description: null,
      image_large:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/FIREICETHEDRAGONCHRONICLES/EXPORTACION_WEB/SS/FIREICETHEDRAGONCHRONICLESWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/FIREICETHEDRAGONCHRONICLES/EXPORTACION_WEB/SS/FIREICETHEDRAGONCHRONICLESWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/FIREICETHEDRAGONCHRONICLES/EXPORTACION_WEB/SS/FIREICETHEDRAGONCHRONICLESWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/FIREICETHEDRAGONCHRONICLES/EXPORTACION_WEB/STILLS/FIREICETHEDRAGONCHRONICLES-STILL-01.jpg",
      image_background:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/FIREICETHEDRAGONCHRONICLES/EXPORTACION_WEB/CLEAN/FIREICETHEDRAGONCHRONICLES_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/FIREICETHEDRAGONCHRONICLES/EXPORTACION_WEB/CLEAN/FIREICETHEDRAGONCHRONICLESWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/FIREICETHEDRAGONCHRONICLES/EXPORTACION_WEB/CLEAN/FIREICETHEDRAGONCHRONICLESWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/FIREICETHEDRAGONCHRONICLES/EXPORTACION_WEB/SS/FIREICETHEDRAGONCHRONICLESWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/FIREICETHEDRAGONCHRONICLES/EXPORTACION_WEB/SS/FIREICETHEDRAGONCHRONICLESWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/FIREICETHEDRAGONCHRONICLES/EXPORTACION_WEB/SS/FIREICETHEDRAGONCHRONICLESWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/FIREICETHEDRAGONCHRONICLES/EXPORTACION_WEB/CLEAN/FIREICETHEDRAGONCHRONICLESWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/FIREICETHEDRAGONCHRONICLES/EXPORTACION_WEB/CLEAN/FIREICETHEDRAGONCHRONICLESWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/FIREICETHEDRAGONCHRONICLES/EXPORTACION_WEB/CLEAN/FIREICETHEDRAGONCHRONICLESWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/FIREICETHEDRAGONCHRONICLES/EXPORTACION_WEB/SPRITES/FIREICETHEDRAGONCHRONICLES-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/FIREICETHEDRAGONCHRONICLES/EXPORTACION_WEB/SPRITES/FIREICETHEDRAGONCHRONICLES-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:25:48",
      date: "20200129140139",
      year: "2008",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG-13",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "772775",
      title: "El final del camino",
      title_episode: "Episodio 1",
      title_uri: "El-final-del-camino",
      title_original: "Final del camino, El",
      description:
        "Un ataque sarraceno asola Catoira. Gonzalo consigue salvar a su hermano Esteban.",
      description_large:
        "Galicia, 1075 D.C. Un ataque sarraceno asola Catoira. Gonzalo consigue salvar a su hermano Esteban, pero no puede impedir el asesinato de su madre ni el secuestro de su hermano Pedro por guerreros musulmanes.",
      short_description: null,
      image_large:
        "https://clarovideocdn6.clarovideo.net/SERIES/FINALDELCAMINOEL-01-01-00/EXPORTACION_WEB/SS/FINALDELCAMINOEL-01-01-00WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn4.clarovideo.net/SERIES/FINALDELCAMINOEL-01-01-00/EXPORTACION_WEB/SS/FINALDELCAMINOEL-01-01-00WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn6.clarovideo.net/SERIES/FINALDELCAMINOEL-01-01-00/EXPORTACION_WEB/SS/FINALDELCAMINOEL-01-01-00WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/FINALDELCAMINOEL-01-01-01/EXPORTACION_WEB/STILLS/FINALDELCAMINOEL-01-01-01-STILL-01.jpg",
      image_background:
        "https://clarovideocdn6.clarovideo.net/SERIES/FINALDELCAMINOEL-01-01-00/EXPORTACION_WEB/CLEAN/FINALDELCAMINOEL-01-01-00_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn7.clarovideo.net/SERIES/FINALDELCAMINOEL-01-01-00/EXPORTACION_WEB/CLEAN/FINALDELCAMINOEL-01-01-00WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn9.clarovideo.net/SERIES/FINALDELCAMINOEL-01-01-00/EXPORTACION_WEB/CLEAN/FINALDELCAMINOEL-01-01-00WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn3.clarovideo.net/SERIES/FINALDELCAMINOEL-01-01-00/EXPORTACION_WEB/SS/FINALDELCAMINOEL-01-01-00WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn1.clarovideo.net/SERIES/FINALDELCAMINOEL-01-01-00/EXPORTACION_WEB/SS/FINALDELCAMINOEL-01-01-00WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn1.clarovideo.net/SERIES/FINALDELCAMINOEL-01-01-00/EXPORTACION_WEB/SS/FINALDELCAMINOEL-01-01-00WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn6.clarovideo.net/SERIES/FINALDELCAMINOEL-01-01-00/EXPORTACION_WEB/CLEAN/FINALDELCAMINOEL-01-01-00WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn4.clarovideo.net/SERIES/FINALDELCAMINOEL-01-01-00/EXPORTACION_WEB/CLEAN/FINALDELCAMINOEL-01-01-00WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn4.clarovideo.net/SERIES/FINALDELCAMINOEL-01-01-00/EXPORTACION_WEB/CLEAN/FINALDELCAMINOEL-01-01-00WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/FINALDELCAMINOEL-01-01-01/EXPORTACION_WEB/SPRITES/FINALDELCAMINOEL-01-01-01-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/FINALDELCAMINOEL-01-01-01/EXPORTACION_WEB/SPRITES/FINALDELCAMINOEL-01-01-01-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:17:31",
      date: "03/09/2018",
      year: "2017",
      preview: "true",
      season_number: "1",
      episode_number: "1",
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG-13",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: true,
      channel_number: null,
    },
    {
      id: "771805",
      title: "Bro': Alto riesgo",
      title_episode: null,
      title_uri: "Bro-Alto-riesgo",
      title_original: "Bro'",
      description:
        "Un estudiante universitario se mezcla en el ambiente del motocross estilo libre y termina mal.",
      description_large:
        "Johnny, un joven estudiante universitario suburbano, conoce a Jesse en un evento de motocross estilo libre y comienza a participar del estilo de vida alocado que ofrece ese mundillo. Pero pronto termina en prisión.",
      short_description: null,
      image_large:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/BRO/EXPORTACION_WEB/SS/BROWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/BRO/EXPORTACION_WEB/SS/BROWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/BRO/EXPORTACION_WEB/SS/BROWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/BRO/EXPORTACION_WEB/STILLS/BRO-STILL-01.jpg",
      image_background:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/BRO/EXPORTACION_WEB/CLEAN/BRO_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/BRO/EXPORTACION_WEB/CLEAN/BROWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/BRO/EXPORTACION_WEB/CLEAN/BROWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/BRO/EXPORTACION_WEB/SS/BROWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/BRO/EXPORTACION_WEB/SS/BROWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/BRO/EXPORTACION_WEB/SS/BROWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/BRO/EXPORTACION_WEB/CLEAN/BROWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/BRO/EXPORTACION_WEB/CLEAN/BROWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/BRO/EXPORTACION_WEB/CLEAN/BROWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/BRO/EXPORTACION_WEB/SPRITES/BRO-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/BRO/EXPORTACION_WEB/SPRITES/BRO-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:29:13",
      date: "07/07/2018",
      year: "2012",
      preview: "true",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "R",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "771313",
      title: "Los simuladores",
      title_episode: "Segunda oportunidad",
      title_uri: "Los-simuladores",
      title_original: "Simuladores, Los (México)",
      description:
        "'Los simuladores' ayudan a una mujer a obtener un precio justo.",
      description_large:
        "'Los simuladores' ayudan a una mujer que compra un departamento para que el vendedor se lo venda por un precio justo. Luego, un pintor quiere recuperar a su esposa que lo ha abandonado mediante un asalto fingido y otros mecanismos.",
      short_description: null,
      image_large:
        "https://clarovideocdn2.clarovideo.net/SERIES/SIMULADORESLOSMXICO-02-02-00/EXPORTACION_WEB/SS/SIMULADORESLOSMXICO-02-02-00WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn0.clarovideo.net/SERIES/SIMULADORESLOSMXICO-02-02-00/EXPORTACION_WEB/SS/SIMULADORESLOSMXICO-02-02-00WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn2.clarovideo.net/SERIES/SIMULADORESLOSMXICO-02-02-00/EXPORTACION_WEB/SS/SIMULADORESLOSMXICO-02-02-00WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/SIMULADORESLOSMXICO-01-01-01/EXPORTACION_WEB/STILLS/SIMULADORESLOSMXICO-01-01-01-STILL-01.jpg",
      image_background:
        "https://clarovideocdn2.clarovideo.net/SERIES/SIMULADORESLOSMXICO-02-02-00/EXPORTACION_WEB/CLEAN/SIMULADORESLOSMXICO-02-02-00_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn3.clarovideo.net/SERIES/SIMULADORESLOSMXICO-02-02-00/EXPORTACION_WEB/CLEAN/SIMULADORESLOSMXICO-02-02-00WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn5.clarovideo.net/SERIES/SIMULADORESLOSMXICO-02-02-00/EXPORTACION_WEB/CLEAN/SIMULADORESLOSMXICO-02-02-00WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn9.clarovideo.net/SERIES/SIMULADORESLOSMXICO-02-02-00/EXPORTACION_WEB/SS/SIMULADORESLOSMXICO-02-02-00WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn7.clarovideo.net/SERIES/SIMULADORESLOSMXICO-02-02-00/EXPORTACION_WEB/SS/SIMULADORESLOSMXICO-02-02-00WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn7.clarovideo.net/SERIES/SIMULADORESLOSMXICO-02-02-00/EXPORTACION_WEB/SS/SIMULADORESLOSMXICO-02-02-00WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn2.clarovideo.net/SERIES/SIMULADORESLOSMXICO-02-02-00/EXPORTACION_WEB/CLEAN/SIMULADORESLOSMXICO-02-02-00WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn0.clarovideo.net/SERIES/SIMULADORESLOSMXICO-02-02-00/EXPORTACION_WEB/CLEAN/SIMULADORESLOSMXICO-02-02-00WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn0.clarovideo.net/SERIES/SIMULADORESLOSMXICO-02-02-00/EXPORTACION_WEB/CLEAN/SIMULADORESLOSMXICO-02-02-00WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/SIMULADORESLOSMXICO-01-01-01/EXPORTACION_WEB/SPRITES/SIMULADORESLOSMXICO-01-01-01-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/SIMULADORESLOSMXICO-01-01-01/EXPORTACION_WEB/SPRITES/SIMULADORESLOSMXICO-01-01-01-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "00:41:22",
      date: "20181227163007",
      year: "2008",
      preview: "false",
      season_number: "1",
      episode_number: "1",
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "R",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: true,
      channel_number: null,
    },
    {
      id: "770715",
      title: "Furia",
      title_episode: null,
      title_uri: "Furia",
      title_original: "Stark Raving Mad",
      description:
        "Un ladrón trama una venganza contra el asesino de su hermano mientras trabajaba para él.",
      description_large:
        "Ben tiene una pesada deuda con un jefe mafioso, responsable de la muerte de su hermano. Para salvar su vida y vengar el asesinato, Ben organiza una enorme fiesta junto a un banco que planea robar.",
      short_description: null,
      image_large:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/STARKRAVINGMAD/EXPORTACION_WEB/SS/STARKRAVINGMADWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/STARKRAVINGMAD/EXPORTACION_WEB/SS/STARKRAVINGMADWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/STARKRAVINGMAD/EXPORTACION_WEB/SS/STARKRAVINGMADWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/STARKRAVINGMAD/EXPORTACION_WEB/STILLS/STARKRAVINGMAD-STILL-01.jpg",
      image_background:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/STARKRAVINGMAD/EXPORTACION_WEB/CLEAN/STARKRAVINGMAD_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/STARKRAVINGMAD/EXPORTACION_WEB/CLEAN/STARKRAVINGMADWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/STARKRAVINGMAD/EXPORTACION_WEB/CLEAN/STARKRAVINGMADWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/STARKRAVINGMAD/EXPORTACION_WEB/SS/STARKRAVINGMADWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/STARKRAVINGMAD/EXPORTACION_WEB/SS/STARKRAVINGMADWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/STARKRAVINGMAD/EXPORTACION_WEB/SS/STARKRAVINGMADWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/STARKRAVINGMAD/EXPORTACION_WEB/CLEAN/STARKRAVINGMADWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/STARKRAVINGMAD/EXPORTACION_WEB/CLEAN/STARKRAVINGMADWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn5.clarovideo.net/PELICULAS/STARKRAVINGMAD/EXPORTACION_WEB/CLEAN/STARKRAVINGMADWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/STARKRAVINGMAD/EXPORTACION_WEB/SPRITES/STARKRAVINGMAD-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/STARKRAVINGMAD/EXPORTACION_WEB/SPRITES/STARKRAVINGMAD-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:40:57",
      date: "26/05/2018",
      year: "2002",
      preview: "true",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "R",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "770691",
      title: "La Leyenda de las puertas del infierno",
      title_episode: null,
      title_uri: "La-Leyenda-de-las-puertas-del-infierno",
      title_original: "Legend of Hell's Gate, The: An American Conspiracy",
      description:
        "Cuento texano que aborda el misterio de la llamada Puerta del Infierno.",
      description_large:
        "Texas, 1870. Un cazador de recompensas y un irlandés escapan de la ley junto con un joven que dice tener un tesoro valioso. En el camino, encuentran a los criminales más buscados del viejo oeste y luchan por sus vidas en busca de fama y fortuna.",
      short_description: null,
      image_large:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY/EXPORTACION_WEB/SS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACYWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY/EXPORTACION_WEB/SS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACYWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY/EXPORTACION_WEB/SS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACYWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY/EXPORTACION_WEB/STILLS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY-STILL-01.jpg",
      image_background:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY/EXPORTACION_WEB/CLEAN/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY/EXPORTACION_WEB/CLEAN/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACYWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY/EXPORTACION_WEB/CLEAN/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACYWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY/EXPORTACION_WEB/SS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACYWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY/EXPORTACION_WEB/SS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACYWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY/EXPORTACION_WEB/SS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACYWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY/EXPORTACION_WEB/CLEAN/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACYWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY/EXPORTACION_WEB/CLEAN/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACYWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY/EXPORTACION_WEB/CLEAN/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACYWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY/EXPORTACION_WEB/SPRITES/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY/EXPORTACION_WEB/SPRITES/LEGENDOFHELLSGATETHEANAMERICANCONSPIRACY-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:46:15",
      date: "13/09/2018",
      year: "2011",
      preview: "true",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG-13",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "770478",
      title: "Drake & Josh",
      title_episode: "Drake y Josh",
      title_uri: "Drake-Josh",
      title_original: "Drake & Josh",
      description:
        "Drake y Josh se convierten en hermanos cuando sus padres se casan.",
      description_large:
        "Drake y Josh se convierten en hermanos cuando sus padres se casan. Drake descubre a Josh utilizando un vestido y éste le revela que se hace pasar por la Sra. Nancy, un personaje que escribe en el periódico del colegio.",
      short_description: null,
      image_large:
        "https://clarovideocdn2.clarovideo.net/SERIES/DRAKEJOSH-04-04-00/EXPORTACION_WEB/SS/DRAKEJOSH-04-04-00WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn0.clarovideo.net/SERIES/DRAKEJOSH-04-04-00/EXPORTACION_WEB/SS/DRAKEJOSH-04-04-00WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn2.clarovideo.net/SERIES/DRAKEJOSH-04-04-00/EXPORTACION_WEB/SS/DRAKEJOSH-04-04-00WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/DRAKEJOSH-01-01-01/EXPORTACION_WEB/STILLS/DRAKEJOSH-01-01-01-STILL-01.jpg",
      image_background:
        "https://clarovideocdn2.clarovideo.net/SERIES/DRAKEJOSH-04-04-00/EXPORTACION_WEB/CLEAN/DRAKEJOSH-04-04-00_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn3.clarovideo.net/SERIES/DRAKEJOSH-04-04-00/EXPORTACION_WEB/CLEAN/DRAKEJOSH-04-04-00WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn5.clarovideo.net/SERIES/DRAKEJOSH-04-04-00/EXPORTACION_WEB/CLEAN/DRAKEJOSH-04-04-00WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn9.clarovideo.net/SERIES/DRAKEJOSH-04-04-00/EXPORTACION_WEB/SS/DRAKEJOSH-04-04-00WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn7.clarovideo.net/SERIES/DRAKEJOSH-04-04-00/EXPORTACION_WEB/SS/DRAKEJOSH-04-04-00WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn7.clarovideo.net/SERIES/DRAKEJOSH-04-04-00/EXPORTACION_WEB/SS/DRAKEJOSH-04-04-00WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn2.clarovideo.net/SERIES/DRAKEJOSH-04-04-00/EXPORTACION_WEB/CLEAN/DRAKEJOSH-04-04-00WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn0.clarovideo.net/SERIES/DRAKEJOSH-04-04-00/EXPORTACION_WEB/CLEAN/DRAKEJOSH-04-04-00WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn0.clarovideo.net/SERIES/DRAKEJOSH-04-04-00/EXPORTACION_WEB/CLEAN/DRAKEJOSH-04-04-00WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/DRAKEJOSH-01-01-01/EXPORTACION_WEB/SPRITES/DRAKEJOSH-01-01-01-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/DRAKEJOSH-01-01-01/EXPORTACION_WEB/SPRITES/DRAKEJOSH-01-01-01-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "00:24:26",
      date: "20200227145647",
      year: "2004",
      preview: "false",
      season_number: "1",
      episode_number: "1",
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "G",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: true,
      channel_number: null,
    },
    {
      id: "770254",
      title: "Sam y Cat",
      title_episode: "#Piloto",
      title_uri: "Sam-y-Cat",
      title_original: "Sam & Cat",
      description:
        "Sam y Cat se conocen cuando un salvaje dilema las hace aterrizar en un camión de basura.",
      description_large:
        "Sam y Cat se conocen cuando un salvaje dilema las hace aterrizar en un camión de basura. Después de volverse amigas y compañeras rápidamente, ellas cuidarán a 3 niños, lo que les dará una idea: iniciar su propio servicio de guardería.",
      short_description: null,
      image_large:
        "https://clarovideocdn6.clarovideo.net/SERIES/SAMCAT-01-01-00/EXPORTACION_WEB/SS/SAMCAT-01-01-00WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn4.clarovideo.net/SERIES/SAMCAT-01-01-00/EXPORTACION_WEB/SS/SAMCAT-01-01-00WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn6.clarovideo.net/SERIES/SAMCAT-01-01-00/EXPORTACION_WEB/SS/SAMCAT-01-01-00WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/SAMCAT-01-01-01/EXPORTACION_WEB/STILLS/SAMCAT-01-01-01-STILL-01.jpg",
      image_background:
        "https://clarovideocdn6.clarovideo.net/SERIES/SAMCAT-01-01-00/EXPORTACION_WEB/CLEAN/SAMCAT-01-01-00_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn7.clarovideo.net/SERIES/SAMCAT-01-01-00/EXPORTACION_WEB/CLEAN/SAMCAT-01-01-00WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn9.clarovideo.net/SERIES/SAMCAT-01-01-00/EXPORTACION_WEB/CLEAN/SAMCAT-01-01-00WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn3.clarovideo.net/SERIES/SAMCAT-01-01-00/EXPORTACION_WEB/SS/SAMCAT-01-01-00WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn1.clarovideo.net/SERIES/SAMCAT-01-01-00/EXPORTACION_WEB/SS/SAMCAT-01-01-00WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn1.clarovideo.net/SERIES/SAMCAT-01-01-00/EXPORTACION_WEB/SS/SAMCAT-01-01-00WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn6.clarovideo.net/SERIES/SAMCAT-01-01-00/EXPORTACION_WEB/CLEAN/SAMCAT-01-01-00WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn4.clarovideo.net/SERIES/SAMCAT-01-01-00/EXPORTACION_WEB/CLEAN/SAMCAT-01-01-00WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn4.clarovideo.net/SERIES/SAMCAT-01-01-00/EXPORTACION_WEB/CLEAN/SAMCAT-01-01-00WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/SAMCAT-01-01-01/EXPORTACION_WEB/SPRITES/SAMCAT-01-01-01-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/SAMCAT-01-01-01/EXPORTACION_WEB/SPRITES/SAMCAT-01-01-01-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "00:23:16",
      date: "20200128181001",
      year: "2014",
      preview: "true",
      season_number: "1",
      episode_number: "1",
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "G",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: true,
      channel_number: null,
    },
    {
      id: "770265",
      title: "Descendientes 2",
      title_episode: null,
      title_uri: "Descendientes-2",
      title_original: "Descendants 2",
      description:
        "Mal, Evie, Carlos y Jay continúan la búsqueda para descubrir su verdadero yo.",
      description_large:
        "En 'Descendientes 2' sumérgete en una aventura de acción épica que explora el siguiente capítulo de la búsqueda de Mal, Evie, Carlos y Jay para descubrir su verdadero yo. Después de salvar a Auradon, el 'felices para siempre' no es tan fácil.",
      short_description: null,
      image_large:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/DESCENDANTS2/EXPORTACION_WEB/SS/DESCENDANTS2WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/DESCENDANTS2/EXPORTACION_WEB/SS/DESCENDANTS2WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/DESCENDANTS2/EXPORTACION_WEB/SS/DESCENDANTS2WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/DESCENDANTS2/EXPORTACION_WEB/STILLS/DESCENDANTS2-STILL-01.jpg",
      image_background:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/DESCENDANTS2/EXPORTACION_WEB/CLEAN/DESCENDANTS2_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/DESCENDANTS2/EXPORTACION_WEB/CLEAN/DESCENDANTS2WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/DESCENDANTS2/EXPORTACION_WEB/CLEAN/DESCENDANTS2WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/DESCENDANTS2/EXPORTACION_WEB/SS/DESCENDANTS2WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/DESCENDANTS2/EXPORTACION_WEB/SS/DESCENDANTS2WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/DESCENDANTS2/EXPORTACION_WEB/SS/DESCENDANTS2WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn3.clarovideo.net/PELICULAS/DESCENDANTS2/EXPORTACION_WEB/CLEAN/DESCENDANTS2WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/DESCENDANTS2/EXPORTACION_WEB/CLEAN/DESCENDANTS2WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/DESCENDANTS2/EXPORTACION_WEB/CLEAN/DESCENDANTS2WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/DESCENDANTS2/EXPORTACION_WEB/SPRITES/DESCENDANTS2-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/DESCENDANTS2/EXPORTACION_WEB/SPRITES/DESCENDANTS2-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:51:53",
      date: "12/09/2019",
      year: "2017",
      preview: "true",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "769234",
      title: "Paradas continuas",
      title_episode: null,
      title_uri: "Paradas-continuas",
      title_original: "Paradas continuas",
      description:
        "Perico y Emilio no tienen donde llevar a sus novias para desatar sus más bajas pasiones.",
      description_large:
        "Perico y Emilio no tienen donde llevar a sus novias para desatar sus más bajas pasiones y encuentran la solución en la combi del papá de Perico. Además de resolver su problema personal, esto se puede convertir en el negocio de su vida.",
      short_description: null,
      image_large:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/PARADASCONTINUAS/EXPORTACION_WEB/SS/PARADASCONTINUASWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/PARADASCONTINUAS/EXPORTACION_WEB/SS/PARADASCONTINUASWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/PARADASCONTINUAS/EXPORTACION_WEB/SS/PARADASCONTINUASWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/PARADASCONTINUAS/EXPORTACION_WEB/STILLS/PARADASCONTINUAS-STILL-01.jpg",
      image_background:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/PARADASCONTINUAS/EXPORTACION_WEB/CLEAN/PARADASCONTINUAS_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/PARADASCONTINUAS/EXPORTACION_WEB/CLEAN/PARADASCONTINUASWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/PARADASCONTINUAS/EXPORTACION_WEB/CLEAN/PARADASCONTINUASWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/PARADASCONTINUAS/EXPORTACION_WEB/SS/PARADASCONTINUASWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/PARADASCONTINUAS/EXPORTACION_WEB/SS/PARADASCONTINUASWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/PARADASCONTINUAS/EXPORTACION_WEB/SS/PARADASCONTINUASWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn1.clarovideo.net/PELICULAS/PARADASCONTINUAS/EXPORTACION_WEB/CLEAN/PARADASCONTINUASWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/PARADASCONTINUAS/EXPORTACION_WEB/CLEAN/PARADASCONTINUASWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/PARADASCONTINUAS/EXPORTACION_WEB/CLEAN/PARADASCONTINUASWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/PARADASCONTINUAS/EXPORTACION_WEB/SPRITES/PARADASCONTINUAS-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/PARADASCONTINUAS/EXPORTACION_WEB/SPRITES/PARADASCONTINUAS-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:50:20",
      date: "21/08/2019",
      year: "2009",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG-13",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "768906",
      title: "Blue Demon",
      title_episode: "Episodio 1",
      title_uri: "Blue-Demon",
      title_original: "Blue Demon",
      description:
        "Alejandro, con su uniforme de Blue Demon, se enfrenta con el actual campeón, Ala Dorada.",
      description_large:
        "Alejandro, con su uniforme de Blue Demon, se enfrenta con el actual campeón, Ala Dorada, a pesar de los consejos de Goyita y Guillén, quienes le ruegan que desista. De vuelta a su infancia, recordamos cómo el campeón llegó a la ciudad.",
      short_description: null,
      image_large:
        "https://clarovideocdn2.clarovideo.net/SERIES/BLUEDEMON-01-01-00/EXPORTACION_WEB/SS/BLUEDEMON-01-01-00WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn0.clarovideo.net/SERIES/BLUEDEMON-01-01-00/EXPORTACION_WEB/SS/BLUEDEMON-01-01-00WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn2.clarovideo.net/SERIES/BLUEDEMON-01-01-00/EXPORTACION_WEB/SS/BLUEDEMON-01-01-00WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/BLUEDEMON-01-01-01/EXPORTACION_WEB/STILLS/BLUEDEMON-01-01-01-STILL-01.jpg",
      image_background:
        "https://clarovideocdn2.clarovideo.net/SERIES/BLUEDEMON-01-01-00/EXPORTACION_WEB/CLEAN/BLUEDEMON-01-01-00_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn3.clarovideo.net/SERIES/BLUEDEMON-01-01-00/EXPORTACION_WEB/CLEAN/BLUEDEMON-01-01-00WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn5.clarovideo.net/SERIES/BLUEDEMON-01-01-00/EXPORTACION_WEB/CLEAN/BLUEDEMON-01-01-00WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn9.clarovideo.net/SERIES/BLUEDEMON-01-01-00/EXPORTACION_WEB/SS/BLUEDEMON-01-01-00WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn7.clarovideo.net/SERIES/BLUEDEMON-01-01-00/EXPORTACION_WEB/SS/BLUEDEMON-01-01-00WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn7.clarovideo.net/SERIES/BLUEDEMON-01-01-00/EXPORTACION_WEB/SS/BLUEDEMON-01-01-00WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn2.clarovideo.net/SERIES/BLUEDEMON-01-01-00/EXPORTACION_WEB/CLEAN/BLUEDEMON-01-01-00WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn0.clarovideo.net/SERIES/BLUEDEMON-01-01-00/EXPORTACION_WEB/CLEAN/BLUEDEMON-01-01-00WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn0.clarovideo.net/SERIES/BLUEDEMON-01-01-00/EXPORTACION_WEB/CLEAN/BLUEDEMON-01-01-00WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/BLUEDEMON-01-01-01/EXPORTACION_WEB/SPRITES/BLUEDEMON-01-01-01-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/BLUEDEMON-01-01-01/EXPORTACION_WEB/SPRITES/BLUEDEMON-01-01-01-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "00:41:34",
      date: "26/04/2020",
      year: "2016",
      preview: "false",
      season_number: "1",
      episode_number: "1",
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG-13",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: true,
      channel_number: null,
    },
    {
      id: "768158",
      title: "XIII",
      title_episode: "Chip de memoria",
      title_uri: "XIII",
      title_original: "XIII - The Series",
      description:
        "Tras haber sido encerrado injustamente dos años XIII se aventura en un escape atrevido.",
      description_large:
        "Tras haber sido encerrado injustamente dos años en un cruel campo de prisioneros, XIII se aventura en un escape atrevido con aliados misteriosos. Estos aliados resultan ser el expresidente Sheridan y una asesina psicótica.",
      short_description: null,
      image_large:
        "https://clarovideocdn0.clarovideo.net/SERIES/XIIITHESERIES-02-02-00/EXPORTACION_WEB/SS/XIIITHESERIES-02-02-00WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn8.clarovideo.net/SERIES/XIIITHESERIES-02-02-00/EXPORTACION_WEB/SS/XIIITHESERIES-02-02-00WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn0.clarovideo.net/SERIES/XIIITHESERIES-02-02-00/EXPORTACION_WEB/SS/XIIITHESERIES-02-02-00WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/XIIITHESERIES-01-01-01/EXPORTACION_WEB/STILLS/XIIITHESERIES-01-01-01-STILL-01.jpg",
      image_background:
        "https://clarovideocdn0.clarovideo.net/SERIES/XIIITHESERIES-02-02-00/EXPORTACION_WEB/CLEAN/XIIITHESERIES-02-02-00_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn1.clarovideo.net/SERIES/XIIITHESERIES-02-02-00/EXPORTACION_WEB/CLEAN/XIIITHESERIES-02-02-00WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn3.clarovideo.net/SERIES/XIIITHESERIES-02-02-00/EXPORTACION_WEB/CLEAN/XIIITHESERIES-02-02-00WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn7.clarovideo.net/SERIES/XIIITHESERIES-02-02-00/EXPORTACION_WEB/SS/XIIITHESERIES-02-02-00WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn5.clarovideo.net/SERIES/XIIITHESERIES-02-02-00/EXPORTACION_WEB/SS/XIIITHESERIES-02-02-00WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn5.clarovideo.net/SERIES/XIIITHESERIES-02-02-00/EXPORTACION_WEB/SS/XIIITHESERIES-02-02-00WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn0.clarovideo.net/SERIES/XIIITHESERIES-02-02-00/EXPORTACION_WEB/CLEAN/XIIITHESERIES-02-02-00WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn8.clarovideo.net/SERIES/XIIITHESERIES-02-02-00/EXPORTACION_WEB/CLEAN/XIIITHESERIES-02-02-00WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn8.clarovideo.net/SERIES/XIIITHESERIES-02-02-00/EXPORTACION_WEB/CLEAN/XIIITHESERIES-02-02-00WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/XIIITHESERIES-01-01-01/EXPORTACION_WEB/SPRITES/XIIITHESERIES-01-01-01-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/XIIITHESERIES-01-01-01/EXPORTACION_WEB/SPRITES/XIIITHESERIES-01-01-01-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "00:45:19",
      date: "20200315160538",
      year: "2011",
      preview: "true",
      season_number: "1",
      episode_number: "1",
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "R",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: true,
      channel_number: null,
    },
    {
      id: "763825",
      title: "Invierno profundo",
      title_episode: null,
      title_uri: "Invierno-profundo",
      title_original: "Deep Winter",
      description:
        "Dos amigos ponen su mirada en Alaska y reclutan a un veterano guía para hacer historia.",
      description_large:
        "Dos amigos ponen su mirada en Alaska y reclutan a un veterano guía con la esperanza de hacer historia. Pero este descenso podría ser el último. Cuando comience la avalancha su única esperanza será seguir bajando la montaña y no mirar hacia atrás.",
      short_description: null,
      image_large:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/DEEPWINTER/EXPORTACION_WEB/SS/DEEPWINTERWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/DEEPWINTER/EXPORTACION_WEB/SS/DEEPWINTERWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/DEEPWINTER/EXPORTACION_WEB/SS/DEEPWINTERWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/DEEPWINTER/EXPORTACION_WEB/STILLS/DEEPWINTER-STILL-01.jpg",
      image_background:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/DEEPWINTER/EXPORTACION_WEB/CLEAN/DEEPWINTER_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/DEEPWINTER/EXPORTACION_WEB/CLEAN/DEEPWINTERWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/DEEPWINTER/EXPORTACION_WEB/CLEAN/DEEPWINTERWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/DEEPWINTER/EXPORTACION_WEB/SS/DEEPWINTERWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/DEEPWINTER/EXPORTACION_WEB/SS/DEEPWINTERWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/DEEPWINTER/EXPORTACION_WEB/SS/DEEPWINTERWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/DEEPWINTER/EXPORTACION_WEB/CLEAN/DEEPWINTERWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/DEEPWINTER/EXPORTACION_WEB/CLEAN/DEEPWINTERWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/DEEPWINTER/EXPORTACION_WEB/CLEAN/DEEPWINTERWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/DEEPWINTER/EXPORTACION_WEB/SPRITES/DEEPWINTER-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/DEEPWINTER/EXPORTACION_WEB/SPRITES/DEEPWINTER-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:36:03",
      date: "20191128162349",
      year: "2010",
      preview: "true",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "PG-13",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "761165",
      title: "Encuentro con el mal",
      title_episode: null,
      title_uri: "Encuentro-con-el-mal",
      title_original: "Meeting Evil (2012)",
      description:
        "Un desilusionado y joven padre se convierte en héroe para proteger a su familia.",
      description_large:
        "La vida de John, un desilusionado joven padre de familia, cambia cuando un misterioso desconocido, Richie, lo lleva a dar un paseo violento que transforma a John en un héroe desesperado dispuesto a hacer cualquier cosa para proteger a su familia.",
      short_description: null,
      image_large:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/MEETINGEVIL2012/EXPORTACION_WEB/SS/MEETINGEVIL2012WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/MEETINGEVIL2012/EXPORTACION_WEB/SS/MEETINGEVIL2012WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/MEETINGEVIL2012/EXPORTACION_WEB/SS/MEETINGEVIL2012WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/MEETINGEVIL2012/EXPORTACION_WEB/STILLS/MEETINGEVIL2012-STILL-01.jpg",
      image_background:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/MEETINGEVIL2012/EXPORTACION_WEB/CLEAN/MEETINGEVIL2012_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/MEETINGEVIL2012/EXPORTACION_WEB/CLEAN/MEETINGEVIL2012WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/MEETINGEVIL2012/EXPORTACION_WEB/CLEAN/MEETINGEVIL2012WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/MEETINGEVIL2012/EXPORTACION_WEB/SS/MEETINGEVIL2012WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/MEETINGEVIL2012/EXPORTACION_WEB/SS/MEETINGEVIL2012WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/MEETINGEVIL2012/EXPORTACION_WEB/SS/MEETINGEVIL2012WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/MEETINGEVIL2012/EXPORTACION_WEB/CLEAN/MEETINGEVIL2012WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/MEETINGEVIL2012/EXPORTACION_WEB/CLEAN/MEETINGEVIL2012WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/MEETINGEVIL2012/EXPORTACION_WEB/CLEAN/MEETINGEVIL2012WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/MEETINGEVIL2012/EXPORTACION_WEB/SPRITES/MEETINGEVIL2012-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/MEETINGEVIL2012/EXPORTACION_WEB/SPRITES/MEETINGEVIL2012-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:29:21",
      date: "20200313133130",
      year: "2012",
      preview: "false",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "R",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null,
    },
    {
      id: "760678",
      title: "SS",
      title_episode: "Episodio 1",
      title_uri: "SS",
      title_original: "SS-GB",
      description:
        "El detective Douglas Archer intenta hacer su trabajo durante la ocupación alemana de Londres.",
      description_large:
        "La segunda guerra mundial tiene al mundo en vilo y el nazismo se expande en Europa. El detective Douglas Archer debe adaptarse a la nueva situación y se encuentra trabajando para la SS en Londres, ocupada por los alemanes.",
      short_description: null,
      image_large:
        "https://clarovideocdn2.clarovideo.net/SERIES/SSGB-01-01-00/EXPORTACION_WEB/SS/SSGB-01-01-00WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn0.clarovideo.net/SERIES/SSGB-01-01-00/EXPORTACION_WEB/SS/SSGB-01-01-00WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn2.clarovideo.net/SERIES/SSGB-01-01-00/EXPORTACION_WEB/SS/SSGB-01-01-00WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/SSGB-01-01-01/EXPORTACION_WEB/STILLS/SSGB-01-01-01-STILL-01.jpg",
      image_background:
        "https://clarovideocdn2.clarovideo.net/SERIES/SSGB-01-01-00/EXPORTACION_WEB/CLEAN/SSGB-01-01-00_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn3.clarovideo.net/SERIES/SSGB-01-01-00/EXPORTACION_WEB/CLEAN/SSGB-01-01-00WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn5.clarovideo.net/SERIES/SSGB-01-01-00/EXPORTACION_WEB/CLEAN/SSGB-01-01-00WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn9.clarovideo.net/SERIES/SSGB-01-01-00/EXPORTACION_WEB/SS/SSGB-01-01-00WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn7.clarovideo.net/SERIES/SSGB-01-01-00/EXPORTACION_WEB/SS/SSGB-01-01-00WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn7.clarovideo.net/SERIES/SSGB-01-01-00/EXPORTACION_WEB/SS/SSGB-01-01-00WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn2.clarovideo.net/SERIES/SSGB-01-01-00/EXPORTACION_WEB/CLEAN/SSGB-01-01-00WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn0.clarovideo.net/SERIES/SSGB-01-01-00/EXPORTACION_WEB/CLEAN/SSGB-01-01-00WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn0.clarovideo.net/SERIES/SSGB-01-01-00/EXPORTACION_WEB/CLEAN/SSGB-01-01-00WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/SSGB-01-01-01/EXPORTACION_WEB/SPRITES/SSGB-01-01-01-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/SSGB-01-01-01/EXPORTACION_WEB/SPRITES/SSGB-01-01-01-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "00:51:47",
      date: "20190213130002",
      year: "2017",
      preview: "false",
      season_number: "1",
      episode_number: "1",
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4,
      rating_code: "R",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null,
      },
      recorder_technology: {
        id: null,
        desc: null,
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: true,
      channel_number: null,
    },
  ];
};
