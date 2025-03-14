const url = "https://www.course-api.com/react-tours-project";
type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`error: ${response.status}`);
    }

    const data: Tour[] = await response.json();

    return data;
  } catch (error) {
    const errorMassage =
      error instanceof Error ? error.message : "There is an error....";
    console.log(errorMassage);
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour: Tour) => {
  console.log(tour.info);
});
