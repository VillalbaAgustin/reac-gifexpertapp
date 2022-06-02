export const getGifs = async (category) => {
    //Importante poner el 'https:/ en la url ya que sin eso arroja un error'
    const url =
        `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=FhCE78HWgAOJUwrBjUVAyDDO4NV5uLh2`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        };
    });
    return gifs;  //al ser async devuelve una promesa que resuelve la colección de imagenes
}