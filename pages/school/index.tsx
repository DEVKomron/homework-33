import React, { useEffect, useState } from "react";
import { getSchoolInfo, updateSchoolInfo, deleteSchool, addSchool } from "@/api/school";
import { School } from "@/types";
import { useRequireAuth } from "@/utils/requireAuth";
import { PageWrapper, Title, ActionButton, CardWrapper, Card, CardItem, CardActions } from "./SchoolPage.styles";
import SchoolModal from "@/components/common/Modal/Schol";

type NewSchool = Omit<School, "id">;

const SchoolPage = () => {
  useRequireAuth();

  const [school, setSchool] = useState<School | null>(null);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [newSchool, setNewSchool] = useState<NewSchool>({
    name: "",
    location: "",
    phoneNumber: "",
    about: "",
    overallStudentCount: 0,
    overallStaffCount: 0,
    overallClassCount: 0,
  });

  useEffect(() => {
    fetchSchool();
  }, []);

  const fetchSchool = async () => {
    const data = await getSchoolInfo();
    if (data) setSchool(data);
  };

  const handleUpdate = (school: School) => {
    setSchool(school);
    setIsUpdating(true);
  };

  const handleDelete = async () => {
    if (school?.id && window.confirm("Are you sure you want to delete this school info?")) {
      await deleteSchool(school.id);
      setSchool(null);
      fetchSchool();
    }
  };

  const handleSaveUpdate = async () => {
    if (school) {
      const { name, location, phoneNumber, about } = school;
      if (!name || !location || !phoneNumber || !about) {
        alert("Iltimos, barcha maydonlarni to‘ldiring.");
        return;
      }

      await updateSchoolInfo(school);
      setIsUpdating(false);
      fetchSchool();
    }
  };

  const handleCancel = () => {
    setIsUpdating(false);
    setIsAdding(false);
    setSchool(null);
  };

  const handleAddSchool = async () => {
    const { name, location, phoneNumber, about } = newSchool;
    if (!name || !location || !phoneNumber || !about) {
      alert("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }

    await addSchool(newSchool);
    setIsAdding(false);
    setNewSchool({
      name: "",
      location: "",
      phoneNumber: "",
      about: "",
      overallStudentCount: 0,
      overallStaffCount: 0,
      overallClassCount: 0,
    });
    fetchSchool();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (isAdding) {
      setNewSchool({
        ...newSchool,
        [name]: name.includes("Count") ? (value ? parseInt(value) : 0) : value,
      });
    } else if (isUpdating && school) {
      setSchool({
        ...school,
        [name]: name.includes("Count") ? (value ? parseInt(value) : 0) : value,
      });
    }
  };

  return (
    <PageWrapper>
      <Title>Maktab Ma'lumotlari</Title>
      {!school && <ActionButton onClick={() => setIsAdding(true)}>Maktab haqida malimot qo‘shish</ActionButton>}

      <CardWrapper>
        {school && (
          <Card key={school.id}>
            <CardItem><strong>Nomi:</strong> {school.name}</CardItem>
            <CardItem><strong>Manzil:</strong> {school.location}</CardItem>
            <CardItem><strong>Telefon:</strong> {school.phoneNumber}</CardItem>
            <CardItem><strong>Haqida:</strong> {school.about}</CardItem>
            <CardItem><strong>O‘quvchilar:</strong> {school.overallStudentCount}</CardItem>
            <CardItem><strong>O‘qituvchilar:</strong> {school.overallStaffCount}</CardItem>
            <CardItem><strong>Sinf soni:</strong> {school.overallClassCount}</CardItem>
            <CardActions>
              <ActionButton onClick={() => handleUpdate(school)}>✏️</ActionButton>
              <ActionButton onClick={handleDelete} delete>🗑️</ActionButton>
            </CardActions>
          </Card>
        )}
      </CardWrapper>

      <SchoolModal
        isOpen={isAdding || isUpdating}
        onClose={handleCancel}
        onConfirm={isAdding ? handleAddSchool : handleSaveUpdate}
        confirmText={isAdding ? "Qo‘shish" : "Saqlash"}
        cancelText="Bekor qilish"
        inputsValues={
          isAdding
            ? newSchool
            : school
            ? {
                ...school,
                overallStudentCount: school.overallStudentCount.toString(),
                overallStaffCount: school.overallStaffCount.toString(),
                overallClassCount: school.overallClassCount.toString(),
              }
            : {
                name: "",
                location: "",
                phoneNumber: "",
                about: "",
                overallStudentCount: "",
                overallStaffCount: "",
                overallClassCount: "", 
              }
        }
        onInputChange={handleInputChange}
      >
        <h3>{isAdding ? "Yangi Maktab Qo‘shish" : "Maktabni Tahrirlash"}</h3>
      </SchoolModal>
    </PageWrapper>
  );
};

export default SchoolPage;
