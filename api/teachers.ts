import instance from "./instance";
import { Teacher } from "@/types";

export const getTeachers = async () => {
  try {
    const res = await instance.get<Teacher[]>("/teachers");
    return res.data;
  } catch (err) {
    alert("O‘qituvchilarni yuklashda xatolik!");
    console.error(err);
    return [];
  }
};

export const addTeacher = async (teacher: Omit<Teacher, "id">) => {
  try {
    const res = await instance.post("/teachers", teacher);
    return res.data;
  } catch (err) {
    alert("O‘qituvchini qo‘shishda xatolik!");
    console.error(err);
    throw err;
  }
};

export const updateTeacher = async (teacher: Teacher) => {
  try {
    const res = await instance.put(`/teachers/${teacher.id}`, teacher);
    return res.data;
  } catch (err) {
    alert("O‘qituvchini yangilashda xatolik!");
    console.error(err);
    throw err;
  }
};

export const deleteTeacher = async (id: number | string) => {
  try {
    const res = await instance.delete(`/teachers/${id}`);
    return res.data;
  } catch (err) {
    alert("O‘qituvchini o‘chirishda xatolik!");
    console.error(err);
    throw err;
  }
};
