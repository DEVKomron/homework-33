import React, { useEffect, useState } from "react";
import { getStudents, addStudent, updateStudent, deleteStudent } from "@/api/student";
import { Student } from "@/types";
import { useRequireAuth } from "@/utils/requireAuth";
import { PageWrapper, Title, Table, Th, Td, ActionButton } from "./students/StudentsPage.styles";
import Modal from "@/components/common/Modal/StudentsModal";

type NewStudent = Omit<Student, "id">;

const StudentsPage = () => {
  useRequireAuth();

  const [students, setStudents] = useState<Student[]>([]);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [newStudent, setNewStudent] = useState<NewStudent>({
    firstName: "",
    lastName: "",
    birthDate: "",
    classId: "",
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const data = await getStudents();
    if (data) setStudents(data);
  };

  const handleUpdate = (student: Student) => {
    setSelectedStudent(student);
    setIsUpdating(true);
  };

  const handleDelete = async (id: string | number) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      await deleteStudent(id.toString());
      fetchStudents();
    }
  };

  const handleSaveUpdate = async () => {
    if (selectedStudent) {
      const { firstName, lastName, birthDate, classId } = selectedStudent;
      if (!firstName || !lastName || !birthDate || !classId) {
        alert("Iltimos, barcha maydonlarni to'ldiring.");
        return;
      }
  
      await updateStudent(selectedStudent.id.toString(), selectedStudent);
      setIsUpdating(false);
      setSelectedStudent(null);
      fetchStudents();
    }
  };
  

  const handleCancelUpdate = () => {
    setIsUpdating(false);
    setIsAdding(false);
    setSelectedStudent(null);
  };

  const handleAddStudent = async () => {
    const { firstName, lastName, birthDate, classId } = newStudent;
    if (!firstName || !lastName || !birthDate || !classId) {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }
  
    await addStudent(newStudent);
    setIsAdding(false);
    setNewStudent({
      firstName: "",
      lastName: "",
      birthDate: "",
      classId: "",
    });
    fetchStudents();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (isAdding) {
      setNewStudent({ ...newStudent, [name]: value });
    } else if (isUpdating && selectedStudent) {
      setSelectedStudent({
        ...selectedStudent,
        [name]: value,
      });
    }
  };

  return (
    <PageWrapper>
      <Title>Talabalar ro'yxati</Title>
      <ActionButton onClick={() => setIsAdding(true)}>Talaba qo'shish</ActionButton>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Ism</Th>
            <Th>Familiya</Th>
            <Th>Tug'ilgan sana</Th>
            <Th>Sinf ID</Th>
            <Th>Amallar</Th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <Td>{student.id}</Td>
              <Td>{student.firstName}</Td>
              <Td>{student.lastName}</Td>
              <Td>{student.birthDate}</Td>
              <Td>{student.classId}</Td>
              <Td>
                <ActionButton onClick={() => handleUpdate(student)}>✏️</ActionButton>
                <ActionButton onClick={() => handleDelete(student.id)} delete>🗑️</ActionButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        isOpen={isAdding || isUpdating}
        onClose={handleCancelUpdate}
        onConfirm={isAdding ? handleAddStudent : handleSaveUpdate}
        confirmText={isAdding ? "Qo'shish" : "Saqlash"}
        cancelText="Bekor qilish"
        inputsValues={
          isAdding
            ? { ...newStudent, classId: newStudent.classId.toString() }
            : selectedStudent
            ? {
                firstName: selectedStudent.firstName,
                lastName: selectedStudent.lastName,
                birthDate: selectedStudent.birthDate,
                classId: selectedStudent.classId.toString(),
              }
            : { firstName: "", lastName: "", birthDate: "", classId: "" }
        }
        onInputChange={handleInputChange}
      >
        <h3>{isAdding ? "Yangi Talaba Qo'shish" : "Talabani tahrirlash"}</h3>
      </Modal>
    </PageWrapper>
  );
};

export default StudentsPage;
