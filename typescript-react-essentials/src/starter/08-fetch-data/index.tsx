/* import { useState, useEffect } from "react";
import { Tour, TourSchema } from "./types";

const url = "https://www.course-api.com/react-tours-project";

function Component() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetchData`);
        }
        const rawData = await response.json();
        const result = TourSchema.array().safeParse(rawData);
        console.log(result);
        if (!result.success) {
          console.log(result.error.message);
          throw new Error("Error Khailam Data Pacche na khuje.....");
        }
        setTours(result.data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "There was an error.....";
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <h1>loading.....</h1>;
  }
  if (isError) {
    return <h1>Error: {isError}</h1>;
  }
  return (
    <div>
      <h2>React & Typescript</h2>
      {tours.map((tour) => {
        return (
          <h4 key={tour.id} className="mb-1 btn ">
            {tour.name}
          </h4>
        );
      })}
    </div>
  );
} 
export default Component;
  */

import { fetchTours } from "./types";
import { useQuery } from "@tanstack/react-query";

function Component() {
  const {
    isPending,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchTours,
  });
  if (isPending) return <h2>Loading...</h2>;
  if (isError) return <h2>Error : {error.message} </h2>;
  return (
    <div>
      <h2 className="mb-1">Tours </h2>
      {tours.map((tour) => {
        return (
          <p className="mb-1 bold" key={tour.id}>
            {tour.name}
          </p>
        );
      })}
    </div>
  );
}

export default Component;
