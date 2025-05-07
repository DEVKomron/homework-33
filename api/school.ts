import { School } from "@/types";
import instance from "./instance";

export const getSchoolInfo = async () => {
  try {
    const res = await instance.get<School[]>("/school");
    return res.data.length > 0 ? res.data[0] : null; 
  } catch (e) {
    alert("Maktab ma’lumotlarini olishda xatolik yuz berdi!");
    console.error(e);
  }
};

export const updateSchoolInfo = async (updatedSchool: School) => {
  try {
    const res = await instance.put(`/school/${updatedSchool.id}`, updatedSchool);
    return res.data;
  } catch (e) {
    alert("Maktab ma’lumotlarini yangilashda xatolik yuz berdi!");
    console.error(e);
  }
};

export const addSchool = async (newSchool: Omit<School, "id">) => {
  try {
    const res = await instance.post("/school", newSchool);
    return res.data;
  } catch (e) {
    alert("Maktab qo'shishda xatolik yuz berdi!");
    console.error(e);
  }
};

export const deleteSchool = async (id: string | number) => {
  try {
    const res = await instance.delete(`/school/${id}`);
    return res.data;
  } catch (e) {
    alert("Maktabni o'chirishda xatolik yuz berdi!");
    console.error(e);
  }
};
