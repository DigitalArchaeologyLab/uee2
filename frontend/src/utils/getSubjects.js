import axios from "axios";

// set empty subjects array, make an axios call and return subject area array

export async function getSubjects() {
  let subjects = [];
  try {
    const response = await axios.get("/api/subjects/");
    subjects = response.data;
  } catch (err) {
    console.error(err);
  }
  return subjects;
}
