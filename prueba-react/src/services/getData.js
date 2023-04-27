import jsonPath from "data/sample.json";

const fromApiResponseToData = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const mediaData = data.images.map((image) => {
      const { title } = image;
      const { programType } = data.programType;
      const url = data.images["Poster Art"].url;
      return { title, url, programType };
    });
    return mediaData;
  }
  return [];
};
export default function getData() {
  return fetch(jsonPath.entries)
    .then((res) => res.json())
    .then(fromApiResponseToData);
}
