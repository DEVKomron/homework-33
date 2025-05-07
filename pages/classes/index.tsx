import React, { useEffect, useState } from "react";
import { Class } from "@/types";
import {
  getClasses,
  addClass,
  updateClass,
  deleteClassWithStudents
} from "@/api/classes";
import { getStudents } from "@/api/student";
import ClassModal from "@/components/common/Modal/Classes";
import {
  PageWrapper,
  Title,
  ActionButton,
  Table,
  TableRow,
  TableHead,
  TableCell,
} from "./ClassesPage.styles";

const ClassesPage = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  const [studentsMap, setStudentsMap] = useState<{ [key: string]: string[] }>({});
  const [expandedClassId, setExpandedClassId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentClass, setCurrentClass] = useState<Partial<Class> | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const classData = await getClasses();
    const studentData = await getStudents();

    const grouped: { [key: string]: string[] } = {};
    studentData.forEach((s) => {
      if (!grouped[s.classId]) grouped[s.classId] = [];
      grouped[s.classId].push(`${s.firstName} ${s.lastName}`);
    });

    setStudentsMap(grouped);
    setClasses(classData);
  };

  const handleAdd = () => {
    setIsEditing(false);
    setCurrentClass({ name: "", studentCount: 0, teacherId: "" });
    setIsModalOpen(true);
  };

  const handleEdit = (cls: Class) => {
    setIsEditing(true);
    setCurrentClass(cls);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Sinf va unga tegishli o‘quvchilarni o‘chirmoqchimisiz?")) {
      await deleteClassWithStudents(id);
      fetchData();
    }
  };

  const handleConfirm = async () => {
    if (!currentClass?.name || !currentClass?.teacherId) {
      alert("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }

    try {
      if (isEditing && currentClass.id) {
        await updateClass(currentClass as Class);
      } else {
        await addClass(currentClass as Omit<Class, "id">);
      }

      setIsModalOpen(false);
      setCurrentClass(null);
      fetchData();
    } catch (err) {
      console.error("Xatolik:", err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!currentClass) return;
    const { name, value } = e.target;
    setCurrentClass({
      ...currentClass,
      [name]: name === "studentCount" ? Number(value) : value,
    });
  };

  const toggleExpand = (id: string) => {
    setExpandedClassId(prev => (prev === id ? null : id));
  };

  return (
    <PageWrapper>
      <Title>Sinflar</Title>
      <ActionButton onClick={handleAdd}>Sinf qo‘shish</ActionButton>

      <Table>
        <thead>
          <TableRow>
            <TableHead>Nomi</TableHead>
            <TableHead>O‘quvchilar soni</TableHead>
            <TableHead>O‘qituvchi ID</TableHead>
            <TableHead>Amallar</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {classes.map((cls) => (
            <React.Fragment key={cls.id}>
              <TableRow onClick={() => toggleExpand(cls.id)}>
                <TableCell>{cls.name}</TableCell>
                <TableCell>{cls.studentCount}</TableCell>
                <TableCell>{cls.teacherId}</TableCell>
                <TableCell>
                  <ActionButton onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(cls);
                  }}>✏️</ActionButton>
                  <ActionButton delete onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(cls.id);
                  }}>🗑️</ActionButton>
                </TableCell>
              </TableRow>
              {expandedClassId === cls.id && (
                <TableRow>
                  <TableCell colSpan={4}>
                    <strong>O‘quvchilar:</strong><br />
                    {studentsMap[cls.id]?.length > 0
                      ? studentsMap[cls.id].join(", ")
                      : "Bu sinfda o‘quvchi yo‘q"}
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>

      <ClassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        inputsValues={currentClass || {}}
        onInputChange={handleInputChange}
        confirmText={isEditing ? "Saqlash" : "Qo‘shish"}
        cancelText="Bekor qilish"
      />
    </PageWrapper>
  );
};

export default ClassesPage;
