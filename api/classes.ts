import instance from "./instance";
import { Class, Student } from "@/types";

export const getClasses = async () => {
  try {
    const res = await instance.get<Class[]>("/classes");
    return res.data;
  } catch (err) {
    alert("Sinflarni olishda xatolik yuz berdi.");
    throw err;
  }
};

export const addClass = async (newClass: Omit<Class, "id">) => {
  try {
    const res = await instance.post("/classes", newClass);
    return res.data;
  } catch (err) {
    alert("Sinfni qo‘shishda xatolik yuz berdi.");
    throw err;
  }
};

export const updateClass = async (updatedClass: Class) => {
  try {
    const res = await instance.put(`/classes/${updatedClass.id}`, updatedClass);
    return res.data;
  } catch (err) {
    alert("Sinfni yangilashda xatolik yuz berdi.");
    throw err;
  }
};

export const deleteClassWithStudents = async (classId: string) => {
  try {
    const studentsRes = await instance.get<Student[]>("/students");
    const relatedStudents = studentsRes.data.filter((s) => s.classId === classId);

    await Promise.all(relatedStudents.map((s) => instance.delete(`/students/${s.id}`)));
    await instance.delete(`/classes/${classId}`);
  } catch (err) {
    alert("Sinf va unga tegishli o‘quvchilarni o‘chirishda xatolik.");
    throw err;
  }
};
