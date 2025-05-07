import React, { useEffect, useState } from "react";
import { Teacher } from "@/types";
import {
  getTeachers,
  addTeacher,
  updateTeacher,
  deleteTeacher,
} from "@/api/teachers";
import TeacherModal from "@/components/common/Modal/Teachers";
import {
  PageWrapper,
  Title,
  ActionButton,
  Table,
  TableRow,
  TableHead,
  TableCell,
} from "./TeachersPage.styles";

const TeachersPage = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState<any>(null);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const data = await getTeachers();
      setTeachers(data);
    } catch (error) {
      console.error("O‘qituvchilarni yuklashda xatolik:", error);
      alert("O‘qituvchilarni olishda xatolik yuz berdi.");
    }
  };

  const handleAdd = () => {
    setIsEditing(false);
    setCurrentTeacher({
      firstName: "",
      lastName: "",
      birthDate: "",
      classes: "",
    });
    setIsModalOpen(true);
  };

  const handleEdit = (teacher: Teacher) => {
    setIsEditing(true);
    setCurrentTeacher({
      ...teacher,
      classes: teacher.classes.join(", "),
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number | string) => {
    if (confirm("Haqiqatan ham o‘chirmoqchimisiz?")) {
      try {
        await deleteTeacher(id);
        fetchTeachers();
      } catch (error) {
        console.error("O‘chirishda xatolik:", error);
        alert("O‘qituvchini o‘chirishda xatolik yuz berdi.");
      }
    }
  };

  const handleConfirm = async () => {
    if (
      !currentTeacher?.firstName ||
      !currentTeacher.lastName ||
      !currentTeacher.birthDate
    ) {
      alert("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }

    const teacherToSave = {
      ...currentTeacher,
      classes: currentTeacher.classes
        .split(",")
        .map((id: string) => id.trim())
        .filter((id: string) => id !== "")
        .map((id: string) => (isNaN(Number(id)) ? id : Number(id))),
    };

    try {
      if (isEditing) {
        if (!teacherToSave.id) {
          alert("ID topilmadi, o‘zgartirish mumkin emas.");
          return;
        }
        await updateTeacher(teacherToSave as Teacher);
      } else {
        await addTeacher(teacherToSave as Omit<Teacher, "id">);
      }

      setIsModalOpen(false);
      setCurrentTeacher(null);
      fetchTeachers();
    } catch (error) {
      console.error("Saqlashda xatolik:", error);
      alert("O‘qituvchini saqlashda xatolik yuz berdi.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!currentTeacher) return;
    const { name, value } = e.target;
    setCurrentTeacher({
      ...currentTeacher,
      [name]: value,
    });
  };

  return (
    <PageWrapper>
      <Title>O‘qituvchilar</Title>
      <ActionButton onClick={handleAdd}>O‘qituvchi qo‘shish</ActionButton>

      <Table>
        <thead>
          <TableRow>
            <TableHead>Ismi</TableHead>
            <TableHead>Familiyasi</TableHead>
            <TableHead>Tug‘ilgan sana</TableHead>
            <TableHead>Sinf IDlar</TableHead>
            <TableHead>Amallar</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.id}>
              <TableCell>{teacher.firstName}</TableCell>
              <TableCell>{teacher.lastName}</TableCell>
              <TableCell>{teacher.birthDate}</TableCell>
              <TableCell>{teacher.classes.join(", ")}</TableCell>
              <TableCell>
                <ActionButton onClick={() => handleEdit(teacher)}>✏️</ActionButton>
                <ActionButton delete onClick={() => handleDelete(teacher.id)}>🗑️</ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <TeacherModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        inputsValues={currentTeacher || {}}
        onInputChange={handleInputChange}
        confirmText={isEditing ? "Saqlash" : "Qo‘shish"}
        cancelText="Bekor qilish"
      />
    </PageWrapper>
  );
};

export default TeachersPage;
