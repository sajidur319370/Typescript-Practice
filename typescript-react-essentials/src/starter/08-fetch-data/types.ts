import { z } from "zod";
import axios from "axios";

const url = "https://www.course-api.com/react-tours-project";
export const TourSchema = z.object({
  id: z.string(),
  image: z.string(),
  info: z.string(),
  name: z.string(),
  price: z.string(),
});

export type Tour = z.infer<typeof TourSchema>;

export const fetchTours = async (): Promise<Tour[]> => {
  const response = await axios.get<Tour[]>(url);
  const result = TourSchema.array().safeParse(response.data);
  console.log(result);
  if (!result.success) {
    console.log(result.error.message);
    throw new Error("Error Khailam Data Pacche na khuje.....");
  }
  return result.data;
};
