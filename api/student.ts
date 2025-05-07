import { Student } from "@/types";
import instance from "./instance";

export const getStudents = async (): Promise<Student[]> => {
  try {
    const res = await instance.get<Student[]>("/students");
    return res.data ?? []; 
  } catch (e) {
    alert("Failed to fetch students!");
    return []; 
  }
};


export const addStudent = async (student: Omit<Student, "id">) => {
    try {
      const res = await instance.post("/students", student);
      return res.data;
    } catch (e) {
      alert("Failed to add student!");
    }
  };

export const updateStudent = async (id: string, updatedStudent: Student) => {
  try {
    const res = await instance.put(`/students/${id}`, updatedStudent);
    return res.data;
  } catch (e) {
    alert("Failed to update student!");
  }
};

export const deleteStudent = async (id: string) => {
  try {
    const res = await instance.delete(`/students/${id}`);
    return res.data;
  } catch (e) {
    alert("Failed to delete student!");
  }
};
